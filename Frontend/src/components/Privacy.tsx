"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-gray-800">
      
      <div className="flex flex-col mb-6 sm:mb-10 lg:flex-row items-center gap-4 sm:gap-8 pt-16 sm:pt-32 px-4 lg:px-8 max-w-7xl mx-auto h-auto sm:h-screen lg:h-auto">
        {/* Left: Date Info */}
        <div className="ml-0 sm:-ml-72 text-xs text-black/80 font-medium space-y-1 w-full lg:w-[200px] flex flex-col items-center justify-center lg:items-start">
          <p className="block"><strong>Effective Date:</strong> June 27, 2025</p>
          <p className="block"><strong>Last Updated:</strong> July 15, 2025, 05:49 PM IST</p>
        </div>

        {/* Separator */}
        <div className="hidden lg:block w-px min-h-[150px] bg-gray-800 flex-shrink-0"></div>

        {/* Right: Main Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Privacy Policy</h1>
          <p className="text-xs sm:text-sm max-w-3xl leading-relaxed">
            At CryoCorp O2 LLP, we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard your data
            when you interact with our website, services, or communication platforms.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
        <div>
          <h2 className="font-semibold">1. Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-decimal pl-5 mt-2 space-y-1">
            <li>Personal identifiers: Name, email, phone number, company details, and other contact information.</li>
            <li>Business information: Nature of inquiry, product interests, or transactional data.</li>
            <li>Technical data: Browser type, IP address, device information, and usage patterns.</li>
            <li>Communication content: Emails, forms, chats, and phone records (as applicable).</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">2. How We Use Your Information</h2>
          <p>Collected data is used to:</p>
          <ul className="list-decimal pl-5 mt-2 space-y-1">
            <li>Respond to inquiries and provide services</li>
            <li>Process orders and manage client accounts</li>
            <li>Send important updates or relevant marketing material</li>
            <li>Improve our products, services, and website functionality</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">3. Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your data only with:</p>
          <ul className="list-decimal pl-5 mt-2 space-y-1">
            <li>Internal team members for order processing or customer service</li>
            <li>Trusted third-party providers (e.g., IT or CRM service providers)</li>
            <li>Legal or regulatory authorities when required</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">4. Data Security</h2>
          <p>
            We employ industry-standard safeguards (encryption, firewalls, secure access protocols) to
            protect your data from unauthorized access, loss, or misuse.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data by writing to us at:{" "}
            <a href="mailto:crm@cryocorp.in" className="text-blue-600 underline">crm@cryocorp.in</a>
          </p>
        </div>

        <div>
          <h2 className="font-semibold">6. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and analytics tools to enhance user experience. You can
            control cookie settings through your browser.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">7. Policy Updates</h2>
          <p>
            We reserve the right to update this Privacy Policy. Any changes will be posted on our
            website with the revised effective date.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
