import React from 'react'
import IndustriesSolution01 from "./components/IndustriesSolution01";
import LogoCarousel from "../home/Logo-Carousel";
import IndustriesSolution02 from "./components/IndustriesSolution02";
import IndustriesSolution03 from "./components/IndustriesSolution03";
const AutoMobile2 = () => {
  return (
    <div>
        <IndustriesSolution01  type="automobile"/> 
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 mb-20">
          <LogoCarousel />
        </div> 
        <IndustriesSolution02/>
        <IndustriesSolution03/>
       
    </div>
  )
}

export default AutoMobile2
