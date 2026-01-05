import Faq from "../epr-for-plastic-waste-management/Faq";
import ScrollNavView_01 from "./ScrollNavView_01";
import ScrollNavView_02 from "./ScrollNavView_02";
import ScrollNavView_03 from "./ScrollNavView_03";
import ScrollNavView_04 from "./SCrollNavView_04";
import ScrollNavView_05 from "./ScrollNavView_05";
import  ErpOverview from "./ErpOverview"


const NAV_HEIGHT = "h-16"; // 64px

const ScrollNavView = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <div className={`sticky top-0 z-50 bg-white ${NAV_HEIGHT}`}>
        <ul className="flex items-center gap-8 px-6 h-full text-sm font-medium overflow-x-auto">
          <li onClick={() => scrollToSection("overview")} className="cursor-pointer hover:text-blue-600">Overview</li>
          <li onClick={() => scrollToSection("responsibility")} className="cursor-pointer hover:text-blue-600">Responsibility</li>
          <li onClick={() => scrollToSection("guidelines")} className="cursor-pointer hover:text-blue-600">Guidelines</li>
          <li onClick={() => scrollToSection("process")} className="cursor-pointer hover:text-blue-600">Process</li>
          <li onClick={() => scrollToSection("documents")} className="cursor-pointer hover:text-blue-600">Documents</li>
          <li onClick={() => scrollToSection("fees")} className="cursor-pointer hover:text-blue-600">Fees</li>
          <li onClick={() => scrollToSection("faq")} className="cursor-pointer hover:text-blue-600">FAQ</li>
        </ul>
      </div>

      <div className="h-16" />

      <div className="px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            <ScrollNavView_01 />
            <ScrollNavView_02 />
            <ScrollNavView_03 />
            <ScrollNavView_04 />
            <ScrollNavView_05 />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <ErpOverview />
            </div>
          </div>

        </div>
      </div>
     
      <section id="faq" className="px-4 sm:px-6 lg:px-16 py-10">
        <Faq />
      </section>
    </>
  );
};

export default ScrollNavView;
