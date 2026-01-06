const InTheNews = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="relative bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-lg overflow-hidden">

          {/* LEFT IMAGE */}
          <div className="relative">
            <span className="absolute top-4 left-4 bg-white text-gray-800 px-4 py-2 text-sm shadow rounded">
              In The News
            </span>

            <img
              src="/news-image.jpg"   // replace with your image
              alt="Corpseed News"
              className="w-full h-full object-cover"
            />

            {/* Slider dots (static UI) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-blue-50 p-10 flex flex-col justify-center relative">

            {/* Arrow Shape */}
            <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-0 h-0 
                            border-t-[20px] border-b-[20px] border-r-[24px]
                            border-t-transparent border-b-transparent border-r-blue-50">
            </div>

            <p className="text-blue-600 text-sm font-medium mb-4">
              PRESS RELEASE
            </p>

            <h2 className="text-2xl font-semibold mb-4 leading-snug">
              Corpseed and CII Join Forces to Revolutionize MSMEs at
              Groundbreaking Conference on Tech and Trade
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Corpseed ITES Pvt. Ltd. is honoured to be the Knowledge Partner with
              the Confederation of Indian Industry (CII) at the much-anticipated
              conference on MSMEs Fueling India’s Strength, with the theme
              “Thriving Through Trade and Tech.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InTheNews;
