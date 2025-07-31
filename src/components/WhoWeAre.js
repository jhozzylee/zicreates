import React, { useState } from "react";
import { Infinity, Check, ChevronsRight } from "lucide-react";
import CTAButton from "./CTAButton";
import brandShowcase from "../assets/videos/WhoWeAre.mp4";

const WhoWeAre = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      id="expertise"
      className="bg-background text-neutral py-20 px-4 pt-16 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Top Text */}
        <p className="text-[18px] font-normal mb-2">
          Struggling to Build a Brand Identity and visuals that standout?
        </p>
        <h2 className="text-[24px] md:text-[28px] lg:text-xl font-bold mb-12 max-w-[580px]">
          Zi Creates delivers high-impact branding, stunning visuals, and strategic marketing—all crafted by expert creatives.
        </h2>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              icon: <Infinity className="w-6 h-6 text-neutral" />,
              title: "Flexible & Unlimited",
              text: "Custom branding and visuals tailored to your business, with unlimited refinements until it's just right."
            },
            {
              icon: <Check className="w-6 h-6 text-neutral" />,
              title: "Subscribe & Start Instantly",
              text: "Get expert branding, motion design, and digital visuals without the wait—ready when you are."
            },
            {
              icon: <ChevronsRight className="w-6 h-6 text-neutral" />,
              title: "Fast & Reliable Delivery",
              text: "Premium designs, delivered with speed and precision to keep your brand ahead of the curve."
            }
          ].map(({ icon, title, text }, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#9AFFF71A] to-[#35504E1A] rounded-[16px] w-full max-w-[452px] py-[32px] px-[40px] border-background hover:border hover:border-[#30D5C833] transition-all duration-200"
            >
              <div className="bg-background p-[10px] rounded-[40px] inline-block mb-4">
                {icon}
              </div>
              <h4 className="text-[18px] font-bold mb-2">{title}</h4>
              <p className="text-[16px]">{text}</p>
            </div>
          ))}
        </div>

        {/* Video + Text Section */}
        <div className="max-w-[1280px] mt-24 grid md:grid-cols-2 gap-12 items-center gap-[90px]">
          {/* Video Box */}
          <div className="relative w-full max-w-[592px] rounded-[16px] overflow-hidden group cursor-pointer">
            <video
              onClick={() => setOpen(true)}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-[16px] group-hover:brightness-75 transition-all"
              src={brandShowcase}
            />
            <button
              onClick={() => setOpen(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:scale-110 transition"
            >
              <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="48" fill="rgba(15, 15, 15, 0.3)" />
                <path d="M40 30L70 50L40 70V30Z" fill="#30D5C8" />
              </svg>
            </button>
          </div>

          {/* Text Block */}
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold mb-4">
              Your Go-To Agency for Powerful Branding & Visuals
            </h2>
            <p className="text-[16px] mb-6">
              We help businesses build strong, memorable brands through stunning visuals, smart design, and strategic marketing. From branding and motion graphics to UI/UX and digital marketing, we bring your vision to life with creativity and precision.
            </p>
            <CTAButton text="See what we do" link="/portfolio" />
          </div>
        </div>
      </div>

      {/* Custom Modal for Video */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center px-4">
          <div className="relative w-full max-w-[800px] aspect-video">
            <video
              src={brandShowcase}
              autoPlay
              controls
              className="w-full h-full rounded-md"
            />
            <button
              className="absolute top-2 right-2 text-white text-xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;
