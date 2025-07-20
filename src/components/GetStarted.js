import React, { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

const GetStarted = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    contact: "",
    source: "",
    budget: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data?.country_calling_code) {
          setFormData(prev => ({
            ...prev,
            contact: data.country_calling_code,
          }));
        }
      })
      .catch(() => {
        setFormData(prev => ({
          ...prev,
          contact: "+1",
        }));
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.note.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-neutral/50 flex items-center justify-center px-4">
      <div className="bg-background text-neutral w-full max-w-screen-sm md:max-w-screen-md lg:max-w-[1280px] max-h-screen overflow-y-auto rounded-[16px] p-6 sm:p-8 md:p-12 relative">
        <button
          className="absolute top-4 right-4 text-neutral hover:opacity-70 text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-[28px] md:text-[32px] font-semibold mb-4">In need of creative?</h2>

        {submitted ? (
          <p className="text-neutral font-medium">
            You’ll get a response from our team within 24-hours.
          </p>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
          
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
          
              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="contact"
                  placeholder="+1 (234) 567 8901"
                  className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
          
              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
          
              {/* How did you find us */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">How did you find us? *</label>
                <select
                  name="source"
                  className="w-full p-2.5 pr-10 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
                  value={formData.source}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden className="text-neutral/50 text-sm">Select an option</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="ads">Ads</option>
                  <option value="search">Google Search</option>
                  <option value="other">Other</option>
                </select>
              </div>
          
              {/* Budget */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Project Budget</label>
                <select
                  name="budget"
                  className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden className="text-neutral/50">Select a range</option>
                  <option value="under1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 – $5,000</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k+">Above $10,000</option>
                </select>
              </div>
            </div>
          
            {/* Note */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Additional Note *</label>
              <textarea
                name="note"
                placeholder="Tell us about your project"
                className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[150px] placeholder:text-sm"
                value={formData.note}
                onChange={handleChange}
                required
              />
            </div>
          
            {/* Submit CTA */}
            <CTAButton text="Send a Message" type="submit" />
          </form>
          
        )}
      </div>
    </div>
  );
};

export default GetStarted;
