import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Accessibility

const PartnerAffiliateModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Partner & Affiliate Program"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-background border border-neutral/20 text-neutral w-full max-w-3xl max-h-screen overflow-y-auto rounded-[8px] p-6 sm:p-8 md:p-12 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral hover:opacity-70 text-2xl p-4"
        aria-label="Close Partner & Affiliate Program Modal"
      >
        ×
      </button>

      <h2 className="text-[30px] md:text-[32px] font-semibold mb-6">
        Partner & Affiliate Program
      </h2>

      <p className="mb-4">
        At Zi Creates, we believe in the power of collaboration. Our Partner & Affiliate Program is designed to reward individuals and businesses who share our passion for exceptional branding, design, and digital marketing.
      </p>

      <h3 className="text-xl font-semibold mb-2">Why Join?</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Earn Commissions: Get competitive referral rewards for every client you bring in.</li>
        <li>Grow Your Network: Collaborate with a trusted creative agency to expand your offerings.</li>
        <li>Access Exclusive Resources: Gain marketing materials, training, and dedicated support.</li>
        <li>Flexible & Simple: Easy signup, tracking, and payouts so you can focus on what you do best.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Who Should Join?</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Freelancers and consultants in marketing, design, or development.</li>
        <li>Agencies looking to extend their service portfolio.</li>
        <li>Influencers and business coaches with an audience of startups and small businesses.</li>
      </ul>

      <p>
        Interested in partnering with us?{" "}
        <a
          href="mailto:partners@zicreates.com"
          className="text-primary underline hover:text-primary-dark"
        >
          Contact us at partners@zicreates.com
        </a>{" "}
        to learn more and get started!
      </p>
    </Modal>
  );
};

export default PartnerAffiliateModal;
