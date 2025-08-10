import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/pagination";

import PaymentModal from "./PaymentModal";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPaymentModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const plans = [
    {
      title: "Essentials Plan",
      price: "$599/month",
      features: [
        "Brand Essentials",
        "Basic Website Development",
        "Social Media Graphics",
        "1 Revision per Project",
        "Monthly Analytics Report",
        "Motion Graphics/Animated Posts",
        "Digital Marketing",
      ],
      planId: "PLN_224499",
    },
    {
      title: "Growth Plan",
      price: "$1,299/month",
      features: [
        "Full Brand Identity",
        "Custom Website Development",
        "Social Media & Ad Graphics",
        "Motion Graphics/Animated Posts",
        "2 Revisions per Project",
        "Monthly Analytics Report",
        "Digital Marketing",
        "Dedicated Account Manager",
      ],
      planId: "PLN_224573",
    },
    {
      title: "Premium Plan",
      price: "$2,499/month",
      features: [
        "Complete Brand Strategy",
        "Advanced Website Development",
        "Social Media & Ad Graphics",
        "Video & Motion Graphics",
        "3 Revisions per Project",
        "Dedicated Account Manager",
        "Digital Marketing",
        "SEO, Email Marketing",
        "Growth Strategy Session",
      ],
      planId: "PLN_2245439",
    },
  ];

  // Detect mobile screen for stacking
  const isMobile = useMediaQuery({ maxWidth: 639 });

  return (
    <section id="plans" className="bg-background text-neutral pt-20 pb-2 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold mb-16">Our Adaptive Plans</h2>

        {isMobile ? (
          // Mobile stacked cards
          <div className="flex flex-col gap-6 mb-8">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} onClick={() => openPaymentModal(plan)} />
            ))}
          </div>
        ) : (
          // Swiper slider with pagination below
          <div className="mb-12">
            <Swiper
              spaceBetween={16}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.9,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
            >
              {plans.map((plan, index) => (
                <SwiperSlide key={index}>
                  <PlanCard {...plan} onClick={() => openPaymentModal(plan)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {selectedPlan && (
          <PaymentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedPlan={{
              title: selectedPlan.title,
              price: parseFloat(selectedPlan.price.replace(/[^0-9.]/g, "")),
              planId: selectedPlan.planId,
            }}
          />
        )}
      </div>

      {/* Pagination CSS injected here for clarity */}
      <style>{`
        /* Push pagination dots below swiper */
        .swiper-pagination {
          margin-top: 1rem;
          bottom: auto !important;
        }
      `}</style>
    </section>
  );
};

const PlanCard = ({ title, price, features, onClick }) => {
  return (
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
        <button
          onClick={onClick}
          className="group flex justify-between items-center w-full text-neutral font-normal border border-neutral rounded-[40px] px-8 py-2 transition-all duration-200 group-hover:bg-[#30D5C81A] group-hover:text-primary group-hover:border-primary"
        >
          <span>Get Started</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
