import React from "react";

const Terms = () => {
  return (
    <section className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold mb-12">
          Terms of Service
        </h2>

        <div className="space-y-6 text-sm leading-relaxed max-w-{1280px} mx-auto">
          <p>
            <strong>Effective Date:</strong> 09 August 2025
          </p>

          <p>
            Welcome to <strong>Zi Creates</strong>. By accessing or using our website,
            services, or subscription plans, you agree to comply with and be bound by
            these Terms of Service. Please read them carefully before using our services.
          </p>

          <h3 className="text-lg font-semibold">1. Overview</h3>
          <p>
            Zi Creates is a branding and digital agency offering services including brand
            identity design, brand visuals, graphic design, UI/UX design, motion
            graphics, web development, and digital marketing. These terms govern the use
            of our services, whether through one-time projects or recurring subscription
            plans.
          </p>

          <h3 className="text-lg font-semibold">2. Eligibility</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be at least 18 years old.</li>
            <li>Provide accurate, complete, and up-to-date information when requested.</li>
            <li>Have the legal authority to enter into agreements on behalf of yourself or your organization.</li>
          </ul>

          <h3 className="text-lg font-semibold">3. Services</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Branding &amp; Brand Identity Development</li>
            <li>Graphic &amp; Motion Design</li>
            <li>Website Design &amp; Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing &amp; Campaign Management</li>
          </ul>
          <p>We may update or expand our services at any time.</p>

          <h3 className="text-lg font-semibold">4. Payment &amp; Subscription Terms</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pricing:</strong> All prices are listed in USD unless stated otherwise.</li>
            <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly unless otherwise agreed.</li>
            <li><strong>Payment Methods:</strong> Payments are processed securely via third-party providers (Flutterwave, Paystack, PayPal). We do not store sensitive payment details.</li>
            <li><strong>Failed Payments:</strong> Service may be suspended until payment is completed.</li>
            <li><strong>Refund Policy:</strong> No refunds for services already rendered. Subscription fees are non-refundable once the billing cycle starts.</li>
          </ul>

          <h3 className="text-lg font-semibold">5. Intellectual Property</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All content, designs, and deliverables remain Zi Creates’ property until full payment is received.</li>
            <li>Upon full payment, ownership of final deliverables transfers to the client, except pre-existing tools, fonts, stock assets, or licensed software.</li>
          </ul>

          <h3 className="text-lg font-semibold">6. Client Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide timely feedback, approvals, and required materials.</li>
            <li>Ensure all materials provided do not infringe third-party rights.</li>
            <li>Use deliverables in compliance with applicable laws.</li>
          </ul>

          <h3 className="text-lg font-semibold">7. Limitation of Liability</h3>
          <p>
            Zi Creates is not liable for indirect, incidental, or consequential damages, delays beyond our control, or losses resulting from misuse of our services.
          </p>

          <h3 className="text-lg font-semibold">8. Termination</h3>
          <p>We may suspend or terminate services if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment is overdue.</li>
            <li>The client violates these terms.</li>
            <li>The requested work conflicts with our ethical or legal standards.</li>
          </ul>

          <h3 className="text-lg font-semibold">9. Changes to Terms</h3>
          <p>
            We may update these Terms of Service at any time. Continued use of our services after changes means you accept the updated terms.
          </p>

          <h3 className="text-lg font-semibold">10. Contact Us</h3>
          <p>
            📧 <a href="mailto:support@zicreates.com" className="text-primary underline">support@zicreates.com</a><br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
