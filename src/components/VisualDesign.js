import React, { useState } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

Modal.setAppElement("#root");

const VisualDesignModal = ({ isOpen, onClose }) => {
  const [isBookCallOpen, setBookCallOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Visual Design Information"
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
          Visual Design
        </h2>

        {/* Content */}
        <p className="mb-4">
          Visual design is where creativity meets strategy to bring your brand to
          life. We craft stunning, user-centered designs that capture attention
          and communicate your message effectively.
        </p>

        <p className="mb-4">Our visual design services include:</p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Custom graphics and illustrations</li>
          <li>Marketing collateral like brochures, flyers, and social posts</li>
          <li>Motion graphics and animated content</li>
          <li>Consistent visual systems that enhance brand recognition</li>
        </ul>

        <p className="mb-8">
          We focus on creating designs that not only look amazing but also drive
          engagement and support your business goals. Whether you need
          eye-catching social media assets or a complete brand style guide, Zi
          Creates delivers visuals that resonate and perform.
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

export default VisualDesignModal;
