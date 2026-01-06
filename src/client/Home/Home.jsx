import { IoCall } from "react-icons/io5";
import LogoCarousel from "./Logo-Carousel";
import { cardData } from "../../data2";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Industry Setup Solution",
    desc: "Bio-fuels / Medical / Electronics Waste Management / Renewable",
    img: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
  },
  {
    title: "Sustainability",
    desc: "ESG / ESDD / ESMS / Net Zero Waste / Carbon Credits",
    img: "https://cdn-icons-png.flaticon.com/512/4275/4275677.png",
  },
  {
    title: "Regulatory Compliance",
    desc: "Factory / Fire / Trade FSSAI / CGWA / Labour & Other Compliance",
    img: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
  },
  {
    title: "Environmental",
    desc: "EPR / EIA / CTO / CTE EC / BMW / PWM / EWM / HWM / FSC / Wildlife",
    img: "https://cdn-icons-png.flaticon.com/512/4149/4149641.png",
  },
  {
    title: "Import Export",
    desc: "IEC / DGFT / CHA CDSCO / BIS / LMPC EPR / Custom Clearance",
    img: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
  },
  {
    title: "Product Compliance",
    desc: "ISI / BIS / ISO / BEE / FDA / Meity CDSCO / TEC / WPC / OSP",
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Recycling Plant");
  const [activeTabData, setActiveTabData] = useState([]);

  useEffect(() => {
    const result = cardData?.find((obj) => obj[activeTab]);
    setActiveTabData(result[activeTab]);
  }, [cardData,activeTab]);

  const handleNavigationData = (key, value) => {
    setActiveTab(key);
    setActiveTabData(value);
  };

  return (
    <>
      {/* HERO CONTENT (CONSTRAINED) */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm mb-6">
            ● CALL FOR FREE CONSULTATION <IoCall />
          </button>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Tailored Solutions <br /> For Your Business
          </h1>

          <p className="text-blue-600 font-medium mb-2">
            Regulatory, Sustainability, Environmental, Legal & Plant Setup
            Compliance
          </p>

          <p className="text-gray-600 mb-6">
            Advisory Platform For Individuals, SME & Enterprise.
          </p>

          <div className="flex items-center gap-2 text-sm">
            ⭐ <span className="font-semibold">4.9 stars</span>
            <span className="text-gray-500">
              ratings by 15000+ Customers like you
            </span>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-3"
              />
              <h3 className="text-center font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* FULL WIDTH CAROUSEL */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 mb-20">
        <LogoCarousel />
      </div>
      <section>
        <div className="flex items-center gap-1.5">
          {cardData?.map((item, idx) => {
            return Object.entries(item)?.map(([key, value]) => {
              return (
                <p onClick={() => handleNavigationData(key, value)}>
                  {key}
                </p>
                
              );
            });
          })}
        </div>

        <div className="flex items-center gap-2.5">
          {activeTabData?.length > 0 &&
            activeTabData?.map((item) => {
              return (
                <div>
                  <h2>{item?.title}</h2>
                  <p>{item?.description}</p>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
