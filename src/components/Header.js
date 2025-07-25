import React, { useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import GetStarted from "./GetStarted";
import logo from "../assets/images/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navItems = ["Expertise", "Services", "Process", "Results", "Plans"];

  const handleModalOpen = () => {
    setShowModal(true);
    setMenuOpen(false); // Optional: close menu if modal opens
  };

  return (
    <>
      <header className="bg-background text-neutral py-4 px-4 fixed top-0 left-0 z-50 w-full">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
            <img src={logo} alt="Logo" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md-lg:flex space-x-8 lg:space-x-6 md:space-x-4 sm:space-x-2 font-light text-[16px]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral text-[16px] font-light px-6 py-2 rounded-full transition-all duration-200 ease-in-out border-l-0 border-r-0 border-transparent hover:border-l hover:border-r hover:border-primary"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md-lg:block">
            <CTAButton text="Get Started" onClick={handleModalOpen} />
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="md-lg:hidden z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md-lg:hidden mt-4 px-1 space-y-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-neutral text-[16px] font-light"
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <CTAButton text="Get Started" fullWidth onClick={handleModalOpen} />
            </div>
          </div>
        )}
      </header>

      {/* ✅ Render GetStarted Modal */}
      {showModal && (
        <GetStarted isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Header;
