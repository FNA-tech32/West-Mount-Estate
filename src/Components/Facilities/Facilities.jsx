import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineComputer,
  MdOutlinePushPin,
  MdOutlineDinnerDining,
  MdOutlineWifi,
  MdElectricBolt,
  MdOutlineWater,
  MdSportsMartialArts,
  MdCheckCircleOutline,
} from "react-icons/md";

const Facilities = () => {
  return (
    <section id="facilities" className="px-4 mt-16 scroll-mt-24">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4 gap-12 ">
        {/* left section  */}
        <div className="lg:w-1/3 ">
          <h2 className="text-[40px] m-0 leading-[51px] font-bold text-gray-900">
            We provide the finest facilities for your stay
          </h2>
          <p className="leading-[28px] text-gray-600 mt-4 mb-6">
            At West Mount Estate, every detail is curated for total luxury, peace of mind,
            and unmatched comfort. Discover exceptional hospitality designed around you.
          </p>
          <Link to="/contact">
            <button className="primary-button py-4 px-8 rounded-280 text-sm font-semibold shadow-md hover:shadow-lg">
              Contact Now
            </button>
          </Link>
        </div>
        {/* right section  */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-2/3">
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdOutlineComputer size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">Private Workspace</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdOutlinePushPin size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">Parking Area</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdOutlineDinnerDining size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">Breakfast Included</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdOutlineWifi size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">High-Speed Wi-Fi</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdElectricBolt size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">24/7 Power Backup</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdOutlineWater size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">Swimming Pool</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdSportsMartialArts size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">Fitness & Spa</p>
          </div>
          <div className="flex flex-col items-center py-6 px-4 gap-2 justify-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white rounded-xl border border-gray-100">
            <div>
              <MdCheckCircleOutline size={35} color="#24ab70" />
            </div>
            <p className="font-medium text-gray-800 text-sm m-0">Concierge Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
