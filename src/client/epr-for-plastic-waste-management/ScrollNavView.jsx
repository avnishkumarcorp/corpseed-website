import Faq from "../epr-for-plastic-waste-management/Faq";
import ScrollNavView_01 from "./ScrollNavView_01";
import ScrollNavView_02 from "./ScrollNavView_02";
import ScrollNavView_03 from "./ScrollNavView_03";
import ScrollNavView_04 from "./SCrollNavView_04";
import ScrollNavView_05 from "./ScrollNavView_05";
import  ErpOverview from "./ErpOverview"
import { useState } from "react";


const NAV_HEIGHT = "h-16"; // 64px

const ScrollNavView = () => {
  const [active, setActive] = useState("overview");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <div className={`sticky top-12 md:top-20 z-50 bg-white ${NAV_HEIGHT}px-22 mt-10`}>
        <ul className="flex items-center justify-start gap-8 px-15 h-full text-sm font-medium overflow-x-auto">
          <li onClick={() => { scrollToSection("overview"); setActive("overview"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "overview" ? "border-blue-600" : "border-gray-300"}`}>Overview</li>
          <li onClick={() => { scrollToSection("responsibility"); setActive("responsibility"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "responsibility" ? "border-blue-600" : "border-gray-300"}`}>Responsibility</li>
          <li onClick={() => { scrollToSection("guidelines"); setActive("guidelines"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "guidelines" ? "border-blue-600" : "border-gray-300"}`}>Guidelines</li>
          <li onClick={() => { scrollToSection("process"); setActive("process"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "process" ? "border-blue-600" : "border-gray-300"}`}>Process</li>
          <li onClick={() => { scrollToSection("documents"); setActive("documents"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "documents" ? "border-blue-600" : "border-gray-300"}`}>Documents</li>
          <li onClick={() => { scrollToSection("fees"); setActive("fees"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "fees" ? "border-blue-600" : "border-gray-300"}`}>Fees</li>
          <li onClick={() => { scrollToSection("faq"); setActive("faq"); }} className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 ${active === "faq" ? "border-blue-600" : "border-gray-300"}`}>FAQ</li>
        </ul>
      </div>
      <div className="px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            <ScrollNavView_01 />
            <ScrollNavView_02 />
            <ScrollNavView_03 />
            <ScrollNavView_04 />
            <ScrollNavView_05 />
            <section id="faq" className="px-4 sm:px-6 lg:px-16 py-10">
        <Faq />
      </section>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <ErpOverview />
            </div>
          </div>

        </div>
      </div>
     
     
    </>
  );
};

export default ScrollNavView;
