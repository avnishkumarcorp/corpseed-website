import { useState } from "react";

const supportersData = {
  Investor: {
    logo: "/corpseed-logo.png", // replace with your logo
    description:
      "We are a bootstrap organization based on the direct support of our clients themselves. It enables us to independently make decisions for the welfare of our clients and provide quality service at affordable rates. Our self-reliance and financial discipline promote efficiency and stimulate creativity.",
  },
  Management: {
    logo: "/corpseed-logo.png",
    description:
      "Our management team brings years of expertise in compliance, legal services, and strategic planning to ensure sustainable growth and customer satisfaction.",
  },
  Members: {
    logo: "/corpseed-logo.png",
    description:
      "Our members are industry professionals committed to delivering high-quality services while maintaining transparency and integrity.",
  },
};

const OurSupporters = () => {
  const [activeTab, setActiveTab] = useState("Investor");

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-10">
          Our Supporters
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* LEFT TABS */}
          <div className="space-y-2">
            {Object.keys(supportersData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-6 py-3 rounded-md text-sm font-medium transition
                  ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "text-black hover:bg-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-3 bg-gray-100 flex flex-col items-center text-center px-6">
            
            <img
              src={supportersData[activeTab].logo}
              alt={activeTab}
              className="w-32 mb-6"
            />

            <p className="text-gray-700 max-w-2xl leading-relaxed">
              {supportersData[activeTab].description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurSupporters;
