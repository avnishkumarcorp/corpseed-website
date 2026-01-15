
import React from "react";
import {stepsData} from "../../Data/TabsData";

const ScrollNavView_05 = () => {
  return (
    <div>
      <section
        id="documents"
        className="px-4 sm:px-6 lg:px-16 py-10"
      >
        <div className="space-y-6 max-w-4xl">
          {stepsData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-sm hover:border-blue-500 transition-colors duration-300"
            >
              <p className="text-blue-600 font-semibold mb-2">{item.step}</p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ScrollNavView_05;
