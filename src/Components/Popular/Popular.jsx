import React from "react";
import Rating from "../Rating";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <section id="popular" className="mt-16 px-4 scroll-mt-24">
      <div className="container mx-auto">
        {/* top */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[36px] sm:text-[40px] m-0 leading-[51px] font-bold text-gray-900">
            Our Most Popular Estate Stays
          </h2>
          <div className="flex justify-between items-end flex-wrap gap-4">
            <p className="text-[16px] m-0 leading-[28px] text-gray-600">
              Discover signature suites, scenic mountain lodges, and luxury villas <br className="hidden sm:inline" /> curated by West Mount Estate.
            </p>
            <Link to="/contact">
              <button className="text-secondary bg-[#24ab7115] hover:bg-[#24ab7125] font-semibold rounded-[35px] px-6 py-3 transition-colors text-sm">
                Reserve A Stay
              </button>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="gap-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* 1st */}
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100">
            <div>
              <img className="w-full h-56 object-cover" src="/hotel-1.png" alt="West Mount Mountain Lodge" />
            </div>
            <div className="py-6 px-5 flex flex-col gap-2">
              <p className="m-0 text-[13px] font-semibold text-secondary uppercase tracking-wider">
                West Mount Ridge &bull; CA
              </p>
              <h3 className="m-0 text-[22px] font-bold text-gray-900">
                Evergreen Ridge Villa
              </h3>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="m-0 text-[16px] font-bold text-[#222222]">
                  $280 <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
                <Rating />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100">
            <div>
              <img className="w-full h-56 object-cover" src="/hotel-2.png" alt="West Mount Valley Suites" />
            </div>
            <div className="py-6 px-5 flex flex-col gap-2">
              <p className="m-0 text-[13px] font-semibold text-secondary uppercase tracking-wider">
                Valley Haven &bull; CA
              </p>
              <h3 className="m-0 text-[22px] font-bold text-gray-900">
                The Resident Valley Suite
              </h3>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="m-0 text-[16px] font-bold text-[#222222]">
                  $240 <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
                <Rating />
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out border border-gray-100">
            <div>
              <img className="w-full h-56 object-cover" src="/hotel3.png" alt="West Mount Grand Chalet" />
            </div>
            <div className="py-6 px-5 flex flex-col gap-2">
              <p className="m-0 text-[13px] font-semibold text-secondary uppercase tracking-wider">
                Summit Heights &bull; CA
              </p>
              <h3 className="m-0 text-[22px] font-bold text-gray-900">
                Summit Grand Chalet
              </h3>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="m-0 text-[16px] font-bold text-[#222222]">
                  $320 <span className="text-xs font-normal text-gray-500">/ night</span>
                </p>
                <Rating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
