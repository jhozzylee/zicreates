import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials"; // custom CSS for pagination bullets

const plans = [
  {
    title: "Essentials Plan",
    features: [
      "Brand Essentials",
      "Basic Website Development",
      "Social Media Graphics",
      "1 Revisions per Project",
      "Monthly Analytics Report",
      "Motion Graphics/Animated Posts",
      "Digital Marketing",
    ],
    price: "$599/month",
    note: "Cancel Anytime",
    cta: "Get Started",
  },
  {
    title: "Growth Plan",
    features: [
      "Full Brand Identity",
      "Custom Website Development",
      " Social Media & Ad Graphics",
      "Motion Graphics/Animated Posts",
      "2 Revisions per Project",
      "Monthly Analytics Report",
      "Digital Marketing",
      "Dedicated Account Manager",
    ],
    price: "$1,299/month",
    note: "Cancel Anytime",
    cta: "Get Started",
  },
  {
    title: "Premium Plan",
    features: [
      "Complete Brand Strategy",
      "Advanced Website Development",
      "Social Media & Ad Graphics",
      "Video & Motion Graphics",
      "3 Revisions per Project",
      "Dedicated Account Manager",
      "Digital Marketing ",
      "SEO, Email Marketing",
      "Growth Strategy Session",
    ],
    price: "$2,499/month",
    note: "Cancel Anytime",
    cta: "Get Started",
  },
];

const extras = [
  {
    title: "Let’s Talk Strategy",
    desc: "Need expert insights to boost your brand? Schedule a call with us today.",
    cta: "Book a Call",
  },
  {
    title: "Brand Checkup",
    desc: "Need some quick wins for improving your brand, app or website?",
    cta: "Review My Brand",
  },
  {
    title: "Refer & Earn",
    desc: "Earn 5% recurring commission for referrals.",
    cta: "Join now",
  },
];

const PricingSection = () => {
  const PricingCard = ({ title, features, price, note, cta }) => (
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
        <div className="text-xs text-muted mb-4">{note}</div>
        <button className="group flex justify-between items-center w-full text-neutral font-normal border border-neutral rounded-[40px] px-8 py-2 transition-all duration-200 group-hover:bg-[#30D5C81A] group-hover:text-primary group-hover:border-primary">
          <span>{cta}</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>
    </div>
  );

  const ExtraCard = ({ title, desc, cta }) => (
    <div className="w-full h-[224px] group bg-[#30D5C81A] p-6 rounded-[16px] transition-all duration-200 hover:bg-[#30D5C833] border border-background hover:border-primary flex flex-col justify-between">
      <div>
        <h4 className="text-md font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-400 mb-6">{desc}</p>
      </div>
      <button className="group flex justify-between items-center w-full text-neutral font-normal border border-neutral rounded-[40px] px-8 py-2 transition-all duration-200 group-hover:bg-[#30D5C81A] group-hover:text-primary group-hover:border-primary">
        <span>{cta}</span>
        <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>
    </div>
  );

  return (
    <section id="plans" className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold mb-16">Our Adaptive Plans</h2>

        {/* ✅ Desktop Pricing Cards (lg and up) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mb-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        {/* ✅ Mobile & Tablet Pricing Slider (< lg) */}
        <div className="lg:hidden mb-8">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ el: ".pricing-pagination", clickable: true }}
          >
            {plans.map((plan, i) => (
              <SwiperSlide key={i}>
                <PricingCard {...plan} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pricing-pagination mt-4 flex justify-center gap-2" />
        </div>

        {/* ✅ Desktop Extras (lg and up) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
          {extras.map((extra, i) => (
            <ExtraCard key={i} {...extra} />
          ))}
        </div>

        {/* ✅ Mobile & Tablet Extra Cards Slider (< lg) */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ el: ".extra-pagination", clickable: true }}
          >
            {extras.map((extra, i) => (
              <SwiperSlide key={i}>
                <ExtraCard {...extra} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="extra-pagination mt-4 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
