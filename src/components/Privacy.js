import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-background text-neutral py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-semibold mb-12">
          Privacy Policy
        </h2>

        <div className="space-y-6 text-sm leading-relaxed max-w-[1280pc] mx-auto">
          <p className="italic">
            <strong>Effective Date:</strong> 09 August 2025
          </p>

          <p>
            At <strong>Zi Creates</strong>, we are committed to protecting your
            privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your
            information when you interact with our website, services, and
            digital platforms.
          </p>

          <h3 className="text-lg font-semibold">1. Information We Collect</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, company name, and other contact details.
            </li>
            <li>
              <strong>Project Information:</strong> Details about your brand,
              design requirements, and preferences for our services.
            </li>
            <li>
              <strong>Payment Information:</strong> Card details, bank
              information, or payment references processed securely via
              third-party payment providers (e.g., Flutterwave, Paystack,
              PayPal).
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and usage data collected through cookies and
              analytics tools.
            </li>
          </ul>

          <h3 className="text-lg font-semibold">2. How We Use Your Information</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and manage our services.</li>
            <li>Process payments and subscriptions.</li>
            <li>Communicate project updates, proposals, and marketing materials.</li>
            <li>
              Improve our website, user experience, and service offerings.
            </li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <h3 className="text-lg font-semibold">3. Data Sharing & Security</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>We <strong>do not sell</strong> your personal information to third parties.</li>
            <li>
              Payment information is handled securely by{" "}
              <strong>trusted payment providers</strong>; we do not store
              sensitive card or bank details on our servers.
            </li>
            <li>
              We may share your data with service providers, contractors, or
              partners strictly for the purpose of delivering our services.
            </li>
            <li>
              We implement industry-standard encryption and security protocols
              to protect your data.
            </li>
          </ul>

          <h3 className="text-lg font-semibold">4. Your Rights</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Access and request a copy of the personal information we hold
              about you.
            </li>
            <li>Request corrections or updates to your data.</li>
            <li>
              Withdraw consent for marketing communications at any time.
            </li>
            <li>
              Request deletion of your personal information, subject to legal
              and contractual obligations.
            </li>
          </ul>

          <h3 className="text-lg font-semibold">5. Cookies & Tracking Technologies</h3>
          <p>
            We use cookies and similar technologies to enhance your experience,
            analyze website traffic, and personalize content. You can manage
            your cookie preferences through your browser settings.
          </p>

          <h3 className="text-lg font-semibold">6. Third-Party Services</h3>
          <p>
            Our services may include links to third-party websites or tools. We
            are not responsible for their privacy practices, and we encourage
            you to review their policies.
          </p>

          <h3 className="text-lg font-semibold">7. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy periodically. Updates will be
            posted on our website with the new effective date.
          </p>

          <h3 className="text-lg font-semibold">8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or how your data
            is handled, please contact us at:
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:support@zicreates.com"
              className="text-primary underline"
            >
              support@zicreates.com
            </a>
            <br />
            🌐{" "}
            <a
              href="https://www.zicreates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              www.zicreates.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
