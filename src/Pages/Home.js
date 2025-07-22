import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToHash from "./ScrollToHash";
import Header from '../components/Header';
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import OurProcess from "../components/OurProcess";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import ExtraSection from "../components/ExtraSection";
import EmailCaptureSection from "../components/EmailCaptureSection";
import Footer from "../components/Footer";
import BookCall from '../components/BookCall'; // ✅ The modal

const Home = () => {
  const location = useLocation();
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <ScrollToHash />
      <div className="scroll-smooth">
        <Header />
        <Hero onOpenBookCall={() => setIsBookCallOpen(true)} /> {/* ✅ Optional */}
        <WhoWeAre />
        <WhatWeDo />
        <OurProcess />
        <Results />
        <Testimonials />
        <PricingSection />
        <ExtraSection onOpenBookCall={() => setIsBookCallOpen(true)} /> {/* ✅ Connected */}
        <EmailCaptureSection />
        <Footer />
      </div>

      {/* ✅ Modal at root level */}
      <BookCall
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </>
  );
};

export default Home;
