import { useState } from "react";

const faqs = [
  {
    q: "What is EPR in Plastic Waste Management?",
    a: "Extended Producer Responsibility (EPR) is a policy approach that makes producers responsible for the environmentally sound management of plastic waste generated from their products."
  },
  {
    q: "Who requires EPR in Plastic Waste Management?",
    a: "Producers, Importers, Brand Owners (PIBOs), and Plastic Waste Processors involved in plastic packaging are required to obtain EPR registration."
  },
  {
    q: "Who can issue EPR for Plastic Waste Management?",
    a: "EPR registration is issued by the Central Pollution Control Board (CPCB) or the respective State Pollution Control Boards (SPCBs), depending on the operational area."
  },
  {
    q: "What is the cost of EPR for Plastic Waste Management?",
    a: "The cost of EPR registration varies based on the quantity of plastic waste generated or processed and the category of the applicant."
  },
  {
    q: "What is EPR registration for plastic waste?",
    a: "EPR registration is a mandatory authorization that allows PIBOs and plastic waste processors to legally manage plastic waste in compliance with government regulations."
  },
  {
    q: "What is an EPR certificate for plastic waste?",
    a: "An EPR certificate is an official document issued after successful registration, confirming compliance with EPR obligations under Plastic Waste Management Rules."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 px-4 sm:px-6 lg:px-16 py-10"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        FAQ’s
      </h2>

      <div className="border border-gray-200 divide-y">
        {faqs.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 font-medium"
            >
              <span>{item.q}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "›"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
