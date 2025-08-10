import React, { useState } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

Modal.setAppElement("#root");

const BrandingModal = ({ isOpen, onClose }) => {
  const [isBookCallOpen, setBookCallOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Branding Information"
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
        <h2 className="text-[28px] md:text-[32px] font-semibold mb-6">Branding</h2>

        {/* Content */}
        <p className="mb-4">
          Branding is more than just a logo — it’s the heart and soul of your
          business. We craft distinct brand identities that tell your unique
          story and connect emotionally with your audience.
        </p>

        <p className="mb-4">
          Our branding process involves deep research, strategy, and creative
          exploration to develop:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Memorable logos and visual marks</li>
          <li>Cohesive color palettes and typography systems</li>
          <li>Clear brand messaging and voice guidelines</li>
          <li>Brand positioning that differentiates you in the market</li>
        </ul>

        <p className="mb-8">
          We help you build a consistent and authentic brand that inspires trust,
          drives loyalty, and sets the stage for all your marketing and design
          efforts. Whether you’re launching a startup or refreshing an existing
          brand, Zi Creates ensures your brand identity reflects your values and
          vision with clarity and impact.
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

export default BrandingModal;
