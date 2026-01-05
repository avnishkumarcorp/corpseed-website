import Faq from "../epr-for-plastic-waste-management/Faq";
import ScrollNavView_01 from "./ScrollNavView_01";
import ScrollNavView_02 from "./ScrollNavView_02";
import ScrollNavView_04 from "./SCrollNavView_04";
import ScrollNavView_05 from "./ScrollNavView_05";
import ScrollNavView_03 from "./ScrollNavView_03";
const ScrollNav = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <ul className="flex gap-8 px-6 py-4 text-sm font-medium overflow-x-auto">
        <li
          onClick={() => scrollToSection("overview")}
          className="cursor-pointer hover:text-blue-600"
        >
          Overview
        </li>
        <li
          onClick={() => scrollToSection("responsibility")}
          className="cursor-pointer hover:text-blue-600"
        >
          Responsibility
        </li>
        <li
          onClick={() => scrollToSection("guidelines")}
          className="cursor-pointer hover:text-blue-600"
        >
          Guidelines
        </li>
        <li
          onClick={() => scrollToSection("process")}
          className="cursor-pointer hover:text-blue-600"
        >
          Process
        </li>
        <li
          onClick={() => scrollToSection("documents")}
          className="cursor-pointer hover:text-blue-600"
        >
          Documents
        </li>
        <li
          onClick={() => scrollToSection("fees")}
          className="cursor-pointer hover:text-blue-600"
        >
          Fees
        </li>
        <li
          onClick={() => scrollToSection("faq")}
          className="cursor-pointer hover:text-blue-600"
        >
          FAQ
        </li>
      </ul>
      <ScrollNavView_01 />
      <ScrollNavView_02 />
      <ScrollNavView_03/>
      <ScrollNavView_04/>
      <ScrollNavView_05/>
      <Faq />
    </div>
  );
};

export default ScrollNav;
// https://www.corpseed.com/service/epr-for-plastic-waste-management
