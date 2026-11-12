import React from "react";

const Hero = () => {
  return (
    <section id="booking" className="scroll-mt-24">
      <div className="container mx-auto flex lg:flex-row flex-col relative ">
        <div className="hero__container--left flex-1 bg-primary rounded-ss-[50px] ">
          <div className="flex flex-col lg:pl-12 lg:pt-12 lg:gap-6 pl-6 pt-4 pr-4 gap-4 lg:mt-6 items-start mb-4 md:mb-0 xl:mt-16 py-5">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Exclusive Luxury Living
            </span>
            <h1 className="text-[42px] lg:text-[52px] xl:text-[62px] m-0 text-left font-bold text-gray-900 2xl:text-[80px] leading-tight">
              Find your perfect retreat at West Mount Estate
            </h1>
            <p className="m-0 font-normal leading-8 text-left text-[18px] 2xl:text-[22px] text-gray-600">
              Immerse yourself in premium accommodations, bespoke estate villas, and scenic hotel stays crafted for absolute comfort.
            </p>
            <div className="flex items-center gap-3 lg:mt-4 mt-1 cursor-pointer">
              <img src="/video.png" alt="Watch tour" />
              <p className="text-[18px] font-semibold 2xl:text-[22px] text-gray-800 m-0">
                Watch estate video
              </p>
            </div>
          </div>
        </div>
        <div className="hero__container--right flex-1 ">
          <div className="bg-primary">
            <img
              src="/hero.png"
              alt="West Mount Estate Hero"
              className="h-[20rem] w-full object-cover md:h-full rounded-tr-[50px]"
            />
          </div>
        </div>
        <div className="absolute bottom-6 w-[85%] lg:w-[75%] mx-auto bg-white left-0 right-0 rounded-280 flex justify-between p-2 md:p-6 items-center shadow-lg border border-gray-100">
          {/* 1st */}
          <div className="flex items-start gap-2 pl-2">
            <img src="/pin.png" alt="Location pin" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[16px] md:text-[20px] font-semibold text-[#222222]">
                Location
              </p>
              <p className="m-0 text-[#555555] text-[14px] hidden md:block">
                Mountain View, CA
              </p>
            </span>
          </div>
          {/* 2nd  */}
          <div className="flex items-start gap-2 border-r border-gray-200 pr-3">
            <img src="/cale.png" alt="Calendar check in" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[16px] md:text-[20px] font-semibold text-[#222222]">
                Check in
              </p>
              <p className="m-0 hidden md:block text-[#555555] text-[14px]">
                Select Date
              </p>
            </span>
          </div>
          {/* 3rd  */}
          <div className="hidden lg:flex items-start gap-2 border-r border-gray-200 pr-3">
            <img src="/cale.png" alt="Calendar check out" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[20px] font-semibold text-[#222222]">
                Check out
              </p>
              <p className="m-0 text-[#555555] text-[14px]">
                Select Date
              </p>
            </span>
          </div>
          {/* 4th  */}
          <div className="hidden md:flex items-start gap-2 border-r border-gray-200 pr-3">
            <img src="/person.png" alt="Guests" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[20px] font-semibold text-[#222222]">
                Guests
              </p>
              <p className="m-0 text-[#555555] text-[14px]">
                1 Villa, 2 Guests
              </p>
            </span>
          </div>
          <div className="bg-secondary flex gap-2 items-center px-4 md:px-8 py-2 md:py-3 rounded-280 cursor-pointer hover:bg-emerald-600 transition-colors">
            <img src="/search.png" alt="Search icon" />
            <p className="text-white font-semibold m-0 text-sm">Search</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
