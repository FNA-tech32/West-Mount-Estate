import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaAppStoreIos,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white">
      <div className="container mx-auto">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10">
          {/* Brand Column */}
          <div>
            <h2 className="mb-4 text-white text-2xl font-bold tracking-tight">
              <span className="text-secondary">West Mount</span> Estate
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              West Mount Estate delivers unparalleled luxury, peaceful accommodations,
              and bespoke concierge experiences in prime scenic destinations.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex justify-center items-center w-8 h-8 bg-white/10 hover:bg-secondary text-white rounded-full transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex justify-center items-center w-8 h-8 bg-white/10 hover:bg-secondary text-white rounded-full transition-colors"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex justify-center items-center w-8 h-8 bg-white/10 hover:bg-secondary text-white rounded-full transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 p-0 list-none text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#booking" className="text-gray-300 hover:text-secondary transition-colors">
                  Book A Stay
                </a>
              </li>
              <li>
                <a href="/#facilities" className="text-gray-300 hover:text-secondary transition-colors">
                  Estate Facilities
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-secondary transition-colors">
                  About West Mount
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Alternative Details Column */}
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold uppercase tracking-wider">
              Contact Details
            </h3>
            <ul className="space-y-3.5 p-0 list-none text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" size={15} />
                <span>
                  <strong>Estate:</strong> 742 Evergreen Valley Rd, Mountain View, CA 94043
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-secondary mt-1 shrink-0" size={14} />
                <div className="flex flex-col">
                  <span><strong>Primary:</strong> +1 (800) 456-7890</span>
                  <span className="text-xs text-gray-400"><strong>Alternative:</strong> +1 (800) 456-7899</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-secondary mt-1 shrink-0" size={14} />
                <div className="flex flex-col">
                  <span><strong>Primary:</strong> info@westmountestate.com</span>
                  <span className="text-xs text-gray-400"><strong>Alternative:</strong> support@westmountestate.com</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-secondary shrink-0" size={14} />
                <span>24/7 Full Support & Concierge</span>
              </li>
            </ul>
          </div>

          {/* Apps & Certifications Column */}
          <div>
            <h3 className="mb-4 text-white text-lg font-semibold uppercase tracking-wider">
              Guest Services
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Download the West Mount mobile companion for keyless entry and instant room service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors cursor-pointer">
                <FaAppStoreIos size={22} className="text-secondary" />
                <div>
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="font-semibold leading-tight">Apple iOS App</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors cursor-pointer">
                <FaGooglePlay size={18} className="text-secondary" />
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold leading-tight">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p className="m-0">
            &copy; {currentYear} West Mount Estate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link to="/contact" className="hover:text-white transition-colors">24/7 Help Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
