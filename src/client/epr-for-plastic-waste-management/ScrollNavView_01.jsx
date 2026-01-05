import React from 'react'
import corpseed from "../../assets/corpseed.jpg";


const ScrollNavView_01 = () => {
  return (
    <div>
      <section
        id="overview"
        className="scroll-mt-24 px-4 sm:px-6 lg:px-16 py-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          An Overview of EPR for Plastic Waste Management
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Extended Producer Responsibility (EPR) is the term used to describe
            the practice of transferring end-of-life management of products and
            materials to the makers of those goods. i.e. the producer. The
            Guidelines offer a framework to improve the cycle economy of plastic
            packaging waste, encourage the creation of novel plastic
            substitutes, and outline further steps firms can take to transition
            to sustainable plastic packaging. In order to limit the use of new
            plastic material for packaging, the standards require the reuse of
            rigid plastic packaging materials. The Guidelines outline a
            framework for collecting environmental compensation based on the
            polluter pays principle from producers, importers, and brand owners
            who fail to meet extended producer responsibility targets in order
            to safeguard the environment, improve its quality, and stop,
            control, and mitigate environmental pollution. The cash raised must
            be used for the environmentally responsible collection, recycling,
            and end-of-life disposal of uncollected plastic garbage.
          </p>

          <p>
            India is believed to generate 25,00 tons of plastic waste every day.
            So much so that plastic is entering the food chain. This can alter
            human hormones and cause life-threatening diseases. Thus, it is
            imperative for governments to step up and enforce laws to combat
            this crisis. For this Government introduces the term Extended
            Producer Responsibility (EPR) in the 2016 Plastic Waste Management
            Rules, 2016.
          </p>

          <p>
            Plastic Waste Management Rules, 2016 defines the Extended Producer’s
            Responsibility , as the responsibility of a producer for the
            environmentally sound management of the product until the end of its
            life.
          </p>

          <p>
            Plastic Waste Management Rules, 2016 defines the Extended Producer’s
            Responsibility (
            <span className="text-blue-600 font-medium">EPR</span>) as the
            responsibility of a producer for environmentally sound management of
            the product until the end of its life.
          </p>
          <img src={corpseed} />
        </div>

        {/* ADVANTAGES SECTION */}
        <div className="mt-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Advantages of an EPR Registration for EPR Waste Management
          </h3>

          <ul className="space-y-5 text-gray-700">
            <li className="flex gap-3">
              <p>
                <strong>Environmental Protection:</strong>
                Extended producer responsibility (EPR) is a strategy for
                environmental protection that requires the manufacturers to take
                ownership of every stage of the product's lifecycle, especially
                with regard to the recycling of its packaging, in order to
                lessen the overall environmental impact of a product and its
                packaging.
              </p>
            </li>

            <li className="flex gap-3">
              <p>
                <strong>An improved way for waste 11 management:</strong>
                ERP authorizations support businesses in making more informed
                choices about waste collection, management, recycling, and
                disposal. By doing so they might strengthen their current waste
                management approach, further making it more effective
              </p>
            </li>

            <li className="flex gap-3">
              <p>
                <strong>Improved Market Reputation: </strong>
                The reputation and goodwill of the organizations are improved
                with EPR authorization. An EPR license proves a business's
                dedication to reducing the waste produced by its goods and
                resource consumption. The major players in business closely
                monitor these regulations to raise their standing in the sector.
              </p>
            </li>
          </ul>
          <img src={corpseed} />
          <p></p>

          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Extended Producer Responsibility (EPR) applies to the following
            plastic packaging categories:
          </h3>
          <p>
            <strong>Category I:</strong> Packaging made of rigid plastic
          </p>
          <p>
            <strong>Category II:</strong>Carry bags, plastic sachets, or
            pouches, single-layer or multilayer flexible plastic packaging which
            is more than one layer with various types of plastic, plastic
            sheets, or similar covers made of plastic sheets
          </p>
          <p>
            <strong>Category III:</strong> Conatainer made of plastic layers at
            least one layer of plasic and at least one layer of material other
            than plastic.
          </p>
          <p>
            Category IV: Plastic sheet used for packaging as well as compostable
            plastic carry bags
          </p>
        </div>
      </section>
    </div>
  )
}

export default ScrollNavView_01
