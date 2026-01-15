// import heroImg from "../assets/Auto_Components_Industry_in_India_Corpseed.webp";
// import heroImg2 from "../assets/Automobile_industry_in_corpseed.webp";

// // HERO BANNER DATA //
// //this is my js data which is comming from src/Data/TabsData ok and then this data i am passing in IndustriesSolution01.jsx the rntire code is given blow 
// export const heroData = {
//   industries: {
//     image: heroImg,
//     badgeText: "INCLUDES FREE SUPPORT",
//     title: "Industries Solution",
//     description:
//       "The automotive sector in India plays a significant role in the nation’s manufacturing economy.",
//   },
//   automobile: {
//     image: heroImg2,
//     badgeText: "24x7 Assistance",
//     title: "Healthcare Solution",
//     description:
//       "Healthcare industry in India is growing rapidly with digital transformation.",
//   },
// };
// // import React from "react";
// import { FaStar } from "react-icons/fa";

// import AnimImg from "../../../assets/Epr_Authorization_Ewaste_corpseed (1).webp";
// import Form from "../../Components/form/Form";
// import HeroSection from "../../Components/HeroSection";
// import { heroData } from  '../../../Data/TabsData'

// const IndustriesSolution01 = () => {
//   return (
//     <>
//       {/* HERO */}

//       <HeroSection //here is data recieving and passing to the hero section now i am giving you her section code 
//         image={heroData.industries.image}
//         badgeText={heroData.industries.badgeText}
//         title={heroData.industries.title}
//         description={heroData.industries.description}
//       />
//       {/* MAIN SECTION */}
//       <section className=" px-6 md:px-12 lg:px-20 py-5">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          
//           {/* LEFT SIDE */}
//           <div className="space-y-8 ">
//             <img src={AnimImg} className="w-full max-w-3xl" />

//             <div className="flex gap-10">
//               <div>
//                 <p className="text-blue-500 text-2xl lg:text-4xl font-bold">10000+</p>
//                 <p className="text-gray-500 text-sm lg:text-lg">Happy Customers</p>
//               </div>

//               <div>
//                 <p className="text-blue-500 text-2xl lg:text-4xl font-bold">500+</p>
//                 <p className="text-gray-500 text-sm lg:text-lg">CA, CS & Lawyers</p>
//               </div>

//               <div>
//                 <p className="text-blue-500 text-2xl lg:text-4xl font-bold">7+</p>
//                 <p className="text-gray-500 text-sm lg:text-lg">Offices</p>
//               </div>
//             </div>

//             <p className="flex items-center gap-2 text-sm lg:text-lg text-gray-600">
//               <FaStar className="text-yellow-400 text-lg" />
//               Rated <strong>4.9</strong> Stars by <strong>69,232+</strong> customers
//             </p>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex justify-end relative">
//             <Form />
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default IndustriesSolution01;


// import React from 'react'
// const HeroSection = ({ image, badgeText, title, description, }) => {
//    return ( 
//     <section className="relative w-full h-96 overflow-hidden"> 
//    <img src={image} className="w-full h-full object-cover" />
//   <div className="absolute inset-0 bg-black/60"></div>

//   <div className="absolute inset-0 flex flex-col gap-4 justify-center px-6 md:px-12 lg:px-20">
//     {badgeText && (
//       <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded w-fit">
//         {badgeText}
//       </span>
//     )}

//     <h1 className="text-3xl md:text-5xl font-bold text-white">
//       {title}
//     </h1>

//     {description && (
//       <p className="max-w-xl text-white text-sm">
//         {description}
//       </p>
//     )}
//   </div>
//     </section>
//    )
//   }
// export default HeroSection
// import React from "react";
// import IndustriesSolution01 from "./components/IndustriesSolution01";
// import LogoCarousel from "../home/Logo-Carousel";
// import IndustriesSolution02 from "./components/IndustriesSolution02";
// import IndustriesSolution03 from "./components/IndustriesSolution03";


// const IndustriesSolution = () => {
//   return (
//     <>
//         <IndustriesSolution01 type="industries"/>  yhn yeh component use hora h but yh same data dusre page mai bhi jara hai uske mai kese alg data show krwaun 
//         <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 mb-20">
//           <LogoCarousel />
//         </div>
//         <IndustriesSolution02/> 
//         <IndustriesSolution03/>
//     </>
//   );
// };

// export default IndustriesSolution;
// ////////////////////////////////
// import React from "react";
// import IndustriesSolution01 from "./components/IndustriesSolution01";
// import LogoCarousel from "../home/Logo-Carousel";
// import IndustriesSolution02 from "./components/IndustriesSolution02";
// import IndustriesSolution03 from "./components/IndustriesSolution03";


// const IndustriesSolution = () => {
//   return (
//     <>
//         <IndustriesSolution01 type="industries"/>  yeh same data reflect krra hai pr mujhe koi or data dikhana hai 
        
//         <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 mb-20">
//           <LogoCarousel />
//         </div>
//         <IndustriesSolution02/> 
//         <IndustriesSolution03/>
//     </>
//   );
// };

// export default IndustriesSolution; 
