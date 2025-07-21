import React from "react";
import { Send } from "lucide-react"; // uses lucide-react icon
import promoVideo from "../assets/videos/Hero-video.mp4";

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
        <form className="w-full max-w-[472px]">
          {/* Input Group */}
          <div className="relative py-1 rounded-[100px] border border-neutral bg-transparent">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full pl-8 pr-44 py-4 bg-transparent text-neutral text-[14px] placeholder:text-[13px] placeholder:text-neutral/60 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1 right-1 bottom-1 px-6 sm:px-10 rounded-[40px] text-background bg-neutral text-[14px] hover:bg-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              {/* On small screens show icon, otherwise show text */}
              <span className="block sm:hidden">
                <Send size={18} />
              </span>
              <span className="hidden sm:block">Request Demo</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
