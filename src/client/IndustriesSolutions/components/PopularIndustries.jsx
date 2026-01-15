import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const PopularIndustries = ({ title, cards }) => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-14">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        {title}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[#25356f] text-white rounded-xl p-6 flex flex-col justify-between min-h-50 hover:scale-[1.02] transition"
          >
            <div>
              <h3 className="text-lg font-semibold mb-3">
                {item.heading}
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                {item.description}
              </p>
            </div>

            <button className="flex items-center gap-2 text-sm font-medium mt-6 hover:gap-3 transition">
              KNOW MORE <IoArrowForwardOutline />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularIndustries;
