import React, { useState } from "react";
import corpseed from "../../assets/corpseed.jpg";
import { FaPlay } from "react-icons/fa";
import advantagesImage from "../../assets/Advantages_of_an_EPR_Registration_for_EPR_Waste_Management_Corpseed.webp";
import {overviewData} from "../../Data/TabsData";

const ScrollNavView_01 = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <section id="overview" className="scroll-mt-24 px-4 lg:px-16 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          {overviewData.title}
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          {overviewData.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* VIDEO SECTION */}
          <section className="max-w-7xl mx-auto md:px-6 py-20">
            <div className="border-2 border-blue-500 rounded-lg py-10 px-3 text-center">
              {!playVideo ? (
                <>
                  <div className="flex justify-center mb-4">
                    <img src={corpseed} alt={overviewData.video.logoAlt} className="h-20" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
                    {overviewData.video.heading}
                  </h1>
                  <div className="flex justify-center">
                    <button
                      onClick={() => setPlayVideo(true)}
                      className="w-14 h-14 rounded-full bg-gray-300 shadow-lg flex items-center justify-center hover:scale-105 transition"
                    >
                      <FaPlay className="text-gray-700 ml-1" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={overviewData.video.youtubeUrl}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* ADVANTAGES SECTION */}
        <div className="mt-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Advantages of an EPR Registration for EPR Waste Management
          </h3>
          <ul className="space-y-5 text-gray-700">
            {overviewData.advantages.map((adv, idx) => (
              <li key={idx} className="flex gap-3">
                <p>
                  <strong>{adv.title}: </strong>
                  {adv.description}
                </p>
              </li>
            ))}
          </ul>
          <img src={advantagesImage} alt="Advantages of EPR Registration" />

          <h3 className="text-xl md:text-2xl font-semibold mb-6 mt-8">
            Extended Producer Responsibility (EPR) applies to the following plastic packaging categories:
          </h3>
          {overviewData.categories.map((cat, idx) => (
            <p key={idx}>
              <strong>{cat.title}: </strong>
              {cat.description}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ScrollNavView_01;