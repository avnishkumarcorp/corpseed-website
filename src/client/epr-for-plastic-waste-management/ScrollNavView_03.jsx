import React from 'react'

const ScrollNavView_03 = () => {
  return (
    <div>
      <section
        id="procedure"
        className="scroll-mt-24 px-4 sm:px-6 lg:px-16 py-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Procedure to Apply for Plastic Waste Management Authorization /
          License
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>
              Apply online or offline for Plastic Waste Management Registration.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>Attach the required documents.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>Submit the form to the concerned authorities.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>Liaisoning with the concerned departments.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>
              If the application and documents are found to be satisfactory by
              government officials.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>License or certificate is issued.</p>
          </div>
        </div>

        {/* MARKING / LABELING */}
        <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-6">
          Marking or Labeling
        </h3>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="flex gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <p>
              Each plastic carry bag and multi-layered packaging shall have the
              following information printed in English:
            </p>
          </div>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Name and registration number of the manufacturer, and thickness in
              case of carry bags.
            </li>
            <li>
              Name and registration number of the manufacturer in case of
              multi-layered packaging.
            </li>
            <li>
              Name and certificate number in case of carry bags made from
              compostable plastic.
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default ScrollNavView_03
