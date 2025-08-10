import React, { useState } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

Modal.setAppElement("#root");

const WebsiteModal = ({ isOpen, onClose }) => {
  const [isBookCallOpen, setBookCallOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Website Information"
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
        <h2 className="text-[28px] md:text-[32px] font-semibold mb-6">Website</h2>

        {/* Content */}
        <p className="mb-4">
          Your website is the digital front door to your brand. At Zi Creates, we
          design and build websites that are not only visually stunning but also
          user-friendly, fast, and optimized for conversions.
        </p>

        <p className="mb-4">Our website services include:</p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Custom website design tailored to your brand identity</li>
          <li>Responsive development for seamless experience on all devices</li>
          <li>UX and UI design focused on clarity and ease</li>
          <li>SEO-friendly architecture to improve search rankings</li>
          <li>Integration with marketing tools and analytics</li>
        </ul>

        <p className="mb-8">
          We create websites that engage visitors, build trust, and turn clicks
          into customers — ensuring your online presence reflects the quality and
          vision of your brand.
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

export default WebsiteModal;
