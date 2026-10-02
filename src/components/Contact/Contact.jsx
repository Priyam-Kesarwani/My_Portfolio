import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiTag, FiBriefcase, FiCopy, FiCheck } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import ContactGuard from "./ContactGuard";

const Contact = () => {
  const form = useRef();
  const guardRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("priyam.kesarwani72@gmail.com");
    setCopied(true);
    toast.info("Email copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const guard = guardRef.current?.getValue();

    // Honeypot check: If bot filled hidden fields, simulate success without sending email
    if (guard?.website || guard?.hpWebsite) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        form.current?.reset();
        setFormData({ name: "", email: "", subject: "", message: "" });
        guardRef.current?.reset();
        toast.success("Message sent successfully! I will get back to you soon. ✅", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }, 500);
      return;
    }

    // Turnstile Captcha verification check
    if (!guard?.captchaToken) {
      toast.warn("Please complete the verification check before sending. 🛡️", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Contact service is not configured. Please email directly.", {
        position: "top-right",
        autoClose: 3500,
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          setFormData({ name: "", email: "", subject: "", message: "" });
          guardRef.current?.reset();
          toast.success("Message sent successfully! I will get back to you soon. ✅", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setLoading(false);
          guardRef.current?.reset();
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again or email directly.", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full bg-section-space relative z-[1] -mt-16 clip-polygon-right pt-24 pb-28 sm:pb-32 font-sans scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            I’d love to hear from you—reach out for any projects, opportunities, or inquiries!
          </p>
        </div>

        {/* Freelance Availability Pill */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full border border-emerald-500/40 bg-gradient-to-r from-emerald-950/70 via-emerald-900/30 to-emerald-950/70 text-emerald-300 text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.22)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Ready to work on freelancing projects & full-stack development</span>
          </div>
        </div>

        {/* 2-Column Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 via-[#0d0926]/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.18)] p-6 sm:p-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Let's Build Together
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Have a product idea, need an MVP designed & engineered, or looking for a skilled full-stack engineer? I'm available for freelance engagements and high-impact engineering roles.
              </p>

              {/* Contact Detail Cards */}
              <div className="space-y-4 sm:space-y-5">
                {/* Availability Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <FiBriefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Work Status
                    </h4>
                    <p className="text-sm font-semibold text-emerald-300">
                      Ready to work on freelancing projects
                    </p>
                  </div>
                </div>

                {/* Email Item with 1-click Copy */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#8245ec]/20 border border-[#8245ec]/40 flex items-center justify-center text-purple-300 shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Direct Email
                    </h4>
                    <a
                      href="mailto:priyam.kesarwani72@gmail.com"
                      className="text-sm font-medium text-white hover:text-purple-300 transition-colors truncate block"
                    >
                      priyam.kesarwani72@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email Address"
                  >
                    {copied ? <FiCheck className="w-4 h-4 text-green-400" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#8245ec]/20 border border-[#8245ec]/40 flex items-center justify-center text-purple-300 shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Location
                    </h4>
                    <p className="text-sm font-medium text-gray-200">
                      Noida / Lucknow / Prayagraj, India (Open to Remote Worldwide)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="pt-8 mt-6 border-t border-gray-800">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">
                Connect Directly
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Priyam-Kesarwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/priyam-kesarwani-55aa0924b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <FaLinkedin className="text-base text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 via-[#0f0a2b]/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_30px_rgba(130,69,236,0.22)] p-6 sm:p-8 hover:border-[#8245ec]/70 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span>Send Me a Message</span>
              <span className="text-lg">🚀</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Fill out the form below and I'll respond within 24 hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
              {/* Universal EmailJS Template Aliases - ensures all template variable formats are populated */}
              <input type="hidden" name="from_name" value={formData.name} />
              <input type="hidden" name="name" value={formData.name} />
              <input type="hidden" name="from_email" value={formData.email} />
              <input type="hidden" name="reply_to" value={formData.email} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="title" value={formData.subject} />
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              {/* Name & Email in 2 columns on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <FiUser />
                    </span>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <FiMail />
                    </span>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="e.g. john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <FiTag />
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Freelance Project / Full-Stack Role"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <div className="relative">
                  <span className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                    <FiMessageSquare />
                  </span>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm resize-none"
                  />
                </div>
              </div>

              {/* Cloudflare Turnstile Verification & Bot Protection */}
              <ContactGuard ref={guardRef} id="portfolio-contact" />

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#8245ec] hover:bg-[#9353f7] active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed py-3.5 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(130,69,236,0.4)] hover:shadow-[0_0_30px_rgba(130,69,236,0.6)] cursor-pointer text-sm"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
