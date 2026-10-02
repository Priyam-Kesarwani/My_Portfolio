import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ww3a44a",  // Replace with your EmailJS Service ID
        "template_zg87q9a",  // Replace with your EmailJS Template ID
        form.current,
        "xq_izEhicFczHFxNy"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
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
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-medium max-w-2xl mx-auto">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg mx-auto rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/90 to-[#0a0820]/90 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.22)] hover:border-[#8245ec]/80 hover:shadow-[0_0_35px_rgba(130,69,236,0.35)] transition-all duration-300 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3.5 rounded-xl bg-white/5 text-white border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3.5 rounded-xl bg-white/5 text-white border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3.5 rounded-xl bg-white/5 text-white border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3.5 rounded-xl bg-white/5 text-white border border-gray-700/80 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec] transition-all text-sm resize-none"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-[#8245ec] hover:bg-[#9353f7] active:scale-98 py-3.5 text-white font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(130,69,236,0.4)] cursor-pointer text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
