import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import ScrollNav from "./ScrollNavView";
import { FaStar } from "react-icons/fa";
import Form from "../Components/form/Form"
const EPRForPlasticWasteManagement = () => {
 

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 items-start py-6 px-5 justify-around">

        {/* LEFT CONTENT */}
        <div className="lg:w-2/4 space-y-6">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
            INCLUDES FREE SUPPORT
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-blue-600">EPR For</span> Plastic Waste
            <br/>Management
          </h1>

          <p className="text-xl text-gray-600 ">
            EPR for Plastic Waste Management is the mandatory registration for
            PIBOs with the Central and State Pollution Control Boards as per the
            scope of their operations. This ensures fulfillment of EPR
            obligations and compliance with CPCB guidelines.
          </p>

          {/* STATS */}

          <div className="flex flex-wrap gap-10 pt-6">
            <div>
              <p className="text-blue-600 font-bold text-2xl">10000+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>

            <div>
              <p className="text-blue-600 font-bold text-2xl">500+</p>
              <p className="text-gray-500 text-sm">CA, CS & Lawyers</p>
            </div>

            <div>
              <p className="text-blue-600 font-bold text-2xl">7+</p>
              <p className="text-gray-500 text-sm">Offices</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-2 pt-4">
            <FaStar className="text-yellow-500 text-xl" />Rated <strong>4.9</strong> Stars by{" "}
            <strong>69,232+</strong> customers globally
          </p>
        </div>

        {/* RIGHT FORM (SMALL & RIGHT-ALIGNED) */}
        <Form/>

      </div>


      <ScrollNav />
    </div>
  );
};

export default EPRForPlasticWasteManagement;
