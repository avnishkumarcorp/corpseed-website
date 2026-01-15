import { useState } from "react";

const Faq = ({ id = "faq", title = "FAQ’s", faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs.length) return null;

  return (
    <section id={id} className="px-4 sm:px-6 lg:px-3 py-12">
      
      {/* HEADING */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        {title}
      </h2>

      {/* FAQ LIST */}
      <div className="max-w-181.25 border border-gray-200 divide-y">
        {faqs.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-medium"
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
