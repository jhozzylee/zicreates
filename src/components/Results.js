import React from "react";

import CTAButton from "./CTAButton";
import img1 from "../assets/images/result01.webp";
import img2a from "../assets/images/result03.webp";
import img2b from "../assets/images/result02.webp";
import img3 from "../assets/images/result04.webp";
import img4a from "../assets/images/result05.webp";
import img4b from "../assets/images/result06.webp";

const Results = () => {
  return (
    <section id="results" className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-12">
          What We Have Done for Brands Like Yours
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-6">
            <img
              src={img1}
              alt="Project 1"
              loading="lazy"
              className="rounded-[8px] object-cover w-full hover:scale-105 transition-transform duration-300"
            />
            <img
              src={img3}
              alt="Project 3"
              loading="lazy"
              className="rounded-[8px] object-cover w-full hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-6">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-6">
              <img
                src={img2a}
                alt="Project 2a"
                loading="lazy"
                className="rounded-[8px] object-cover w-full hover:scale-105 transition-transform duration-300"
              />
              <img
                src={img2b}
                alt="Project 2b"
                loading="lazy"
                className="rounded-[8px] object-cover w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6">
              <img
                src={img4a}
                alt="Project 4a"
                loading="lazy"
                className="rounded-[8px] object-cover w-full hover:scale-105 transition-transform duration-300"
              />
              <img
                src={img4b}
                alt="Project 4b"
                loading="lazy"
                className="rounded-[8px] object-cover w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <CTAButton text="See more" link="/portfolio" />
        </div>
      </div>
    </section>
  );
};

export default Results;
