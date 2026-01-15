import React from "react";
import { FaCheck } from "react-icons/fa";

const ScrollNavView_03 = () => {
  return (
    <div>
      <section
        id="guidelines"
        className="scroll-mt-24 px-4 lg:px-16 py-10"
      >
        <h2 className="text-xl md:text-3xl font-semibold mb-6">
          Procedure to Apply for Plastic Waste Management Authorization /
          License
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {[
            "Apply online or offline for Plastic Waste Management Registration.",
            "Attach the required documents.",
            "Submit the form to the concerned authorities.",
            "Liaisoning with the concerned departments.",
            "If the application and documents are found to be satisfactory by government officials.",
            "License or certificate is issued."
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-green-400 text-lg mt-1 shrink-0" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* MARKING / LABELING */}
        <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-6">
          Marking or Labeling
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="flex items-start gap-3">
            <FaCheck className="text-green-400 text-lg mt-1 shrink-0" />
            <p>
              Each plastic carry bag and multi-layered packaging shall have the
              following information printed in English:
            </p>
          </div>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Name and registration number of the manufacturer, and thickness in
              case of carry bags.
            </li>
            <li>
              Name and registration number of the manufacturer in case of
              multi-layered packaging.
            </li>
            <li>
              Name and certificate number in case of carry bags made from
              compostable plastic.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default ScrollNavView_03;
