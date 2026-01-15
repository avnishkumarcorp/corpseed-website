import React from "react";
import { FaCheck } from "react-icons/fa";

const ScrollNavView_04 = () => {
  return (
    <div>
      <section id="fees" className="scroll-mt-24 px-4 sm:px-6 lg:px-16 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Fees for EPR in Plastic Waste Management License
        </h2>

        {/* FOR PIBOs */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4">For PIBOs</h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>Less than 1000 TPA – Rs. 10,000</p>
          </div>

          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>Between 1,000 – 10,000 TPA – Rs. 20,000</p>
          </div>

          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>Greater than 10,000 TPA – Rs. 50,000</p>
          </div>
        </div>

        {/* FOR PWPs */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4">For PWPs</h3>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>Less than 200 TPA – Rs. 5,000</p>
          </div>

          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>Between 200 – 2,000 TPA – Rs. 20,000</p>
          </div>

          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>More than 2,000 TPA – Rs. 50,000</p>
          </div>
        </div>

        {/* RENEWAL */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Renewal for Plastic Waste Management
        </h3>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>
              The cost of renewal shall be the same as the cost of EPR’s initial
              registration.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>
              Annual processing charges shall be 25% of the EPR application
              fees.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <FaCheck className="text-green-300 text-lg mt-1" />
            <p>
              Four months before the registration’s expiration, PIBOs must
              submit the renewal application along with the necessary supporting
              documents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollNavView_04;