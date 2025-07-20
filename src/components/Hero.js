import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import CTAButton from "./CTAButton";
import bgImage from "../assets/images/Hero-Grid.png";
import heroVideo from "../assets/videos/Hero-video.mp4";
import BookCall from './BookCall';

// Replace these with your actual client logo imports
import client1 from "../assets/images/Crestville.png";
import client2 from "../assets/images/Melganic.png";
import client3 from "../assets/images/ByteBazaar.png";
import client4 from "../assets/images/Webshapers.png";
import client5 from "../assets/images/Emcok.png";
import client6 from "../assets/images/Uplift.png";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section id="hero" className="bg-background text-neutral pt-24 pb-2">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
  {/* Left Side */}
  <div className="lg:w-1/2 text-center lg:text-left max-w-[522px]">
    <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] font-bold leading-tight mb-6">
        Transform your<br />
        <span className="text-primary">Vision</span> into a <span className="text-primary">Powerful Brand</span>
      </h1>

    {/* Move the Video inside left column on small screens */}
    <div className="block lg:hidden mb-2">
      <div className="relative max-w-[552px] mx-auto rounded-xl overflow-hidden shadow-lg">
        <img
          src={bgImage}
          alt="Video cover"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-10 left-6 sm:top-16 sm:left-10 md:top-[120px] md:left-[40px] lg:top-[154px] lg:left-[140px] w-[306px] flex justify-center opacity-100">
          <video
            className="rounded-[8px]"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center z-20 hover:scale-105 transition-transform duration-300"
          >
            <svg className="absolute w-8 h-8" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" fill="rgba(15, 15, 15, 0.3)" />
              <path d="M40 30L70 50L40 70V30Z" fill="#30D5C8" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <p className="text-lg font-light mb-8 max-w-xl">
      We launch, connect, and grow businesses with our innovative solutions.
      From strategic branding, stunning designs, compelling motion graphics and
      impactful digital marketing, we make it happen for people and businesses.
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[40px]">
    <CTAButton text="Book a Call" onClick={() => setIsBookCallOpen(true)} />
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center text-neutral px-8 py-2 rounded-full border border-transparent hover:border-primary hover:text-primary transition-all duration-200"
      >
        Watch Reel
        <span className="ml-4 group-hover:ml-5 transition-all duration-200">▶</span>
      </button>
    </div>
  </div>

  {/* Right Side (visible only on large screens) */}
  <div className="hidden lg:flex lg:w-1/2 items-center justify-end">
    <div className="relative max-w-[552px] rounded-xl overflow-hidden shadow-lg">
      <img src={bgImage} alt="Video cover" className="w-full h-auto object-cover" />
      <div className="absolute top-10 left-6 sm:top-16 sm:left-10 md:top-[120px] md:left-[40px] lg:top-[154px] lg:left-[140px] w-[306px] flex justify-center opacity-100">
        <video
          className="rounded-[8px]"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center z-20 hover:scale-105 transition-transform duration-300"
        >
          <svg className="absolute w-8 h-8" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="rgba(15, 15, 15, 0.3)" />
            <path d="M40 30L70 50L40 70V30Z" fill="#30D5C8" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Client Logos Section */}
      <div className="mt-20 px-4 text-center">
        <p className="text-[18px] font-normal mb-8">A few of our clients</p>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-[1280px] mx-auto">
          <img src={client1} alt="Client 1" className="h-6 sm:h-6 md:h-7 lg:h-8 object-contain" />
          <img src={client2} alt="Client 2" className="h-6 sm:h-6 md:h-7 lg:h-8 object-contain" />
          <img src={client3} alt="Client 3" className="h-6 sm:h-6 md:h-7 lg:h-8 object-contain" />
          <img src={client4} alt="Client 4" className="h-6 sm:h-6 md:h-7 lg:h-8 object-contain" />
          <img src={client5} alt="Client 5" className="h-6 sm:h-6 md:h-7 lg:h-8 object-contain" />
          <img src={client6} alt="Client 6" className="h-6 sm:h-6 md:h-7 lg:h-8 object-contain" />
        </div>
      </div>

      {/* Modal Video Popup */}
      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId="1102249418"
        onClose={() => setOpen(false)}
      />

        <BookCall
        isOpen={isBookCallOpen}
        onRequestClose={() => setIsBookCallOpen(false)}
        />
    </section>
  );
};

export default Hero;
