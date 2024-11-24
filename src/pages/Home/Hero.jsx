import React from "react";
import { backgroundImage } from "../../assets/images"; // Adjust the path if needed

const Hero = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-[718px] flex items-center justify-end px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Responsive Card */}
        <div className="bg-[#FFF3E3] shadow-lg tracking-wider rounded-lg p-6 sm:p-8 md:p-10 hover:shadow-xl transition-shadow -translate-x-4 sm:-translate-x-8 md:-translate-x-16 ease-in duration-300 w-[680px] max-w-lg lg:max-w-xl xl:max-w-3xl h-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 font-poppins italic py-2">
            New Arrival
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#B88E2F] font-bold tracking-wide py-2">
            Discover Our <br></br> New Collection
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#333] leading-6 sm:leading-7 py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="mt-6 md:mt-10">
            <button className="w-full sm:w-[170px] bg-[#B88E2F] text-white py-3 rounded-md text-sm sm:text-base md:text-lg hover:bg-blue-600 transition-colors duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
