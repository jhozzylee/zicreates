// components/ExtraSection.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ExtraSection = ({ onOpenBookCall }) => {
  // 🔹 Reusable card as inline component
  const Card = ({ title, description, buttonText, onClick }) => (
    <div className="w-full h-[224px] group bg-[#30D5C81A] p-6 rounded-[16px] transition-all duration-200 hover:bg-[#30D5C833] border border-background hover:border-primary flex flex-col justify-between">
      <div>
        <h4 className="text-md font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-400 mb-6">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="group flex justify-between items-center w-full text-neutral font-normal border border-neutral rounded-[40px] px-8 py-2 transition-all duration-200 group-hover:bg-[#30D5C81A] group-hover:text-primary group-hover:border-primary"
      >
        <span>{buttonText}</span>
        <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>
    </div>
  );

  return (
    <section className="bg-background text-neutral pt-0 pb-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* ✅ Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          <Card
            title="Let’s Talk Strategy"
            description="Need expert insights to boost your brand? Schedule a call with us today."
            buttonText="Book a Call"
            onClick={onOpenBookCall}
          />
          <Card
            title="Brand Checkup"
            description="Need some quick wins for improving your brand, app or website?"
            buttonText="Review My Brand"
            onClick={onOpenBookCall}
          />
          <Card
            title="Refer & Earn"
            description="Earn 5% recurring commission for referrals."
            buttonText="Join now"
            onClick={() => console.log("Join Now clicked")}
          />
        </div>

        {/* ✅ Mobile Swiper Layout */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ el: ".extra-pagination", clickable: true }}
          >
            <SwiperSlide>
              <Card
                title="Let’s Talk Strategy"
                description="Need expert insights to boost your brand? Schedule a call with us today."
                buttonText="Book a Call"
                onClick={onOpenBookCall}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Brand Checkup"
                description="Need some quick wins for improving your brand, app or website?"
                buttonText="Review My Brand"
                onClick={onOpenBookCall}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Refer & Earn"
                description="Earn 5% recurring commission for referrals."
                buttonText="Join now"
                onClick={() => console.log("Join Now clicked")}
              />
            </SwiperSlide>
          </Swiper>
          <div className="extra-pagination mt-4 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
