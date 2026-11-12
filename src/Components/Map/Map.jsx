import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Map = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <section id="location" className="mt-16 scroll-mt-24">
      <div className="container mx-auto h-[600px] md:h-[677px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div
          className="h-full w-full"
          style={{
            position: "relative",
          }}
        >
          {/* Google Map iframe */}
          <iframe
            title="Google Map - West Mount Estate"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60502.96642095626!2d73.67601878315675!3d18.599476123009214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc048041bef%3A0xd0c9eb5ac3c3dee5!2sHinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707756827316!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Overlay content */}
          <div
            className="flex flex-col items-start xl:flex-row xl:items-center justify-between gap-6"
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
              padding: "24px 28px",
              borderRadius: "16px",
              width: "90%",
              maxWidth: "1100px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Left section */}
            <div className="flex-1">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                Prime Estate Location
              </span>
              <h2 className="text-[26px] sm:text-[32px] m-0 font-bold text-gray-900 leading-tight">
                Location of West Mount Estate
              </h2>
              <p className="text-[14px] sm:text-[15px] m-0 mt-2 text-gray-600 leading-relaxed">
                742 Evergreen Valley Rd, Mountain View, CA 94043 &bull; Call: +1 (800) 456-7890 | Alt: +1 (800) 456-7899
              </p>
            </div>

            {/* Right section - Quick inquiry / newsletter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">
              {subscribed ? (
                <div className="text-secondary text-sm font-semibold bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                  ✓ Thank you! We've sent travel directions and details to your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email for estate guide..."
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-secondary focus:ring-1 focus:ring-secondary min-w-[260px]"
                  />
                  <button
                    type="submit"
                    className="primary-button px-5 py-2.5 text-white font-semibold rounded-lg text-sm shadow hover:shadow-md whitespace-nowrap"
                  >
                    Get Directions
                  </button>
                </form>
              )}
              <Link to="/contact">
                <button className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
