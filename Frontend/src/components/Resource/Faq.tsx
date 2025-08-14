import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ_DATA: Record<string, FAQ[]> = {
  Products: [
    {
      question: "What types of industrial gas plants does CryoCorp offer?",
      answer:
        "CryoCorp offers Air Separation Units (ASU) for producing Oxygen and Nitrogen, PSA Oxygen and Nitrogen Plants (in partnership with Summits Hygronics), Acetylene Plants, and Liquid Refilling Bottling Plants for various industrial gases.",
    },
    {
      question: "What capacity ranges are available for your ASU plants?",
      answer:
        "Our ASU plants are available in capacities ranging from 80 cu.m/hr to 400 cu.m/hr. One source also mentions a range of 45-600 cu.m/hr.",
    },
    {
      question: "What capacities are available for Acetylene plants?",
      answer:
        "We offer Acetylene plants in capacities of 45 cu.m/hr and 100 cu.m/hr.",
    },
    {
      question: "What capacities are available for Liquid Bottling Plants?",
      answer:
        "Liquid Bottling Plants are available in 10KL, 13KL, and 20KL capacities.",
    },
    {
      question: "Do you offer second-hand oxygen or nitrogen plants? ",
      answer:
        "Yes, CryoCorp provides professional sales service for second-hand Oxygen/Nitrogen plants and handles turnkey projects for their relocation.",
    },
    {
      question:
        "What is the typical purity level for oxygen produced by your ASU plants?",
      answer: "Our ASU plants produce oxygen with purities up to 99.9%.",
    },
    {
      question:
        "What is the typical purity level for oxygen from your PSA systems?",
      answer: "Our PSA systems typically deliver 93-96% purity.",
    },
    {
      question: "What major machinery and spares does CryoCorp offer?",
      answer:
        " CryoCorp offers major machinery like Air Compressors, After Coolers, Molecular Sieve Batteries, Expansion Engines, Liquid Oxygen/Nitrogen Pumps, Dust Filters & Oil Absorbers, Chilling Units, Cooling Towers, ASU Columns, Cryogenic Tanks, Ambient Vaporizers, and Liquid Bottling Unit Pumps, along with comprehensive spares for these components.",
    },
    {
      question:
        "For what makes of industrial gas plants do you provide spare parts?",
      answer:
        "We provide spare parts for plants of various makes including our in-house brand CryoCorp, Sanghi, KVK, Universal, OxyPlant, Sanghi Org, Sanghi Overseas, INOX, Universal Boschi etc.",
    },
    {
      question: "How many different products or SKUs does CryoCorp offer?",
      answer:
        "CryoCorp is a one-stop shop offering over 9,000 products related to the industrial gas industry. We also stock and sell over 6000 items under one roof.",
    },
    {
      question:
        "How can I ensure I get genuine and compatible spare parts for my plant? ",
      answer:
        "CryoCorp is a one-stop shop for authentic components with over 9,000 products. Our technical team can cross-reference your requirements to ensure perfect fit. Our USP is offering genuine spares with perfect interchangeability. We use ML-powered spare matching cross-referencing 9,000+ parts with plant make, capacity, and year, highlighting a USP less than 1% rejection rate.",
    },
    {
      question: "Do you offer customized machinery or spares?",
      answer:
        "Yes, the company holds expertise in customised manufacturing and offers bespoke solutions about spares and machinery. We also offer customized manifolds, liquid oxygen pumps, liquid nitrogen pumps, expansion engines manufactured inhouse under Cryo Corp brand.",
    },
    {
      question:
        "What is the typical lead time for custom or made-to-order parts?",
      answer:
        "The lead time for customized items manufactured specifically for an order (OWS - Order when Sold) is communicated. As an example, custom acetylene stabilizer replacements have a lead time of 4-6 weeks.",
    },
    {
      question: "What accessories and ancillaries does CryoCorp offer?",
      answer:
        "We offer accessories such as Cylinder Hydro Testing Units, Spindle Operated or Wheel Operated Valves, and Oxygen or Nitrogen Purity Analyzers. Ancillaries include Industrial Cylinders, Valve Guards, Cooling Towers, Electrical panels, Porta Cryo, and Portable Liquid Oxygen/Nitrogen Tanks.",
    },
    {
      question:
        "How quickly can a new PSA system be installed and operational?",
      answer:
        "PSA systems are much faster to deploy than ASU plants. From delivery to full operation can be quick.",
    },
    {
      question: "What sets the Cryo Corp brand apart for machinery and spares?",
      answer:
        "The Cryo Corp brand is a registered Trademark that instills a seal of trust and genuine OEM quality spares. We manufacture high-demand OEM machinery like Liquid Oxygen Pumps, Expansion Engines, and Liquid Filling Manifolds under this brand.",
    },
    {
      question:
        "Do you provide documentation or certification for spare parts?",
      answer:
        "Yes, we offer test certifications of spares/machinery wherever it is required to ensure trust and standardization, especially in export inspections.",
    },
    {
      question:
        "What financing options are available for purchasing cryogenic plants?",
      answer:
        "Financing options include Cash Purchases, Loans (debt financing), Leasing arrangements, and Supply agreements.",
    },
    {
      question: "How can I get pricing information for a specific product?",
      answer:
        " To offer the most accurate pricing, you are kindly requested to share your specific requirements via email (admin@cryocorp.in, ashish@cryocorp.in, ea@cryocorp.in) or WhatsApp (9004759939). An acknowledgment will be sent instantly, followed by the quote shortly.",
    },
    {
      question: "Are your products compliant with industry standards?",
      answer:
        "CryoCorp states adherence to stringent industry regulations and safety standards while manufacturing spares and machinery. Adherence to draft ISO protocols (under process) is also mentioned in the About Us / Certifications section.",
    },
  ],
  Services: [
    {
      question: "What types of plants does CryoCorp offer?",
      answer:
        "CryoCorp offers Air Separation Units (ASU) for Oxygen and Nitrogen (45-600 cu.m/hr), PSA Oxygen and Nitrogen Plants, Acetylene Plants (45 cu.m/hr and 100 cu.m/hr), and Liquid Refilling Bottling Plants and all their major machinery and spares for Oxygen, Nitrogen, Argon, and Carbon Dioxide.",
    },
    {
      question: "Does CryoCorp supply spare parts as well?",
      answer:
        "Yes, we supply a comprehensive range of spare parts including liquid nitrogen pumps, liquid oxygen pumps, valve components, air compressor spares, molecular sieve batteries, dust filter & oil absorber elements, expansion engine components, temperature gauges, filling manifolds under our own brand CryoCorp. Our spares and machinery are OEM approved for many brands of cryogenic plants like Sanghi, Universal, OxyPlant, KVK, and other local manufacturers for ASU plants. We are also official channel partners of Summits Hygronics Pvt. Ltd. for PSA Oxygen and Nitrogen Plants and their spares.",
    },
    {
      question: "What makes CryoCorp different from other suppliers?",
      answer:
        "CryoCorp stands apart with our comprehensive approach, low rejection rate (less than 1%), dedicated customer relationship management, timely order updates, and 27+ years of experience solving industrial gas challenges across 25 countries.",
    },
    {
      question: "How long does it take to process and deliver my order?",
      answer:
        "Delivery timeframes vary by product type: NOS (Never out of Stock) items are typically dispatched within 3–5 working days, while OWS (Order When Sold) customized items usually require 4–6 weeks for manufacturing and delivery.",
    },
    {
      question: "How can I track my order status?",
      answer:
        "Our CRM team provides regular updates throughout the order process. You'll receive notifications at key stages including order confirmation, lead time communication, full kitting (if applicable), material ready approval, dispatch notification, and LR copy delivery.",
    },
    {
      question: "What happens if I need my order urgently?",
      answer:
        "For urgent requirements, please specify this when placing your order. We'll work to prioritize your needs based on our current production schedule and inventory availability. For NOS items, we may be able to expedite shipping. For customized items, we suggest keeping a buffer or stocking essential spares in advance to avoid breakdowns.",
    },
    {
      question: "What payment options does CryoCorp offer?",
      answer:
        "We accept advance payments (standard for new clients) and partial payment plans for established relationships. We prefer HDFC Bank transfers, but we also accept Letters of Credit (for international and large orders) and online payments for select transactions.",
    },
    {
      question: "Do you offer any financing options?",
      answer:
        "Yes, eligible clients may access extended payment terms, equipment leasing through our financial partners, and project financing for complete plant installations. These are evaluated case-by-case.",
    },
    {
      question: "What happens if I delay payment after my material is ready?",
      answer:
        "Full payment is expected within 15 days after the Packing List is shared. From the 16th day onward, demurrage charges of 2–3% of the invoice amount may apply daily due to limited storage capacity. Please contact us proactively if you anticipate delays.",
    },
    {
      question: "Are there any discount programs available?",
      answer:
        'Yes, we offer Early Bird Discounts (2–3% for payments within 48 hours of quotation), Bulk Purchase Discounts, Repeat Client Loyalty Programs, Referral Bonuses, and Seasonal Promotions. Ask about our "No Regret Price" for our best deal.',
    },
    {
      question: "How does your referral program work?",
      answer:
        "When you refer another business that places an order with us and mentions your name, you receive a 5% discount voucher for your next purchase. There's no limit to referrals, and high-value referrals earn enhanced benefits.",
    },
    {
      question: "Do you offer maintenance services for plants?",
      answer:
        "Yes, we provide comprehensive Annual Maintenance Contracts (AMCs) and Critical Maintenance Contracts (CMCs) for ASU Oxygen Plants, ASU Nitrogen Plants, PSA Oxygen Plants, PSA Nitrogen Plants, Acetylene Plants, and Liquid Bottling Plants.",
    },
    {
      question: "What does your maintenance contract include?",
      answer:
        "Our maintenance contracts include technician support, spare parts, regular inspections to detect issues early, and assistance with regulatory compliance. The goal is to minimize downtime, maximize efficiency, and reduce costs.",
    },
    {
      question: "How quickly can you respond to equipment failures?",
      answer:
        "Response time depends on location and contract type. Emergency service calls are prioritized under maintenance contracts. For urgent help, contact our technical team at ashish@cryocorp.in.",
    },
    {
      question: "What should I do if my plant experiences unexpected downtime?",
      answer:
        "Contact our technical support immediately. Many problems can be diagnosed remotely. We guide basic troubleshooting and, if necessary, dispatch technicians or arrange spare part deliveries.",
    },
    {
      question: "How often should I perform maintenance on my plant?",
      answer:
        "We recommend regular preventive maintenance based on your plant type, usage, and environment. We can help create a custom maintenance schedule for your equipment.",
    },
    {
      question:
        "How can I improve my plant's efficiency and reduce operating costs?",
      answer:
        "We offer efficiency assessments and recommend upgrades to lower consumption while maintaining output. Proper maintenance, trained operators, and genuine parts are key contributors.",
    },
    {
      question: "What warranty do you provide on your products?",
      answer:
        "Our products come with standard warranties against manufacturing defects. Warranty periods vary by product—check your purchase documents or contact us for details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Returns on standard items are accepted within 7 days if unused and in original packaging. Custom-manufactured items are non-returnable unless they deviate from agreed specs. Report any issues immediately.",
    },
  ],
  Maintenance: [
    {
      question:
        "Why is regular maintenance crucial for my industrial gas plant?",
      answer:
        "Regular maintenance is essential for ensuring a consistent and reliable gas supply, preventing unplanned downtime and production delays. It helps in optimizing plant operations for maximum efficiency and minimizing energy consumption, and extending the equipment lifespan. This is vital for cost-effective production. For Acetylene plants, meticulous maintenance is critical due to the gass highly flammable nature to prevent severe safety incidents and production halts.",
    },
    {
      question:
        "What is typically included in your plant maintenance services?",
      answer:
        "Our maintenance services cover a wide range of activities depending on the plant type and contract, including preventive maintenance, production log analysis, performance optimization, troubleshooting breakdowns, adsorbent bed maintenance, valve calibration, VPSA cycle optimization, emergency response for solvent leaks or pressure fluctuations, immediate intervention for acetylene decomposition risks, and urgent stabilizer retrofits. We also provide access to high-quality spare parts for reliable replacements.",
    },
    {
      question:
        "How often should maintenance be performed on PSA Nitrogen Plants?",
      answer:
        "As per the guidelines for our PSA Nitrogen Plants AMC services, 3 visits are required in a year.",
    },
    {
      question:
        "How quickly can CryoCorp respond to critical maintenance issues?",
      answer:
        " We offer quick response times to minimize production losses and disruptions. For critical issues like PSA Oxygen purity recovery, we aim for 24-hour resolution. We also offer emergency response for issues such as solvent leaks or acetylene decomposition risks.",
    },
    {
      question:
        "Do you use advanced techniques for maintenance and troubleshooting?",
      answer:
        " Yes, our services include ML-powered root-cause analysis for precise diagnostics. We also utilize AI-driven process audits to ensure strict compliance with purity standards in ASU Oxygen plants, and AI-driven pressure monitoring for explosion-risk mitigation in Acetylene plants. Our ML-powered catalog aids in selecting the correct spares for reliable maintenance.",
    },
    {
      question: "How can I reach CryoCorp for support or inquiries?",
      answer:
        "You can reach us at:\n\n" +
        "General Inquiries: crm@cryocorp.in\n" +
        "Quotations: admin@cryocorp.co.in (Ms. Komal)\n" +
        "Order Status: crm@cryocorp.in\n" +
        "Payments: accounts@cryocorp.in\n" +
        "Technical Help: ashish@cryocorp.in\n" +
        "Direct line for urgent matters: +91 9821219939 (Mr. Ashish Goyal)",
    },
    {
      question: "What are your business hours?",
      answer:
        "We're available Monday through Saturday, 9:30 AM to 6:00 PM IST. We aim to respond to all queries within 24 hours.",
    },
    {
      question: "Can I schedule a consultation with your team?",
      answer:
        "Yes, you can book a 9-minute meeting at https://calendar.app.google/U2mAAuMzUMHVfx2S9 or join us on Google Meet at https://meet.google.com/ufi-okvg-cvg for quick consultations.",
    },
  ],
  "Export Process": [
    {
      question: "Which countries does CryoCorp O2 LLP export to? ",
      answer:
        "We are an Export Company with expertise in trading and exporting spares and machinery of Indian-made Oxygen Plants to the global south. Our products have reached over 450 clients in 25 countries in Africa, South America, Asia, and the Middle East. We are also well positioned to service new markets.",
    },
    {
      question: "How does CryoCorp ensure timely delivery for export orders? ",
      answer:
        "We understand the importance of ensuring timely delivery of spare parts and machinery to fulfill timely shipping and ensure your client retention. Quick delivery is a key aspect of our spare parts supply service.",
    },
    {
      question: "Can CryoCorp assist with customs and logistics for exports? ",
      answer:
        "Yes, we cooperate with your team in navigating customs procedures and international logistics.",
    },
    {
      question: "What payment terms are available for international clients? ",
      answer:
        " We offer quick response times to minimize production losses and disruptions. For critical issues like PSA Oxygen purity recovery, we aim for 24-hour resolution. We also offer emergency response for issues such as solvent leaks or acetylene decomposition risks.",
    },
    {
      question:
        "How can CryoCorp ensure the quality and authenticity of parts and machinery for export? ",
      answer:
        "We provide genuine and high-quality products. We offer test certificates wherever applicable, which helps instill trust regarding the quality and authenticity of parts and machinery. Our own brand, Cryo Corp, is a registered trademark that instills a seal of trust and genuine OEM quality spares. The company holds expertise in customized and outsourced manufacturing, trading, and exports",
    },
    {
      question:
        "What common spare parts do you export for oxygen/nitrogen plants?",
      answer:
        "We export valve components, air compressor spares, molecular sieve batteries, dust filters, oil absorber elements, expansion engine components, temperature gauges, filling manifolds, and parts for various brands of ASU & PSA plants & air compressors.",
    },
    {
      question: "How quickly can you ship spare parts internationally?",
      answer:
        "NOS (Never out of Stock) items ship within 3–5 working days. OWS (Order When Sold) customized items typically require 4–6 weeks for manufacturing and delivery.",
    },
    {
      question:
        "Do you provide compatibility verification for older plant models?",
      answer:
        "Yes. We cross-reference your plant specifications with our database and may request photos of your equipment to ensure perfect compatibility.",
    },
    {
      question: "What payment methods do you accept for international orders?",
      answer:
        "We accept Letters of Credit, bank transfers, advance payment against Proforma Invoice, and can arrange milestone-based payments for established clients.",
    },
    {
      question: "Do you offer discounts on bulk spare part orders?",
      answer:
        "Yes, we offer tiered discounts on bulk purchases, loyalty pricing for repeat clients, and early bird discounts (2–3%) for payments made within 48 hours of quotation.",
    },
    {
      question: "How are spare parts packaged for international shipping?",
      answer:
        "We use industrial-grade packaging materials with vacuum sealing for moisture-sensitive components, wooden crating for heavy parts, and weather-resistant packaging for sea freight.",
    },
    {
      question:
        "What warranty coverage do you provide on exported spare parts?",
      answer:
        "We offer a standard 12-month warranty against manufacturing defects with extended warranty options available for select components.",
    },
    {
      question: "Can you expedite shipping for emergency breakdown situations?",
      answer:
        "Yes, we offer priority processing and express shipping options for emergency situations with 24-hour processing for critical components where feasible.",
    },
    {
      question:
        "Do you provide installation instructions in multiple languages?",
      answer:
        "We can provide basic installation guides in major languages upon request, though our standard documentation is in English.",
    },
    {
      question: "How do you handle customs documentation for exports?",
      answer:
        "We prepare all necessary export documentation including Commercial Invoice, Packing List, Certificate of Origin, export declaration forms, and test certificates to facilitate smooth customs clearance.",
    },
    {
      question: "Can you supply parts for non-CryoCorp manufactured plants?",
      answer:
        "Yes, with our 9,000+ product catalog, we supply compatible parts for most major oxygen/nitrogen plant manufacturers worldwide.",
    },
    {
      question:
        "What is your process for handling warranty claims internationally?",
      answer:
        "We perform remote diagnosis, collect documentation of the issue via photos/videos, ship replacement parts expeditiously for valid claims, and provide technical support throughout the process.",
    },
    {
      question:
        "Do you offer post-warranty maintenance contracts for exported parts?",
      answer:
        "Yes, we offer AMCs (Annual Maintenance Contracts) and CMCs (Critical Maintenance Contracts) with remote technical support options for international clients.",
    },
    {
      question: "Can you provide virtual technical support for installation?",
      answer:
        "Absolutely. We offer remote technical assistance via video calls, detailed installation guides, and troubleshooting support.",
    },
    {
      question: "What information do you need to quote for spare parts?",
      answer:
        "We need your plant make/model, capacity, compressor type, specific part details, and preferably photos or drawings of the components needed.",
    },
    {
      question:
        "How do you handle varying voltage specifications across countries?",
      answer:
        "We customize electronic components to match local power supply specifications and provide appropriate adapters or converters when necessary.",
    },
    {
      question: "Do you have minimum order requirements for exports?",
      answer:
        "While we don’t have strict minimums, smaller orders may have proportionally higher shipping costs. We can consolidate orders to optimize logistics costs.",
    },
    {
      question:
        "Can you help with technical troubleshooting before ordering parts?",
      answer:
        "Yes, our technical team can provide remote diagnostic support to help identify the correct parts needed for your specific issue.",
    },
    {
      question: "Do you provide certificates of authenticity with spare parts?",
      answer:
        "Yes, we provide test certificates and authenticity documentation for all exported parts to ensure compliance with international standards.",
    },
    {
      question: "How do I track my international spare parts shipment?",
      answer:
        'Once dispatched, you’ll receive an "Exciting Update: Your Shipment is on Its Way!" notification with tracking information for your shipment.',
    },
  ],
};

