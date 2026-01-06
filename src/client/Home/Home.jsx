import { IoCall } from "react-icons/io5";
import { useEffect, useState } from "react";
import LogoCarousel from "./Logo-Carousel";
import { cardData } from "../../data2";
import {data3} from "../../data3"
import { data } from "react-router-dom";
import VirtualMeetingSection from "./VirtualMetting";
import OurSupporters from "./OurSupporter";
import InTheNews from "./IntheNews";
import LatestArticlesCarousel from "./LatesteArticleCarousel"
import LatestProductsCarousel from "./LatestProductCarousel";

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
    const result = cardData.find((obj) => obj[activeTab]);
    setActiveTabData(result?.[activeTab] || []);
  }, [activeTab]);

  const handleNavigationData = (key, value) => {
    setActiveTab(key);
    setActiveTabData(value);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
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

        {/* RIGHT SERVICES */}
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
              <h3 className="text-center font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 mb-20">
        <LogoCarousel />
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* TABS */}
        <div className="flex gap-8 border-b border-gray-200 mb-10 overflow-x-auto">
          {cardData.map((item) =>
            Object.entries(item).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleNavigationData(key, value)}
                className={`pb-3 text-sm font-medium whitespace-nowrap transition
                  ${
                    activeTab === key
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                {key}
              </button>
            ))
          )}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeTabData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 p-6
                         hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-4">
                  {item.description}
                </p>
              </div>

              <p className="text-blue-600 text-sm font-medium mt-6 cursor-pointer">
                Explore more →
              </p>
            </div>
          ))}
        </div>
      </section>
{/* 
      <section >
        <div className="grid place-items-center">
          <button className="bg-blue-500 px-5 py-2 cursor-pointer">SEE ALL SERVICES</button>
        </div>

        <div className="bg-white">

          <h1 className="text-blue-500 text-3xl">A smarter platform for better<br/> results.</h1>

        <div>
          {
            data3.map((item,ind)=>(
              <div key={ind}>
                <img className="w-32 h-32 rounded-full" src={item.image}/>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            ))
          }

        </div>
        </div>

      </section> */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

  {/* LEFT CONTENT */}
  <div>
    <h1 className="text-blue-600 text-3xl md:text-4xl font-semibold mb-10">
      A smarter platform for better <br /> results.
    </h1>

    <div className="space-y-10">
      {data3.map((item, ind) => (
        <div key={ind} className="flex items-start gap-5">
          
          {/* ICON */}
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12"
          />

          {/* TEXT */}
          <div>
            <h2 className="text-lg font-semibold mb-1">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>

  <div className="flex justify-center">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAe1BMVEUAAAD////y8vKnp6dfX1/j4+P19fXd3d2ampqkpKT5+fnNzc2YmJiFhYX8/Py4uLjZ2dnq6urFxcV2dna+vr5CQkIlJSUrKyusrKweHh4PDw87OztLS0sXFxdZWVkwMDBnZ2d+fn6Li4tISEg1NTVmZmZbW1t5eXkTExNGFVzqAAAESklEQVR4nO3Y6XbiOBCAUZfBO3jDCSYhxISE5v2fcOS9DExPODM5MH2++wdbTgQuSaXFsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf6r1LLUzL1mOJX5k22mwUX+zKhzXS3a3V74P1M1X4oVOUenny7yu+On2in9UIlnp+0EkSVewlzjx/TIUv/+T10wifxE4Er3cWHkl9nC98SQNFkEqznNftHUlNxVnkv+rV/ivpbLvrrrG2vfBCfqgvIfOa3NxFOfG2uMwG64zu+1n29DtSg7irZuLlUQ3VvyTSjnrt89jm/XPorBv2J0E1i1Szx/6STJ806cU7YU3PFzJx00V/6QnWZ6VlDKOj7gJz1b9TRJurO/zxQr6136WmSpv+l0l1VAUjWPs3orsvCQuxutA3qw6DmPJk6y+X/nWDMtZ/64mPqN2VEbqy+dy/H7FP+rN9c9KdjIfb96bCLiJeu7ogR88q5uPi1nJNeEdYuKl6knU5KVwpops/S33tGvH+PpzGBFL3Zxte06GeqSy7MZRI2lxkRGKOhxDTOJSPSpdM0DXkz43idk97c1LzaNMJHb89vWCSUwyk1BeJz89CN/GmxfHXneXlyFZydYaY7KWhf7eui2OuktaiWs9htIx00FSbbfHUuxDXZJMEkzk1SN9q0r2slZ3Q1D8i5C8tDmjj8lBKvVwJ2ag/WozbWcxaYw7itIk/Gwv3524zg65p5/nWT07vKuS1eTOOjl23b8ue4mZhpuPPia7SWSf6i6yjHU6Wj5MTMQdMsJzs25KJ8O6jsnyLCa6ceueYgbTlZD0Y7CPSTWJyUG+TN+axOTjcWKyH2+a2fLGfmKC4rlXQjLkiuv95HDZTx4oJio7bOtkels+aYST9Nl4C/uZ9Xo+OT5yPrHVLGLVC/fpvOP8ft5p+JJl53Eqhhk7+N/NO4mrl+p1TJait76/X580fLPyH6fk1lKWu3ljV9hH82FdX5/8UkWPsz7R3XdTN+VOqrGkW8fqjbxztoGtQ2IS7SS2Vi5nTJmnE1W3jtVheph17JPOsSupp+VQ7XdmzUDS+51pWuhCYnjx3+wNhz3gQtSga7ternLX1yRr3ZWnflbUvHtwsS/We+diui/uQ2Jmn1BPIqNhbX9Sxwzdvngu1fjlj7MvXo2Haav2/U7j8U4i7Xouj/sRVk2nmEBFy3OnC5fOEBOrlH6TeOhPrVK3D+Red9h7S/rmW/QHPZXkb92j7o03/QnZ2XHYyVbZ98U532I3xpiY8VU1n19x3zk/3aw9Z/qQwnogvkgeBEU8dpgqrEtMnhya7j0VbxYk9vkvP+mb60e15ZiMTrk4ZVBmKrCvnqSmYlfKa/97Py+LIk3zyZhYmpJicgA3T9I0Ci6Wa/+s0hVvyyiNZpPDzspUnAfnax4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB/oL038L1osQXcfAAAAAElFTkSuQmCC"
  
      className="max-w-md w-full"
    />
  </div>

</section>

<VirtualMeetingSection/>
<OurSupporters/>
<InTheNews/>
<LatestArticlesCarousel/>
<LatestProductsCarousel/>

    </>
  );
};

export default HeroSection;
