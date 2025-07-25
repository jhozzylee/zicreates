import React from "react";
import { ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const PillarCard = ({ title, items, buttonText }) => {
    return (
      <div className="w-full max-w-sm group border border-neutral px-4 py-6 sm:px-5 md:px-6 rounded-[16px] transition-all duration-200 hover:bg-[#30D5C81A] hover:border-primary flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <ul className="text-sm space-y-2 mb-8">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <button 
        aria-label={`Learn more about ${title}`}
        className="group flex justify-between items-center w-full text-neutral font-normal border border-neutral rounded-[40px] px-4 sm:px-6 md:px-8 py-2 transition-all duration-200 group-hover:bg-[#30D5C81A] group-hover:text-primary group-hover:border-primary">
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-all duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    );
  };

  return (
    <section id="services" className="bg-background text-neutral py-10 px-4 pt-8 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-left">
          What We Do for Brands Like Yours
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <PillarCard
            title="Branding"
            items={[
              "Visual Identity",
              "Brand Strategy",
              "Brand Style Guide",
              "Visual Storytelling",
            ]}
            buttonText="Learn more"
          />
          <PillarCard
            title="Visual Design"
            items={[
              "Graphic Design",
              "Motion Graphics",
              "Video Editings",
              "Custom Visual"
            ]}
            buttonText="Learn more"
          />
          <PillarCard
            title="Marketing"
            items={[
              "Digital Marketing",
              "Email Marketing",
              "Content Creation",
              "Paid Advertising",
            ]}
            buttonText="Learn more"
          />
          <PillarCard
            title="Website"
            items={[
              "Web Development",
              "E-commerce",
              "SEO Optimization",
              "UX Prototypes",
            ]}
            buttonText="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
