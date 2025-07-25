import React, { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";
import bgImage from "../assets/images/Hero-Grid.webp";
import heroVideo from "../assets/videos/Hero-video.mp4";
import Player from "@vimeo/player";

import client1 from "../assets/images/Crestville.png";
import client2 from "../assets/images/Melganic.png";
import client3 from "../assets/images/ByteBazaar.png";
import client4 from "../assets/images/Webshapers.png";
import client5 from "../assets/images/Emcok.png";
import client6 from "../assets/images/Uplift.png";

const Hero = ({ onOpenBookCall }) => {
  const [isOpen, setOpen] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0);

      const handleUnmute = () => {
        player.setVolume(1);
        iframeRef.current.removeEventListener("click", handleUnmute);
      };

      iframeRef.current.addEventListener("click", handleUnmute);
    }
  }, [isOpen]);

  return (
    <section id="hero" className="bg-background text-neutral pt-24 pb-2">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left */}
        <div className="lg:w-1/2 text-center lg:text-left max-w-[522px]">
          <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold leading-tight mb-6">
            Transform your<br />
            <span className="text-primary">Vision</span> into a <span className="text-primary">Powerful Brand</span>
          </h1>

          {/* Mobile Video */}
          <div className="block lg:hidden mb-2">
            <div className="relative max-w-[552px] mx-auto rounded-xl overflow-hidden shadow-lg px-2">
              <img src={bgImage} alt="Video cover" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 flex justify-center items-center z-10">
                <div className="relative px-1" style={{ width: "clamp(176px, 55vw, 284px)" }}>
                  <video
                    className="w-full h-auto rounded-[8px]"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <button
                    onClick={() => setOpen(true)}
                    className="absolute inset-0 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="48" fill="rgba(15, 15, 15, 0.3)" />
                      <path d="M40 30L70 50L40 70V30Z" fill="#30D5C8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg font-light mb-8 max-w-xl">
            We launch, connect, and grow businesses with our innovative solutions.
            From strategic branding, stunning designs, compelling motion graphics and
            impactful digital marketing, we make it happen for people and businesses.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[40px]">
            <CTAButton text="Book a Call" onClick={onOpenBookCall} />
            <button
              onClick={() => setOpen(true)}
              className="group flex items-center text-neutral px-8 py-2 rounded-full border border-transparent hover:border-primary hover:text-primary transition-all duration-200"
            >
              Watch Reel
              <span className="ml-4 group-hover:ml-5 transition-all duration-200">▶</span>
            </button>
          </div>
        </div>

        {/* Desktop Video */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-end">
          <div className="relative max-w-[552px] rounded-xl overflow-hidden shadow-lg">
            <img src={bgImage} alt="Video cover" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="relative" style={{ width: "clamp(192px, 26vw, 306px)" }}>
                <video
                  className="w-full h-auto rounded-[8px]"
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <button
                  onClick={() => setOpen(true)}
                  className="absolute inset-0 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="48" fill="rgba(15, 15, 15, 0.3)" />
                    <path d="M40 30L70 50L40 70V30Z" fill="#30D5C8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="mt-20 px-4 text-center">
        <p className="text-[18px] font-normal mb-8">A few of our clients</p>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-[1280px] mx-auto">
          <img src={client1} alt="Client 1" className="h-6 sm:h-8 md:h-8 lg:h-10 object-contain" />
          <img src={client2} alt="Client 2" className="h-6 sm:h-8 md:h-8 lg:h-10 object-contain" />
          <img src={client3} alt="Client 3" className="h-6 sm:h-8 md:h-8 lg:h-10 object-contain" />
          <img src={client4} alt="Client 4" className="h-6 sm:h-8 md:h-8 lg:h-10 object-contain" />
          <img src={client5} alt="Client 5" className="h-6 sm:h-8 md:h-8 lg:h-10 object-contain" />
          <img src={client6} alt="Client 6" className="h-6 sm:h-8 md:h-8 lg:h-10 object-contain" />
        </div>
      </div>

      {/* Vimeo Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center px-4">
          <div className="relative w-full max-w-[800px] aspect-video">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1102249418?autoplay=1"
              title="Our Works"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full cursor-pointer border border-neutral/20"
            ></iframe>
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

export default Hero;
