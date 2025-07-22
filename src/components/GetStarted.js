import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";

Modal.setAppElement("#root"); // Important for accessibility

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

  // Auto-detect country code
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({
          ...prev,
          contact: data?.country_calling_code || "+1",
        }));
      })
      .catch(() => {
        setFormData((prev) => ({
          ...prev,
          contact: "+1",
        }));
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.note.trim()) return;

    try {
      const response = await fetch("https://sheetdb.io/api/v1/44eyixm95etfh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      const result = await response.json();
      console.log("✅ Result:", result);

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose(); // ✅ Close modal after 3 seconds
        }, 3000);
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Get Started Form"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-background border border-neutral/20 text-neutral w-full max-w-screen-md max-h-screen overflow-y-auto rounded-[8px] p-6 sm:p-8 md:p-12 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral hover:opacity-70 text-2xl"
      >
        ×
      </button>

      <h2 className="text-[28px] md:text-[32px] font-semibold mb-4">
        In need of creative?
      </h2>

      {submitted ? (
        <p className="text-neutral font-medium">
          ✅ Your message was sent successfully. You’ll hear from us within 24 hours.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InputField
              label="Full Name *"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email *"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone Number"
              name="contact"
              placeholder="+1 (234) 567 8901"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            <InputField
              label="Company Name *"
              name="company"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleChange}
            />
            <SelectField
              label="How did you find us? *"
              name="source"
              options={[
                "Social Media",
                "Referral",
                "Ads",
                "Google Search",
                "Other",
              ]}
              value={formData.source}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Project Budget"
              name="budget"
              options={[
                "Under $1,000",
                "$1,000 – $5,000",
                "$5,000 – $10,000",
                "Above $10,000",
              ]}
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

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

          <CTAButton text="Send a Message" type="submit" />
        </form>
      )}
    </Modal>
  );
};

export default GetStarted;

// Reusable Input Field
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

// Reusable Select Field
const SelectField = ({ label, name, options, value, onChange, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2.5 pr-10 rounded-md border border-neutral bg-transparent min-h-[50px] placeholder:text-sm"
      required={required}
    >
      <option value="" disabled hidden>
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt.toLowerCase()}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
