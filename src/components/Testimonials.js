import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Testimonials.css";

import testimonial1 from "../assets/images/Ayoola.webp";
import testimonial2 from "../assets/images/Client.webp";
import testimonial3 from "../assets/images/Solomon.webp";
import logo1 from "../assets/images/Crestville.png";
import logo2 from "../assets/images/Uplift.png";
import logo3 from "../assets/images/ByteBazaar.png";

// Testimonial Card
const TestimonialCard = ({ photo, quote, name, title, logo }) => (
  <div className="w-full px-4 max-w-[1080px] mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-center md:text-left">
      <img
        src={photo}
        alt={name}
        className="w-[300px] h-[300px] object-cover rounded-[16px]"
      />
      <div className="max-w-[600px] flex flex-col items-center md:items-start">
        <p className="text-base leading-relaxed mb-8 max-w-[536px]">{quote}</p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">
          <div className="text-center md:text-left">
            <p className="text-lg font-medium">{name}</p>
            <p className="text-sm text-gray-400 max-w-[136px]">{title}</p>
          </div>
          <img src={logo} alt="Company Logo" className=" h-8" />
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      photo: testimonial1,
      quote: (
        <>
        Zi Create transformed our online presence with{" "}
        <span className="text-primary">stunning design</span> and{" "}
        <span className="text-primary">strategic social media management</span>.
        Their work exceeded our expectations, though expanding their service
        offerings could provide even more value. Overall, a{" "}
        <span className="text-primary">fantastic experience!</span>
      </>
      ),
      name: "Wasiu Olanisebe",
      title: "Marketing Lead, Crestville",
      logo: logo1,
    },
    {
      photo: testimonial2,
      quote:
      <>
      From branding to execution, Zi Create delivered{" "}
      <span className="text-primary">professional quality</span> at every step.
      Their team was proactive, responsive, and delivered a{" "}
      <span className="text-primary">visually stunning result</span>. Highly recommended!
      </>,
      name: "Sofia Bennett",
      title: "Founder, Uplift",
      logo: logo2,
    },
    {
      photo: testimonial3,
      quote:
      <>
      Working with Zi Create was a breeze. Their{" "}
      <span className="text-primary">creative direction</span> brought our brand
      to life, and their team communicated with{" "}
      <span className="text-primary">impressive clarity</span>. We loved the{" "}
      <span className="text-primary">attention to detail</span> throughout the project.
    </>,
      name: "Solomon Gbewa",
      title: "CEO, ByteBazaar",
      logo: logo3,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-background text-neutral py-10 px-4 relative group overflow-hidden"
    >
      {/* ✅ Force Tailwind to keep dynamic classes */}
      <div className="hidden">
        bg-primary bg-neutral opacity-50 opacity-100
      </div>

      <h2 className="text-2xl font-semibold text-center mb-16">
        Stories that make us proud
      </h2>

      <div className="relative group">
        <Swiper
          modules={[ Pagination, Autoplay, EffectFade]}
          loop
          autoplay={{ delay: 6000 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Pagination Dots */}
      <div className="swiper-pagination mt-8 flex justify-center gap-2" />

    </section>
  );
};

export default Testimonials;
