import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Testimonials.css";

import testimonial1 from "../assets/images/client1.png";
import testimonial2 from "../assets/images/client2.png";
import logo1 from "../assets/images/Crestville.png";
import logo2 from "../assets/images/Uplift.png";

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
          <img src={logo} alt="Company Logo" className="w-[80px] h-auto" />
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      photo: testimonial1,
      quote:
        "Zi Create transformed our online presence with stunning design and strategic social media management. Their work exceeded our expectations, though expanding their service offerings could provide even more value. Overall, a fantastic experience!",
      name: "Amaka Johnson",
      title: "Marketing Lead, Crestville",
      logo: logo1,
    },
    {
      photo: testimonial2,
      quote:
        "From strategy to design, everything felt intentional. We finally feel seen in the digital space.",
      name: "David Ayeni",
      title: "Founder, Uplift",
      logo: logo2,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-background text-neutral py-20 px-4 relative group overflow-hidden"
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
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          loop
          autoplay={{ delay: 6000 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
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

        {/* Navigation */}
        <div className="swiper-button-prev hidden md:block absolute left-0 top-1/2 -translate-y-1/2 px-[200px] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <div className="swiper-button-next hidden md:block absolute right-0 top-1/2 -translate-y-1/2 px-[200px] text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>

      {/* Pagination Dots */}
      <div className="swiper-pagination mt-8 flex justify-center gap-2" />

    </section>
  );
};

export default Testimonials;
