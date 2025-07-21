import React, { useEffect } from 'react';
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
import EmailCaptureSection from "../components/EmailCaptureSection";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

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
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <OurProcess />
        <Results />
        <Testimonials />
        <PricingSection />
        <EmailCaptureSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
