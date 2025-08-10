import React, { useState } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

Modal.setAppElement("#root");

const MarketingModal = ({ isOpen, onClose }) => {
  const [isBookCallOpen, setBookCallOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Marketing Information"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
        className="bg-background border border-neutral/20 text-neutral w-full max-w-4xl max-h-screen overflow-y-auto rounded-[8px] p-6 sm:p-8 md:p-12 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral hover:opacity-70 text-2xl p-4"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[32px] font-semibold mb-6">
          Marketing
        </h2>

        {/* Content */}
        <p className="mb-4">
          Marketing is about connecting your brand with the right audience at the
          right time — creatively and strategically. We develop targeted campaigns
          that build awareness, generate leads, and grow your business.
        </p>

        <p className="mb-4">Our marketing services include:</p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Digital marketing strategy and planning</li>
          <li>Social media content creation and management</li>
          <li>Paid advertising campaigns (Google Ads, Facebook, Instagram)</li>
          <li>Email marketing and automation</li>
          <li>SEO and content marketing</li>
        </ul>

        <p className="mb-8">
          We combine data-driven insights with compelling storytelling to create
          campaigns that deliver measurable results. Whether you’re launching a
          new product or boosting brand visibility, Zi Creates is your partner
          for impactful marketing that drives growth.
        </p>

        {/* Book a Call Button */}
        <div className="flex justify-start">
          <CTAButton text="Book a Call" onClick={() => setBookCallOpen(true)} />
        </div>
      </Modal>

      {/* Nested BookCall modal */}
      <BookCall isOpen={isBookCallOpen} onClose={() => setBookCallOpen(false)} />
    </>
  );
};

export default MarketingModal;
