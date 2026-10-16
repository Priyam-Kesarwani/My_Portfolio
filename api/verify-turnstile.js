export default async function handler(req, res) {
  // CORS configuration
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed. Only POST requests are accepted.",
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { token } = body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Verification token is required.",
      });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error("[Turnstile] TURNSTILE_SECRET_KEY is not configured.");
      return res.status(500).json({
        success: false,
        message: "Turnstile secret key is not configured on the server.",
      });
    }

    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);

    // Optional: add remote client IP if available and not a local address
    const forwarded = req.headers["x-forwarded-for"];
    const rawIp = Array.isArray(forwarded)
      ? forwarded[0]
      : (forwarded || req.socket?.remoteAddress || "").split(",")[0].trim();

    if (
      rawIp &&
      rawIp !== "::1" &&
      rawIp !== "127.0.0.1" &&
      !rawIp.startsWith("10.") &&
      !rawIp.startsWith("192.168.")
    ) {
      formData.append("remoteip", rawIp);
    }

    const cfResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );

    const outcome = await cfResponse.json();

    if (outcome.success) {
      return res.status(200).json({
        success: true,
        message: "Turnstile verification successful",
      });
    }

    console.warn("[Turnstile] Siteverify rejected token:", outcome["error-codes"]);
    return res.status(400).json({
      success: false,
      message: "Captcha verification failed.",
      errorCodes: outcome["error-codes"] || [],
    });
  } catch (error) {
    console.error("[Turnstile] Error calling Cloudflare siteverify:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during verification.",
    });
  }
}
