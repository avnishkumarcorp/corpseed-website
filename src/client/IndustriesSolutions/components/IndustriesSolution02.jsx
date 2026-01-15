import React from "react";
import PopularIndustries from "./PopularIndustries"

const industriesData = [
  {
    heading: "Recycling & Waste Management",
    description:
      "Recycling is an essential part of waste management. It helps conserve natural resources and reduce landfill waste.",
  },
  {
    heading: "Trading Business",
    description:
      "Trade reflects the value of services exchanged between domestic and foreign economic members.",
  },
  {
    heading: "Chemicals",
    description:
      "Asia is emerging as a global hub for chemical manufacturing with massive future potential.",
  },
];

const IndustriesSolution02 = () => {
  return (
    <>
      <PopularIndustries
        title="Popular Industries"
        cards={industriesData}
      />
    </>
  );
};

export default IndustriesSolution02;
