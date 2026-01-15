import React from "react";
import { FaStar } from "react-icons/fa";

import AnimImg from "../../../assets/Epr_Authorization_Ewaste_corpseed (1).webp";
import Form from "../../Components/form/Form";
import HeroSection from "../../Components/HeroSection";
import { heroData } from  '../../../Data/TabsData'

const IndustriesSolution01 = ({ type = "industries" }) => {
  const hero = heroData[type]; 
  if (!hero) return null
  return (
    <>
      {/* HERO */}

     <HeroSection
        image={hero.image}
        badgeText={hero.badgeText}
        title={hero.title}
        description={hero.description}
      />
      {/* MAIN SECTION */}
      <section className=" px-6 md:px-12 lg:px-20 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-8 ">
            <img src={AnimImg} className="w-full max-w-3xl" />

            <div className="flex gap-10">
              <div>
                <p className="text-blue-500 text-2xl lg:text-4xl font-bold">10000+</p>
                <p className="text-gray-500 text-sm lg:text-lg">Happy Customers</p>
              </div>

              <div>
                <p className="text-blue-500 text-2xl lg:text-4xl font-bold">500+</p>
                <p className="text-gray-500 text-sm lg:text-lg">CA, CS & Lawyers</p>
              </div>

              <div>
                <p className="text-blue-500 text-2xl lg:text-4xl font-bold">7+</p>
                <p className="text-gray-500 text-sm lg:text-lg">Offices</p>
              </div>
            </div>

            <p className="flex items-center gap-2 text-sm lg:text-lg text-gray-600">
              <FaStar className="text-yellow-400 text-lg" />
              Rated <strong>4.9</strong> Stars by <strong>69,232+</strong> customers
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-end relative">
            <Form />
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesSolution01;
