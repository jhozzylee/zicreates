import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaXTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa6";
import logo from "../assets/images/Footer_Logo.svg";
import ContactModal from "./ContactModal";
import PartnerAffiliateModal from "./AffiliateModal";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  const openPartnerModal = () => setIsPartnerOpen(true);
  const closePartnerModal = () => setIsPartnerOpen(false);

  return (
    <>
      <footer className="bg-gradient-to-b from-[#0F0F0F] to-[#2D4059] text-neutral px-6 py-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-6 footer-columns">

          {/* Brand Column */}
          <div className="max-w-[240px]">
            <img src={logo} alt="Zi Creates" className="w-[140px] mb-3" />
            <p className="text-[16px] opacity-80 max-w-[186px]">
              The all in one digital agency you have been looking for
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[16px] font-normal mb-4">Services</h4>
            <ul className="list-none text-[12px]">
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Corporate Branding</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Graphics Design</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Motion Design</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Web Development</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Product Design</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[16px] font-normal mb-4">Company</h4>
            <ul className="list-none text-[12px]">
              <li className="mb-3 hover:opacity-70"><Link to="/about">About Us</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/portfolio">Our Works</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/careers">Careers</Link></li>
              <li>
                <button
                  onClick={openContactModal}
                  className="mb-3 hover:opacity-70 text-left w-full text-[12px] cursor-pointer bg-transparent border-none p-0"
                  type="button"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={openPartnerModal}
                  className="mb-3 hover:opacity-70 text-left w-full text-[12px] cursor-pointer bg-transparent border-none p-0"
                  type="button"
                >
                  Partner & Affiliate Program
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info (Replacing Resources) */}
          <div>
            <h4 className="text-[16px] font-normal mb-4">Contact Info</h4>
            <ul className="list-none text-[12px]">
              <li className="mb-3">📧 <a href="mailto:support@zicreates.com" className="hover:underline">support@zicreates.com</a></li>
              <li className="mb-3">📞 <a href="tel:+2348137956463" className="hover:underline">+234 813 795 6463</a></li>
              <li className="mb-3">📍 25, Alhaja Agbeke Street, <br/> Ago Palace Way, Okota Isolo, <br/> Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[16px] font-normal mb-4">Legal</h4>
            <ul className="list-none text-[12px]">
              <li className="mb-3 hover:opacity-70"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/terms-of-service">Terms of Service</Link></li>
              <li className="mb-3 hover:opacity-70"><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-muted w-full max-w-[1280px] mx-auto my-6" />

        {/* Bottom Row */}
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-4 px-2">
          <p className="text-[16px]">© 2025 Zi Creates. All rights reserved.</p>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1FGE8KdnaC/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-neutral text-neutral rounded-full p-2 transition-all duration-300 hover:bg-neutral hover:text-background"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://x.com/zi_creates?s=21&t=dDLLPjZbCvMQqDOtc57kOw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-neutral text-neutral rounded-full p-2 transition-all duration-300 hover:bg-neutral hover:text-background"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/zi_creates/profilecard/?igsh=dG8ybjE3M21ha2tk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-neutral text-neutral rounded-full p-2 transition-all duration-300 hover:bg-neutral hover:text-background"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/zi-creates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-neutral text-neutral rounded-full p-2 transition-all duration-300 hover:bg-neutral hover:text-background"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.youtube.com/zi-creates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border-2 border-neutral text-neutral rounded-full p-2 transition-all duration-300 hover:bg-neutral hover:text-background"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />

      {/* Partner & Affiliate Program Modal */}
      <PartnerAffiliateModal isOpen={isPartnerOpen} onClose={closePartnerModal} />
    </>
  );
};

export default Footer;
