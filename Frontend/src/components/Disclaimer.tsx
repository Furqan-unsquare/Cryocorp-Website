"use client";
import React from "react";

const Disclaimer = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-gray-800 mt-20 md:mt-24">
      {/* Heading and Separator */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-10">
        {/* Optional Separator for large screens */}
        <div className="hidden lg:block w-px min-h-[150px] bg-gray-800"></div>

        {/* Content Header */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Disclaimer</h1>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 text-base leading-relaxed">
        <p>
          The content shared on CryoCorp O2 LLP's website, email communications, or marketing material is provided for general informational purposes only. While we strive to maintain accurate and up-to-date information, we make no warranties or guarantees, express or implied, regarding completeness, accuracy, or reliability.
        </p>

        <p>
          CryoCorp O2 LLP is not liable for any direct or indirect losses arising from the use or misuse of any content, services, or links to third-party websites.
        </p>

        <p>
          All users are advised to independently verify product details, specifications, or legal requirements before acting on any information provided.
        </p>

        <p>
          For any questions or concerns, please contact us at:
          <br />
          <a
            href="mailto:crm@cryocorp.in"
            className="text-sky-600 underline inline-block mt-1"
          >
            📧 crm@cryocorp.in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
