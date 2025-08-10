import React from "react";

const Refund = () => {
  return (
    <section className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold mb-12">
          Refund Policy
        </h2>

        <div className="space-y-6 text-sm leading-relaxed max-w-[1280px] mx-auto">
          <p>
            <strong>Effective Date:</strong> 09 August 2025
          </p>

          <p>
            At <strong>Zi Creates</strong>, we are committed to delivering high-quality branding and digital services. Due to the nature of our work, we have the following refund policy:
          </p>

          <h3 className="text-lg font-semibold">1. General Policy</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All payments for services (including subscription fees) are <strong>non-refundable</strong> once the billing cycle has started or the project work has commenced.</li>
            <li>We encourage clients to review service details, pricing, and timelines before making payments.</li>
          </ul>

          <h3 className="text-lg font-semibold">2. Subscription Services</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscription fees are billed monthly and are <strong>non-refundable</strong>, even if the service is canceled before the end of the billing period.</li>
            <li>If you wish to cancel your subscription, you must do so at least <strong>3 business days</strong> before your next billing date to avoid being charged for the following cycle.</li>
          </ul>

          <h3 className="text-lg font-semibold">3. One-Time Projects</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>For one-time projects, a <strong>50% non-refundable deposit</strong> is required before work begins.</li>
            <li>The remaining balance is due upon delivery of final work.</li>
            <li>No refunds will be issued for completed or in-progress work once the project has commenced.</li>
          </ul>

          <h3 className="text-lg font-semibold">4. Exceptions</h3>
          <p className="mb-2">
            Refunds may only be considered in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Duplicate payment made by error.</li>
            <li>Service not delivered due to a fault entirely on our end, and no work has started.</li>
          </ul>
          <p className="mb-6">
            In such cases, please contact us at <a href="mailto:support@zicreates.com" className="text-primary underline">support@zicreates.com</a> within <strong>7 days</strong> of payment to request a refund.
          </p>

          <h3 className="text-lg font-semibold">5. Processing of Refunds</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Approved refunds will be processed within <strong>5–10 business days</strong> via the original payment method.</li>
            <li>Transaction or processing fees charged by payment providers (e.g., Flutterwave, Paystack) are non-refundable.</li>
          </ul>

          <p className="mt-6">
            📧 <strong>Contact Us</strong>: If you have questions about this Refund Policy, email <a href="mailto:support@zicreates.com" className="text-primary underline">support@zicreates.com</a> or visit <a href="http://www.zicreates.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.zicreates.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Refund;
