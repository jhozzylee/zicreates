import React from "react";

import CTAButton from "./CTAButton";
import img1 from "../assets/images/result01.png";
import img2a from "../assets/images/result02.png";
import img2b from "../assets/images/result03.png";
import img3 from "../assets/images/result04.png";
import img4a from "../assets/images/result05.png";
import img4b from "../assets/images/result06.png";

const Results = () => {
  return (
    <section id="results" className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-12">
          What We Have Done for Brands Like Yours
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <img
              src={img1}
              alt="Project 1" loading="lazy"
              className="rounded-[12px] object-cover w-full h-[60vw] max-h-[680px] aspect-[3/4] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={img3}
              alt="Project 3" loading="lazy"
              className="rounded-[12px] object-cover w-full h-[28vw] max-h-[324px] aspect-[3/2] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <img
              src={img2a}
              alt="Project 2a" loading="lazy"
              className="rounded-[12px] object-cover w-full h-[28vw] max-h-[324px] aspect-[3/2] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={img2b}
              alt="Project 2b" loading="lazy"
              className="rounded-[12px] object-cover w-full h-[28vw] max-h-[324px] aspect-[3/2] hover:scale-105 transition-transform duration-300"
            />

            {/* Bottom Grid */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src={img4a}
                alt="Project 4a" loading="lazy"
                className="rounded-[12px] object-cover w-full h-[28vw] max-h-[324px] aspect-[3/2] hover:scale-105 transition-transform duration-300"
              />
              <img
                src={img4b}
                alt="Project 4b" loading="lazy"
                className="rounded-[12px] object-cover w-full h-[28vw] max-h-[324px] aspect-[3/2] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <CTAButton text="See more" link="/porfolio" />
        </div>
      </div>
    </section>
  );
};

export default Results;
