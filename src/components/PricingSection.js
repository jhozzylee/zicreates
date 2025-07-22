import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials"; // For pagination styling

const PricingSection = () => {
  return (
    <section id="plans" className="bg-background text-neutral pt-20 pb-4 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold mb-16">Our Adaptive Plans</h2>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mb-6">
          {/* Repeat for Essentials, Growth, Premium */}
          {/* Essentials Plan */}
          <PlanCard
            title="Essentials Plan"
            price="$599/month"
            features={[
              "Brand Essentials",
              "Basic Website Development",
              "Social Media Graphics",
              "1 Revisions per Project",
              "Monthly Analytics Report",
              "Motion Graphics/Animated Posts",
              "Digital Marketing",
            ]}
          />
          {/* Growth Plan */}
          <PlanCard
            title="Growth Plan"
            price="$1,299/month"
            features={[
              "Full Brand Identity",
              "Custom Website Development",
              "Social Media & Ad Graphics",
              "Motion Graphics/Animated Posts",
              "2 Revisions per Project",
              "Monthly Analytics Report",
              "Digital Marketing",
              "Dedicated Account Manager",
            ]}
          />
          {/* Premium Plan */}
          <PlanCard
            title="Premium Plan"
            price="$2,499/month"
            features={[
              "Complete Brand Strategy",
              "Advanced Website Development",
              "Social Media & Ad Graphics",
              "Video & Motion Graphics",
              "3 Revisions per Project",
              "Dedicated Account Manager",
              "Digital Marketing",
              "SEO, Email Marketing",
              "Growth Strategy Session",
            ]}
          />
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden mb-8">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ el: ".pricing-pagination", clickable: true }}
          >
            <SwiperSlide>
              <PlanCard
                title="Essentials Plan"
                price="$599/month"
                features={[
                  "Brand Essentials",
                  "Basic Website Development",
                  "Social Media Graphics",
                  "1 Revisions per Project",
                  "Monthly Analytics Report",
                  "Motion Graphics/Animated Posts",
                  "Digital Marketing",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PlanCard
                title="Growth Plan"
                price="$1,299/month"
                features={[
                  "Full Brand Identity",
                  "Custom Website Development",
                  "Social Media & Ad Graphics",
                  "Motion Graphics/Animated Posts",
                  "2 Revisions per Project",
                  "Monthly Analytics Report",
                  "Digital Marketing",
                  "Dedicated Account Manager",
                ]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PlanCard
                title="Premium Plan"
                price="$2,499/month"
                features={[
                  "Complete Brand Strategy",
                  "Advanced Website Development",
                  "Social Media & Ad Graphics",
                  "Video & Motion Graphics",
                  "3 Revisions per Project",
                  "Dedicated Account Manager",
                  "Digital Marketing",
                  "SEO, Email Marketing",
                  "Growth Strategy Session",
                ]}
              />
            </SwiperSlide>
          </Swiper>
          <div className="pricing-pagination mt-4 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ title, price, features }) => (
  <div className="w-full h-[560px] group bg-[#30D5C81A] p-6 rounded-[16px] transition-all duration-200 hover:bg-[#30D5C833] border border-background hover:border-primary flex flex-col justify-between">
    <div>
      <h2 className="text-lg font-bold mb-6">{title}</h2>
      <ul className="mb-6 space-y-4 text-sm">
        {features.map((item, idx) => (
          <li key={idx}>✓ {item}</li>
        ))}
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold mb-1">{price}</div>
      <div className="text-xs text-muted mb-4">Cancel Anytime</div>
      <button className="group flex justify-between items-center w-full text-neutral font-normal border border-neutral rounded-[40px] px-8 py-2 transition-all duration-200 group-hover:bg-[#30D5C81A] group-hover:text-primary group-hover:border-primary">
        <span>Get Started</span>
        <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>
    </div>
  </div>
);

export default PricingSection;
