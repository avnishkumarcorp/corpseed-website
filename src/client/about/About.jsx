import React from "react";
import HeadingofPage from "./HeadingofPage";

const About = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-stretch p-6 max-w-7xl mx-auto gap-6">
        {/* Left Column - Text */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Our values define who we are & what we stand for
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            The journey of Corpseed started with a simple thought: why do
            companies fail even after having a great idea, good execution plan,
            and cash flow. Why investors are worried about investing in Indian
            startups and mid-sized businesses. Few of the key challenges are
            changing regulatory framework, evolving environment and social
            governance, acquiring government permissions and clearances and
            compliant with internal audits etc. It seems like a pretty simple
            concept — you comply with the rules and survive, but it’s not an
            easy journey for a company to know the right set of legal and
            regulatory requirements. To manage these hurdles we came up with a
            concept of listing compliance requirements for products and services
            at one place with an AI driven model, wherein management and other
            stakeholders can have direct access to all compliance activities
            within their organization to fill the gaps?
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2 flex-shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
            alt="about-us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl p-6">
        <div className="flex flex-col md:flex-row items-stretch gap-6 bg-white shadow-lg rounded-lg overflow-hidden border border-blue-500 p-5">
          <div className="bg-blue-500 text-white flex-1 flex items-center p-6 rounded-sm">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed text-left ">
              Our Mission
              <br /> Simplify Business
              <br /> Compliance
            </p>
          </div>

          <div className="flex-1 flex items-center p-6 text-gray-700">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              Our AI-driven model and robust processes simplify business
              compliance whilst protecting the confidentiality and privacy of
              our customers. This enables them to save time and money. We focus
              on making compliance easy, transparent, and efficient for every
              organization.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl p-6">
        <div className="flex flex-col md:flex-row items-stretch gap-6 bg-white shadow-lg rounded-lg overflow-hidden border border-blue-500 p-5">
          

          <div className="flex-1 flex items-center p-6 text-gray-700">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed p-2">
              By focusing on reducing our customers compliance cost, we will achieve & sustain a positive growth and profitability.  
            </p>

            <div className="bg-blue-500 text-white flex-1 flex items-center p-6 rounded-sm">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed text-left ">
              <h2>Our Vision</h2>
              <br /> Reducing
              <br />  compliance cost 
            </p>
          </div>
          </div>
        </div>
      </section>
     <section className="mx-auto max-w-7xl p-6">
  <div className="flex flex-col md:flex-row items-stretch gap-6 bg-white shadow-lg rounded-lg border border-blue-500 overflow-hidden">

    
    <div className="bg-blue-500 text-white flex-1 flex items-center p-6 rounded-sm">
      <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed text-left">
        Our Values
        <br /> Integrity,
        <br /> Responsibility,
        <br /> Accountability &
        <br /> Continuous Improvement
      </p>
    </div>

  
    <div className="flex-1 flex flex-col justify-center p-6 text-gray-700 gap-4">
      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        <b>Integrity</b> - We believe that nothing is more important than our
        stakeholder’s reputation, growth, and confidentiality. Behaving with the highest levels of
        integrity is fundamental to who we are. We demonstrate a strong commitment to sustainable,
        transparent & responsible business practices. Adhere to the highest professional standards and
        credibility. We do what is right.
      </p>

      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        <b>Responsibility & Accountability</b> - We at Corpseed are personally accountable and jointly
        responsible for the transparency, security, and on-time delivery of quality services to avoid
        non-compliance losses for our clients.
      </p>

      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        <b>
          Caring & Development
        </b>
        Our caring approach complements our agility and speed. We make the
        effort to understand every stakeholder and what matters to them. We also recognize the value
        that each person contributes and support others to grow and work in the ways that bring out
                    their best. We treat each other with respect, our motto is to create an environment in which
                    people are proud and happy to work
      </p>
      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        <b>
          Continuos & development-
        </b>
       We never stop larning and improving.
      </p>
    </div>

  </div>
     </section>

     <HeadingofPage />

    </>
  );
};

export default About;
