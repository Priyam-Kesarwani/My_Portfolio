import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

let scriptPromise = null;

function loadTurnstile() {
  if (typeof window !== "undefined" && window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-turnstile="1"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("captcha failed to load")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = "1";
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("captcha failed to load"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export const ContactGuard = forwardRef(function ContactGuard(
  {
    id = "contact",
    siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "0x4AAAAAAFLAwTSZZaLkrdYK",
    theme = "dark",
  },
  ref
) {
  const containerRef = useRef(null);
  const websiteRef = useRef(null);
  const hpWebsiteRef = useRef(null);
  const widgetId = useRef(null);
  const tokenRef = useRef("");

  useImperativeHandle(ref, () => ({
    reset: () => {
      tokenRef.current = "";
      if (widgetId.current && window.turnstile) {
        window.turnstile.reset(widgetId.current);
      }
    },
    getValue: () => ({
      captchaToken: tokenRef.current,
      website: websiteRef.current?.value ?? "",
      hpWebsite: hpWebsiteRef.current?.value ?? "",
    }),
  }));

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;
    let cancelled = false;

    loadTurnstile()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile || widgetId.current) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme,
          callback: (token) => {
            tokenRef.current = token;
          },
          "expired-callback": () => {
            tokenRef.current = "";
          },
          "error-callback": () => {
            tokenRef.current = "";
          },
        });
      })
      .catch((err) => {
        console.error("Turnstile failed to load:", err);
        tokenRef.current = "";
      });

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [siteKey, theme]);

  return (
    <div className="w-full">
      {/* Honeypot hidden fields for bot protection */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          ref={websiteRef}
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
        <label htmlFor={`${id}-hp-website`}>Company website</label>
        <input
          ref={hpWebsiteRef}
          id={`${id}-hp-website`}
          name="hp_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Cloudflare Turnstile captcha widget */}
      {siteKey ? (
        <div className="flex justify-start my-1 overflow-x-auto">
          <div ref={containerRef} className="min-h-[65px] rounded-lg overflow-hidden" />
        </div>
      ) : (
        <p className="text-xs text-red-400 mt-1">Verification check is not configured.</p>
      )}
    </div>
  );
});

export default ContactGuard;
