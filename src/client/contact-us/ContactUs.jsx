import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const ContactUs = () => {
  const phoneRef = useRef(null);
  const itiRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    itiRef.current = intlTelInput(phoneRef.current, {
      initialCountry: "in",
      separateDialCode: true,
      loadUtils: () =>
        import("intl-tel-input/build/js/utils.js"),
    });

    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-bold">
        Contact Us
      </h1>

      <p className="mt-4 text-base sm:text-lg text-center text-gray-400">
        Thanks for your interest in Corpseed
      </p>

      {/* Main Layout */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10 justify-center items-start">

        {/* LEFT FORM */}
        <div className="w-full lg:w-[45%] max-w-lg bg-white p-6 sm:p-8 shadow-lg border border-gray-300 rounded-md">
          
          <p className="text-xl font-semibold text-center mb-6">
            Leave Us Message
          </p>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2"
            />

            <input
              type="email"
              placeholder="Email *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2"
            />

            {/* PHONE INPUT WITH COUNTRY DROPDOWN */}
            <input
              ref={phoneRef}
              type="tel"
              placeholder="Phone Number *"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2"
            />

            <textarea
              placeholder="Message *"
              rows="4"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-2 resize-none"
            />
          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md block mx-auto hover:bg-blue-700 transition">
            Submit
          </button>
        </div>

        {/* RIGHT OFFICES (SCROLLABLE) */}
        <div className="w-full lg:w-[45%] bg-white p-6 sm:p-8 shadow-lg border border-gray-300 rounded-md 
                        max-h-130 overflow-y-auto">

          {/* NOIDA */}
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <FaLocationDot className="text-blue-600" />
              NOIDA OFFICE
            </div>
            <p className="ml-6 text-gray-700">Call: 7558640644</p>
            <p className="ml-6 text-gray-500">(Toll free: +91 7558 640 644)</p>
            <p className="ml-6 text-gray-700">
              Email: <span className="text-blue-500">info@corpseed.com</span>
            </p>
            <p className="ml-6 text-gray-600">
              2nd Floor, A-154A, Sector-63, Noida, UP - 201301
            </p>
          </div>

          {/* PUNE */}
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <FaLocationDot className="text-blue-600" />
              PUNE OFFICE
            </div>
            <p className="ml-6 text-gray-700">Call: 7558640644</p>
            <p className="ml-6 text-gray-500">(Toll free: +91 7558 640 644)</p>
            <p className="ml-6 text-gray-700">
              Email: <span className="text-blue-500">info@corpseed.com</span>
            </p>
            <p className="ml-6 text-gray-600">
              128 MG Road, Ground Floor, Camp Pune
            </p>
          </div>

          {/* ODISHA */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <FaLocationDot className="text-blue-600" />
              ODISHA OFFICE
            </div>
            <p className="ml-6 text-gray-700">Call: 7558640644</p>
            <p className="ml-6 text-gray-500">(Toll free: +91 7558 640 644)</p>
            <p className="ml-6 text-gray-700">
              Email: <span className="text-blue-500">info@corpseed.com</span>
            </p>
            <p className="ml-6 text-gray-600">
              Rourkela, Odisha - 769001
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="p-4 ml-10">
        Have questions? Visit our <span className="text-blue-500">FAQs</span>.
      </p>
      <p className="p-4 ml-10">
        For job opportunities, view our <span className="text-blue-500">Open roles</span>
      </p>
      <p className="p-4 ml-10">
        For business partnerships, visit our <span className="text-blue-500">forum</span>
      </p>
    </div>
  );
};

export default ContactUs;
