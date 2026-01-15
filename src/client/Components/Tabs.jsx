
import Faq from "../epr-for-plastic-waste-management/Faq";
import ScrollNavView_01 from "./ScrollView_01";
import ScrollNavView_02 from "./ScrollView_02";
import ScrollNavView_03 from "./ScrollView_03";
import ScrollNavView_04 from "./ScrollView_04";
import ScrollNavView_05 from "./ScrollView_05";
import ErpOverview from "../epr-for-plastic-waste-management/ErpOverview";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const NAV_HEIGHT = "h-16"; // Tailwind class, not px

const Tabs = () => {
  const [active, setActive] = useState("overview");
  const tabsRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Scroll tabs left/right by container width (smooth)
  const scrollTabs = (direction) => {
    const el = tabsRef.current;
    if (!el) return;

    const amount = Math.floor(el.clientWidth * 0.8); // 80% width scroll
    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <div className={` overflow-hidden sticky top-12 md:top-20 z-50 bg-white ${NAV_HEIGHT} mt-10 ml-4`}>
        {/* Left button */}
        <button
          type="button"
          onClick={() => scrollTabs("left")}
          className=" no-scrollbar absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-1 z-10 hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button> 

        {/* Scrollable tabs */}
        <div
          ref={tabsRef}
          className=" overflow-x-auto whitespace-nowrap ml-10 md:w-6/12 scroll-smooth "
        >

          <ul className="flex items-center text-black-600 md:w-5/12 gap-12 px-12 h-16 text-meduim font-medium ">
            <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
             <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
             <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
             <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
             <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
             <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
             <li
              onClick={() => { scrollToSection("overview"); setActive("overview"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "overview" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Overview
            </li>
            <li
              onClick={() => { scrollToSection("responsibility"); setActive("responsibility"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "responsibility" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Responsibility
            </li>

            <li
              onClick={() => { scrollToSection("guidelines"); setActive("guidelines"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "guidelines" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Guidelines
            </li>

            <li
              onClick={() => { scrollToSection("documents"); setActive("documents"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "documents" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Documents
            </li>

            <li
              onClick={() => { scrollToSection("fees"); setActive("fees"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "fees" ? "border-blue-600" : "border-transparent"
              }`}
            >
              Fees
            </li>

            <li
              onClick={() => { scrollToSection("faq"); setActive("faq"); }}
              className={`cursor-pointer hover:text-blue-600 border-b-2 pb-2 shrink-0 ${
                active === "faq" ? "border-blue-600" : "border-transparent"
              }`}
            >
              FAQ
            </li>
          </ul>
        </div>

        {/* Right button */}
        <button
          type="button"
          onClick={() => scrollTabs("right")}
          className=" no-scrollbar absolute right-2 md:right-70 lg:right-150 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
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

export default Tabs;

