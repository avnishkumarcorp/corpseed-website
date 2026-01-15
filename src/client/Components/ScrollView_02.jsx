import React from "react";
import {responsibilityData} from "../../Data/TabsData";

const ScrollNavView_02 = () => {
  return (
    <div>
      <section
        id="responsibility"
        className="scroll-mt-24 px-4 sm:px-6 lg:px-16 py-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          {responsibilityData.title}
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          {/* Intro paragraphs */}
          {responsibilityData.intro.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Registration Entities */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>{responsibilityData.registrationEntities.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {responsibilityData.registrationEntities.list.map((item, idx) =>
                typeof item === "string" ? (
                  <li key={idx}>{item}</li>
                ) : (
                  <li key={idx}>
                    {item.category}
                    <ul className="list-disc pl-6">
                      {item.subList.map((sub, subIdx) => (
                        <li key={subIdx}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Who Needs EPR */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {responsibilityData.whoNeedsEPR.heading}
            </h2>
            {responsibilityData.whoNeedsEPR.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Certificate Responsibilities */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {responsibilityData.certificateResponsibilities.heading}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {responsibilityData.certificateResponsibilities.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollNavView_02;