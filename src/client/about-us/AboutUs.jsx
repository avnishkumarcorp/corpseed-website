import React from "react";
import { FileText, MessageCircle, Shield } from "lucide-react";


const AboutUs = () => {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative w-full h-96 md:h-125 lg:h-175 overflow-hidden">
        <img
          src='https://www.corpseed.com/assets/images/begin-from.webp'
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
         {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center sm:pl-6 md:pl-12 lg:pl-16">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg pt-16 sm:pt-20 px-4 sm:px-8">
            About Us
          </h1>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
              Our Story
            </h2>
            <p className="text-[#333333] text-lg md:text-xl leading-relaxed max-w-4xl">
              At Corpseed, we believe in simplifying business compliance through innovative AI-driven solutions.
              Our platform helps organizations navigate complex regulatory requirements with ease and confidence.
              Our platform helps organizations navigate complex regulatory requirements with ease and confidence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Section 3*/}
      <section className="relative w-full h-100 md:h-137.5 lg:h-175 overflow-hidden">
        {/* Background Image */}
      <img
        src='https://www.corpseed.com/assets/images/ceo.webp'
        alt="CEO Letter Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

       {/* Content */}
        <div className="relative z-10 h-full flex items-center">
    <div className="max-w-3xl px-6 sm:px-10 lg:px-16 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        A letter from our <br /> CEO
      </h1>

      <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90">
        Read about how the Corpseed team is committed to empowering startups, SMEs, and enterprises through technology-driven compliance solutions. Our mission is to simplify complex regulatory processes and enable businesses to move forward with confidence, transparency, and trust—every step of the way.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-500  text-white rounded-lg font-medium hover:bg-gray-900 transition">
        Read CEO letter
      </button>
    </div>
        </div>
      </section>
      {/* Section 4*/}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-10">

        {/* Right Blue Block */}
        <div className="w-full md:w-[45%] h-62.5 md:h-87.5  bg-blue-100 rounded-lg flex items-center justify-center p-10">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6K2VXY9f58PTYSFtu3_xPykBnZ_XIYI-WA&s'
            alt="Our Mission"
            className="w-full lg:w-[60%] h-full object-cover rounded-lg"
          />
        </div>

          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center">
      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        Who We Are
      </h3>

      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
        Through helping Indian startups & businesses mitigate regulatory compliance risks through robust processes and AI-driven proprietary technology, we simplify business compliance whilst protecting the confidentiality and privacy of our customers. This enables our clients to save time and money, which can drive positive, sustainable change for our clients, our people and society at large.
      </p>

      <a
        href="#"
        className="mt-6 inline-block text-black font-medium underline underline-offset-4 w-fit"
      >
        
      </a>
          </div>

        </div>
      </section>
      {/* Section 5 */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-10">

        {/* Right Blue Block */}
        <div className="w-full md:w-[45%] h-62.5 md:h-87.5  bg-blue-100 rounded-lg flex items-center justify-center p-10">
          <img
            src='https://www.corpseed.com/assets/img/Designs/Sustainability-02.png'
            alt="Our Mission"
            className="w-full lg:w-[60%] h-full object-cover rounded-lg"
          />
        </div>

          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center">
      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        What We Stand For
      </h3>

      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
       At Corpseed, we encourage and empower change in all we do. Every single day, we challenge ourselves to bring our absolute best to clients, to the public and to one another. We set ourselves apart through our affection and pride, our expertise and our eagerness, our inclusive culture and our focus on developing the leaders of tomorrow.
      </p>

      <a
        href="#"
        className="mt-6 inline-block text-black font-medium underline underline-offset-4 w-fit"
      >
      
      </a>
          </div>

        </div>
      </section>
      
     {/*section 6 */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-stretch gap-10">
        <div className="w-full md:w-[35%] min-h-75  flex-1 bg-blue-500 rounded-lg flex items-center justify-start p-10">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Our Mission <br />
            Simplify Business <br />
            Compliance
          </h2>
        </div>

        {/* Right Content */}
        <div className=" flex-1 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        Our Mission
          </h3>

          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
        At Corpseed, our mission is to simplify business compliance through technology-driven solutions. We aim to empower startups, SMEs, and enterprises by making regulatory processes transparent, efficient, and accessible—so businesses can focus on growth while we handle compliance.
          </p>

        </div>

      </div>
      </section>
      {/* Section 7 */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-stretch gap-10">
    
        {/* Left Blue Block  */}
        <div className="w-full md:w-[35%] min-h-75  flex-1 bg-blue-500 rounded-lg flex items-center justify-start p-10">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Our Vision <br />
            Simplify Business <br />
            Compliance
          </h2>
        </div>

        {/* Right Content */}
        <div className=" flex-1 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        Our Vision
          </h3>
          <p>Our vision is to become the most trusted technology-driven compliance partner for businesses worldwide. We aim to simplify complex regulatory processes, enable sustainable growth, and empower startups, SMEs, and enterprises to operate with confidence in an ever-evolving regulatory landscape.
      
          </p>
        </div>

      </div>
      </section>
   
      {/* Section 8 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <h2 className="text:2xl md:text-5xl text-center font-semibold mb-10">Where We Begin From</h2>

          {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
          {/* Left Card */}
          <div>
          <img
           
            src='https://www.corpseed.com/assets/images/begin-from.webp'alt="Uber leadership"
            className="w-full h-62.5 md:h-87.5 object-cover  mb-4"
          />

          <h3 className="text-xl font-semibold mb-2">
          A Startup in 2017
          </h3>

          <p className="text-gray-600 text-lg mb-4">
            A small team working out of a modest space in Delhi began its journey with big ambitions. We started by offering services such as startup business planning for funding, company incorporation, and intellectual property solutions. In our very first year, our services were trusted and appreciated by over 9,000 businesses.
          </p>

          <a
            href="#"
            className="text-black underline text-sm font-medium"
          >
            See our leadership
          </a>
          </div>

         {/* Right Card */}
          <div>
          <img
            src='https://www.corpseed.com/assets/images/ceo.webp' alt="Integrity"
            className="w-full h-62.5 md:h-87.5 object-cover  mb-4"
          />

          <h3 className="text-xl font-semibold mb-2">
            From CEO Desk
          </h3>

          <p className="text-gray-600 text-lg mb-4">
           At Corpseed, our purpose is to build a stronger compliance ecosystem, inspire confidence, and empower positive change in your business. The insights and quality-driven services we deliver help build trust and confidence in managing regulatory compliance effectively.
          </p>

          <a
            href="#"
            className="text-black underline text-sm font-medium"
          >
            Learn more
          </a>
          </div>

        </div>
      </section>
      {/* section 9 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-semibold mb-12">
        Resources to Help You Succeed
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Licensing & Registration */}
        <div>
          <FileText className="w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2 ">Licensing & Registration</h3>
          <p className="text-gray-600 text-base mb-4">
            Get expert assistance with business licensing, company registration, and all compliance documentation.
          </p>
         
        </div>

        {/* Compliance Consulting */}
        <div>
          <MessageCircle className="w-10 h-10 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">Compliance Consulting</h3>
          <p className="text-gray-600 text-base mb-4">
            Get personalized compliance advice and expert guidance to navigate regulatory requirements effectively.
          </p>
        
        </div>

        {/* Compliance Resources */}
        <div>
          <Shield className="w-10 h-10 mb-4 " />
          <h3 className="text-xl font-semibold mb-2">
            Compliance Resources
          </h3>
          <p className="text-gray-600 text-base mb-4">
            Access guides, checklists, and tools to simplify your compliance journey and ensure regulatory adherence.
          </p>
       
        </div>
      </div>
      </section>
      {/* section 10 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Join Our Compliance <br /> Experts Team
          </h2>

          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            View Career Opportunities
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src='https://www.corpseed.com/assets/img/Designs/Environmental_main_image-03.png'
            alt="Reimagine"
            className="w-55 md:w-112.5"
          />
        </div>
      </div>
      </section>
     
    </>
  );
};
export default AboutUs;