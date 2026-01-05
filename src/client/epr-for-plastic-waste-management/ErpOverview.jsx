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
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    });

    return () => iti.destroy();
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT (placeholder for overview text) */}
        <div className="lg:col-span-2">
          {/* Your Overview / content goes here */}
        </div>

        {/* RIGHT STICKY FORM */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="bg-white border rounded-lg p-6">

              <h3 className="text-lg font-semibold mb-6 text-center">
                Enquiry Now for <br />
                <span className="text-blue-600">
                  EPR For Plastic Waste Management
                </span>
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-sm"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-sm"
                  required
                />

                <input
                  ref={phoneRef}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-sm"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-sm"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                >
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
              </form>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EPROverview;
