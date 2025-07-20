import React from "react";
import promoVideo from "../assets/videos/Hero-video.mp4"; // update path if needed

const EmailCaptureSection = () => {
  return (
    <section className="bg-background text-neutral px-4 py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col items-start gap-10">
        {/* Promo Video */}
        <div className="w-full">
          <video
            src={promoVideo}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto rounded-[16px]"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[36px] sm:text-[28px] xs:text-[20px] font-semibold leading-[1.5] max-w-[472px] text-left">
          Whether you’re an entrepreneur, or an established business, we’ll help
          you save time and money.
        </h2>

        {/* Email Form */}
        <div className="w-full max-w-[472px] relative py-1 rounded-[100px] border border-neutral bg-transparent">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-8 pr-44 py-4 bg-transparent text-neutral text-[16px] placeholder:text-neutral focus:outline-none"
          />
          <button
            type="submit"
            className="absolute top-1 right-1 bottom-1 px-1 sm:px-10 rounded-[40px] text-background bg-neutral text-[16px] hover:bg-primary transition-all duration-200"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
