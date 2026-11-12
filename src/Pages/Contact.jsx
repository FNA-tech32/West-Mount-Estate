import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSend, BiCheckCircle } from "react-icons/bi";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaBuilding,
} from "react-icons/fa";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Submitted:", data);
    setSubmittedData(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-[#FAFDFB] min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section */}
        <div className="title-banner my-6 py-16 md:py-20 bg-secondary text-center rounded-2xl shadow-sm text-white">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs md:text-sm font-semibold uppercase tracking-widest bg-white/20 rounded-full">
            West Mount Estate Concierge
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-openSans mb-3">
            24/7 Full Support & Guest Services
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90 px-4">
            Connect with our dedicated estate team. Whether you need booking assistance,
            custom stay accommodations, or alternative contact channels, we are here for you.
          </p>
        </div>

        {/* Contact Info Cards (Primary & Alternative Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {/* Card 1: Phone Numbers (Primary & Alternative) */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
              <FaPhoneAlt size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-openSans">
              Phone Contacts
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Reach our front desk directly or use our 24/7 alternative concierge hotline.
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2.5 bg-gray-50 rounded-lg">
                <span className="block text-xs font-semibold uppercase text-secondary">
                  Primary Hotline (Front Desk)
                </span>
                <a
                  href="tel:+18004567890"
                  className="font-medium text-gray-800 hover:text-secondary transition-colors"
                >
                  +1 (800) 456-7890
                </a>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-lg">
                <span className="block text-xs font-semibold uppercase text-secondary">
                  Alternative Line (24/7 Concierge)
                </span>
                <a
                  href="tel:+18004567899"
                  className="font-medium text-gray-800 hover:text-secondary transition-colors"
                >
                  +1 (800) 456-7899
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Email Details (Primary & Alternative) */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
              <FaEnvelope size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-openSans">
              Email Channels
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Send us inquiries, reservation requests, or support messages anytime.
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2.5 bg-gray-50 rounded-lg">
                <span className="block text-xs font-semibold uppercase text-secondary">
                  Primary Email (General)
                </span>
                <a
                  href="mailto:info@westmountestate.com"
                  className="font-medium text-gray-800 hover:text-secondary transition-colors"
                >
                  info@westmountestate.com
                </a>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-lg">
                <span className="block text-xs font-semibold uppercase text-secondary">
                  Alternative Email (Support & Booking)
                </span>
                <a
                  href="mailto:support@westmountestate.com"
                  className="font-medium text-gray-800 hover:text-secondary transition-colors"
                >
                  support@westmountestate.com
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Physical Locations (Estate & Alternative Branch) */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
              <FaMapMarkerAlt size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-openSans">
              Estate & Office Locations
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Visit our primary estate grounds or our metropolitan administrative office.
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2.5 bg-gray-50 rounded-lg">
                <span className="block text-xs font-semibold uppercase text-secondary">
                  Main Estate Property
                </span>
                <span className="font-medium text-gray-800">
                  742 Evergreen Valley Rd, Mountain View, CA 94043
                </span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-lg">
                <span className="block text-xs font-semibold uppercase text-secondary">
                  Alternative City Office
                </span>
                <span className="font-medium text-gray-800">
                  Suite 400, Financial Plaza, San Francisco, CA 94111
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form & Assistance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-2xl border border-gray-100 shadow-sm">
          {/* Left Column: Context & Support info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 font-openSans">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-openSans">
                Experience prompt and attentive assistance with West Mount Estate.
                Please provide your contact details along with any alternative contact
                detail (such as a secondary phone number or alternative email) so our
                team can guarantee swift and uninterrupted communication.
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <FaClock className="text-secondary mt-1 shrink-0" size={16} />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 m-0">Operating Hours</h4>
                    <p className="text-xs text-gray-500 m-0">
                      Estate Front Desk & Concierge: 24 Hours / 7 Days a week
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaHeadset className="text-secondary mt-1 shrink-0" size={16} />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 m-0">Fast Response Guarantee</h4>
                    <p className="text-xs text-gray-500 m-0">
                      All online inquiries are acknowledged within 1-2 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaBuilding className="text-secondary mt-1 shrink-0" size={16} />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 m-0">VIP & Corporate Reservations</h4>
                    <p className="text-xs text-gray-500 m-0">
                      Direct consultation available for private estate bookings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary rounded-xl border border-secondary/20">
              <p className="text-xs text-gray-600 m-0">
                <strong>Need Immediate Assistance?</strong> Call our 24/7 hotline at{" "}
                <a href="tel:+18004567890" className="text-secondary font-semibold hover:underline">
                  +1 (800) 456-7890
                </a>{" "}
                or alternative line{" "}
                <a href="tel:+18004567899" className="text-secondary font-semibold hover:underline">
                  +1 (800) 456-7899
                </a>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-start gap-3 animate-fadeIn">
                <BiCheckCircle className="text-secondary shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-semibold text-sm m-0">Message Received!</h4>
                  <p className="text-xs mt-1 text-emerald-700 m-0">
                    Thank you, {submittedData?.fullName || "Guest"}. Your inquiry has been routed to
                    the West Mount Estate guest support team. We will contact you at{" "}
                    <strong>{submittedData?.email}</strong>
                    {submittedData?.altContact && ` or via alternative contact (${submittedData.altContact})`}.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1 font-openSans">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  {...register("fullName", {
                    required: "Please enter your full name",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary font-openSans"
                />
                {errors.fullName && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Primary Email & Primary Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1 font-openSans">
                    Primary Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Please enter your email address",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="name@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary font-openSans"
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1 font-openSans">
                    Primary Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: "Please enter your contact phone number",
                    })}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary font-openSans"
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-xs mt-1 font-medium">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Alternative Contact Detail (Phone / Alternate Email) */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1 font-openSans">
                  Alternative Detail (Secondary Phone / Alternative Email){" "}
                  <span className="text-secondary text-xs font-normal">(Recommended)</span>
                </label>
                <input
                  {...register("altContact")}
                  type="text"
                  placeholder="e.g. +1 (555) 987-6543 or alt-email@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary font-openSans"
                />
                <span className="text-xs text-gray-500 mt-0.5 block">
                  Provide an alternative phone or secondary email so we can reach you without delay.
                </span>
              </div>

              {/* Inquiry Type / Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1 font-openSans">
                  Inquiry Topic <span className="text-rose-500">*</span>
                </label>
                <select
                  {...register("subject", {
                    required: "Please select an inquiry topic",
                  })}
                  defaultValue=""
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary font-openSans bg-white"
                >
                  <option value="" disabled>
                    Select an inquiry type...
                  </option>
                  <option value="Stay Reservation">Estate Stay & Villa Reservation</option>
                  <option value="Private Tour">Guided Tour & Site Visit</option>
                  <option value="Facilities & Services">Facilities & Amenity Questions</option>
                  <option value="Support & Assistance">Guest Support & Concierge Assistance</option>
                  <option value="Other">Other Inquiry</option>
                </select>
                {errors.subject && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1 font-openSans">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "Please enter your message",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  rows={4}
                  placeholder="How can West Mount Estate assist you today?"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none transition focus:border-secondary focus:ring-1 focus:ring-secondary font-openSans resize-y"
                ></textarea>
                {errors.message && (
                  <p className="text-rose-500 text-xs mt-1 font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primary-button flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <BiSend size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
