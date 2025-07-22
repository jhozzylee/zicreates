import React from "react";
import process1 from "../assets/images/Step01.png";
import process2 from "../assets/images/Step02.png";
import process3 from "../assets/images/Step03.png";

const OurProcess = () => {
  // ✅ Reusable Step Component
  const StepCard = ({ title, description, image }) => (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-[700px] w-full border-b border-primary">
      {/* Text Content */}
      <div className="max-w-[400px]">
        <h3 className="text-xl text-center md:text-right font-bold mb-4">{title}</h3>
        <p className="text-base text-center md:text-right leading-relaxed max-w-[304px] mb-[102px">{description}</p>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="max-w-[344px] w-full object-cover"
      />
    </div>
  );

  return (
    <section id= "process" className="bg-background text-neutral py-4 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-16 text-center md:text-right">
          How We Bring Your Brand to Life
        </h2>

        {/* Steps Container */}
        <div className="flex flex-col gap-24">
          {/* Step 1 - Aligned Right */}
          <div className="flex justify-end">
            <StepCard
              title="Discover & Strategize"
              description="We start with a deep dive into your brand—understanding your goals, audience, and vision to craft the perfect creative strategy."
              image={process1}
            />
          </div>

          {/* Step 2 - Centered */}
          <div className="flex justify-center">
            <StepCard
              title="Design & Develop"
              description="From designs to development, we bring your brand to life. Through constant collaboration and feedback, we refine the work to exceeds expectations."
              image={process2}
            />
          </div>

          {/* Step 3 - Aligned Left */}
          <div className="flex justify-start">
            <StepCard
              title="Launch & Grow"
              description="With everything ready, we launch your project and continue supporting your brand's growth, ensuring it thrives in the digital landscape."
              image={process3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
