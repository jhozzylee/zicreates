import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import CTAButton from "./CTAButton";

Modal.setAppElement("#root");

const PaymentModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    industry: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({
          ...prev,
          phone: data?.country_calling_code || "+1",
        }));
      })
      .catch(() => {
        setFormData((prev) => ({ ...prev, phone: "+1" }));
      });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const config = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: selectedPlan?.price || 0,
    currency: "USD",
    payment_options: "card,ussd,banktransfer",
    payment_plan: selectedPlan?.planId || "",
    customer: {
      email: formData.email,
      name: formData.company,
    },
    customizations: {
      title: selectedPlan?.title,
      description: formData.description,
      logo: "https://zicreates.com/logo512.png",
    },
    callback: (response) => {
      console.log("✅ Payment successful", response);
      setSubmitted(true);

       // ✅ Calculate next billing date (30 days from now)
       const nextBillingDate = new Date();
       nextBillingDate.setDate(nextBillingDate.getDate() + 30);

       const isoNextBilling = nextBillingDate.toISOString(); // e.g. "2025-09-07T14:48:00.000Z"

      // ✅ Send to Make.com Webhook
      fetch("https://hook.us2.make.com/24c46m8vplnnst93l3xlba6sakukrkj6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          description: formData.description,
          plan: selectedPlan?.title,
          amount: selectedPlan?.price,
          tx_ref: response.tx_ref,
          flw_id: response.flw_ref,
          status: response.status,
          timestamp: new Date().toISOString(),
          next_billing_date: isoNextBilling
        }),
      }).then(() => console.log("✅ Sent to webhook"));

      // ✅ Save to SheetDB
      fetch("https://sheetdb.io/api/v1/sfstsm92m5k39", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            industry: formData.industry,
            description: formData.description,
            plan: selectedPlan?.title,
            amount: selectedPlan?.price,
            tx_ref: response.tx_ref,
            flw_id: response.flw_ref,
            status: response.status,
            timestamp: new Date().toISOString(),
            next_billing_date: isoNextBilling.split("T")[0]
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("✅ Data saved to SheetDB", data);
        })
        .catch((err) => {
          console.error("❌ Failed to save data to SheetDB", err);
        });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
        closePaymentModal();
      }, 3000);
    },
    onClose: () => {
      onClose();
      setIsPaying(false);
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePay = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.email || !formData.description || !selectedPlan?.planId) {
      setError("❌ Please fill in all required fields and ensure a valid plan is selected.");
      return;
    }
    setError("");
    setIsPaying(true);
    handleFlutterPayment({
      callback: (response) => {
        config.callback(response);
        setIsPaying(false);
      },
      onClose: config.onClose,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Payment Form"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-background border border-neutral/20 text-neutral w-full max-w-4xl max-h-screen overflow-y-auto rounded-[8px] p-6 sm:p-8 md:p-12 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral hover:opacity-70 text-2xl p-4"
      >
        ×
      </button>

      <h2 className="text-[24px] md:text-[28px] font-semibold mb-6">
        Let’s get you started
      </h2>

      {submitted ? (
        <p className="text-neutral font-medium">
          ✅ Payment completed successfully. You'll receive a confirmation email shortly.
        </p>
      ) : (
        <form className="space-y-6" onSubmit={handlePay}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Company Name *"
              name="company"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email Address *"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+1 555 123 4567"
              value={formData.phone}
              onChange={handleChange}
            />
            <SelectField
              label="Company Type *"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              options={[
                "Clothing/Fashion",
                "Tech",
                "Health",
                "Food & Beverage",
                "Education",
                "Real Estate",
                "Finance",
                "Legal",
                "Other",
              ]}
            />
          </div>

          <TextareaField
            label="Project Description *"
            name="description"
            placeholder="Tell us a bit about the project you're paying for"
            value={formData.description}
            onChange={handleChange}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <CTAButton
            text={isPaying ? "Processing..." : `Pay $${selectedPlan?.price || 0}`}
            type="submit"
            disabled={isPaying}
          />
        </form>
      )}
    </Modal>
  );
};

export default PaymentModal;

const InputField = ({ label, name, type = "text", placeholder, value, onChange, required }) => (
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

const TextareaField = ({ label, name, placeholder, value, onChange, required }) => (
  <div className="flex flex-col gap-1.5 md:col-span-2">
    <label className="text-sm font-medium">{label}</label>
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[120px] placeholder:text-sm"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2.5 rounded-md border border-neutral bg-transparent min-h-[50px] text-sm"
    >
      <option value="">Select industry</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);