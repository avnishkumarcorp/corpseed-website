import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const EPROverview = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    const iti = intlTelInput(phoneRef.current, {
      initialCountry: "in",
      separateDialCode: true,
      loadUtils: () =>
        import("intl-tel-input/build/js/utils.js"),
    });

    return () => iti.destroy();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">
            An Overview of EPR for Plastic Waste Management
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              Extended Producer Responsibility (EPR) is the term used to
              describe the practice of transferring end-of-life management of
              products and materials to the makers of those goods, i.e. the
              producer.
            </p>

            <p>
              The Guidelines offer a framework to improve the circular economy
              of plastic packaging waste, encourage the creation of novel
              plastic substitutes, and outline steps firms can take to
              transition to sustainable plastic packaging.
            </p>

            <p>
              In order to limit the use of new plastic material for packaging,
              the standards require reuse of rigid plastic packaging materials.
              The guidelines outline a framework for collecting environmental
              compensation based on the polluter-pays principle.
            </p>

            <p>
              India generates nearly 25,000 tons of plastic waste every day.
              This plastic enters the food chain and causes severe health
              hazards, making EPR implementation critical.
            </p>

            <p>
              Plastic Waste Management Rules, 2016 defines Extended Producer
              Responsibility (EPR) as the responsibility of producers for
              environmentally sound management of products until the end of
              life.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg border rounded-lg p-6 
                          lg:sticky lg:top-24">

            <h3 className="text-lg font-semibold mb-6 text-center">
              Enquiry Now for <br />
              <span className="text-blue-600">
                EPR For Plastic Waste Management
              </span>
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                type="email"
                placeholder="Email *"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                ref={phoneRef}
                type="tel"
                placeholder="Phone"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                type="text"
                placeholder="City *"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Get Free Consultation
              </button>

              <p className="text-xs text-gray-400 text-center">
                By registering you agree to our{" "}
                <span className="text-blue-500 cursor-pointer">
                  Terms of Use
                </span>{" "}
                &{" "}
                <span className="text-blue-500 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EPROverview;