const FaqSection: React.FC = () => {
  const tabs = Object.keys(FAQ_DATA);
  const [activeTab, setActiveTab] = useState<string>("Products");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="w-full min-h-screen bg-white py-24 px-6 pt-36">
      <div className="max-w-4xl mx-auto">
        {/* --- ORIGINAL INTRO --- */}
        <h2
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-6"
          style={{ color: "#5FC9D8" }}
        >
          Frequently asked questions
        </h2>
        <p className="text-sm md:text-xl text-[#28585E] mb-12">
          Clarity leads to confidence — and we’re here to offer both.
          <br />
          At CryoCorp, transparency is at the core of how we operate. This FAQ
          section is designed to give you direct insights and clear information,
          so you always feel informed and empowered.
        </p>

        {/* --- NEW TAB + ACCORDION BELOW --- */}
        <div className="border-t pt-8">
          {/* Tabs */}
          <div className="flex space-x-6 border-b pb-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenQuestion(null);
                }}
                className={`pb-2 text-xs md:text-lg font-semibold transition-colors ${
                  activeTab === tab
                    ? "border-b-4 border-[#5FC9D8] text-[#5FC9D8]"
                    : "border-b-4 border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Accordion */}
          {activeTab && (
            <div className="space-y-4">
              {FAQ_DATA[activeTab].map((faq) => (
                <div
                  key={faq.question}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenQuestion((prev) =>
                        prev === faq.question ? null : faq.question
                      )
                    }
                    className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                  >
                    <span className="font-medium text-sm md:text-lg">
                      {faq.question}
                    </span>
                    <span className="ml-2">
                      {openQuestion === faq.question ? "−" : "+"}
                    </span>
                  </button>
                  {openQuestion === faq.question && (
                    <div className="px-4 py-3 bg-white text-xs md:text-lg text-gray-700">
                      {faq.answer.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
