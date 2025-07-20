import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import logo from "../assets/images/Footer_Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0F0F0F] to-[#2D4059] text-neutral px-6 py-16">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between gap-6 footer-columns">
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
            <li className="mb-3 hover:opacity-70 cursor-pointer">Cooperate Branding</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Graphics Design</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Motion Design</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Web Development</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Product Design</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Digital Marketing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[16px] font-normal mb-4">Company</h4>
          <ul className="list-none text-[12px]">
            <li className="mb-3 hover:opacity-70 cursor-pointer">About Us</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Our Works</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Careers</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Contact</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Partner & Affiliate Program</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-[16px] font-normal mb-4">Resources</h4>
          <ul className="list-none text-[12px]">
            <li className="mb-3 hover:opacity-70 cursor-pointer">Learning Center</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Brand Assets</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Case Studies</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">FAQs</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[16px] font-normal mb-4">Legal</h4>
          <ul className="list-none text-[12px]">
            <li className="mb-3 hover:opacity-70 cursor-pointer">Privacy Policy</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Terms of Service</li>
            <li className="mb-3 hover:opacity-70 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-muted w-full max-w-[1280px] mx-auto my-6" />

      {/* Bottom Row */}
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-4 px-2">
        {/* Left Text */}
        <p className="text-[16px]">© 2025 Zi Creates. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
            <div
              key={index}
              className="w-9 h-9 flex items-center justify-center border-2 border-neutral text-neutral rounded-full p-2 transition-all duration-300 hover:bg-neutral hover:text-background"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
