import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about" className="mt-16 px-4 scroll-mt-24">
      <div className="container flex flex-col lg:flex-row gap-8 justify-center items-center mx-auto">
        {/* left section */}
        <div className="flex-1">
          <img
            className="object-cover w-full rounded-2xl shadow-md"
            src="/About.png"
            alt="About West Mount Estate"
          />
        </div>
        {/* Right section  */}
        <div className="flex-1 flex flex-col items-start justify-center gap-5">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest">
            Welcome to West Mount Estate
          </span>
          <h2 className="text-[36px] sm:text-[40px] m-0 leading-[48px] font-bold text-gray-900">
            Discover Our Legacy & Scenic Destinations
          </h2>
          <p className="text-[16px] m-0 leading-[28px] text-gray-600">
            Founded on the pillars of refined luxury, serene architecture, and bespoke hospitality,
            West Mount Estate provides exclusive stays and premier accommodations nestled in breathtaking
            mountain and valley landscapes.
          </p>
          <p className="text-[16px] m-0 leading-[28px] text-gray-600">
            Whether you are booking a restorative getaway, planning an executive summit, or seeking
            a world-class retreat, our team guarantees exceptional personal service, round-the-clock
            concierge, and timeless tranquility.
          </p>
          <Link to="/contact">
            <button className="primary-button mt-2 py-4 px-8 rounded-280 text-sm font-semibold shadow-md hover:shadow-lg">
              Explore More & Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
