import banner from "../../assets/corpseed-banner.webp"

const Lifeatcorpseed = () => {
  return (
    <div className="w-full bg-slate-50 text-slate-800">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src={banner}
          alt="Corpseed Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Yourself at Corpseed
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Discover careers, culture, and people shaping the future.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer">
            ▶ Watch Video
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Meet the People who power <span className="text-blue-600">Corpseed</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are the <strong>#PeopleOfCorpseed</strong> — a diverse group of professionals
            united by innovation, integrity, and impact.
          </p>
        </div>
      </section>

      {/* PEOPLE STORY CARD */}
      {[
        {
          title: "Leading the Charge: Head of Digital Marketing",
          desc: "Driving growth through data-driven insights and creative strategy.",
          tags: ["#DigitalMarketing", "#MarketingExperts", "#SocialMedia"],
          image: "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/8492765481Meet-Our-Head-of-Digital-Marketing-shamshad-alam-corpseed.webp",
          reverse: false,
        },
        {
          title: "Empowering Medical Device Innovation",
          desc: "Navigating complex regulatory landscapes with confidence.",
          tags: ["#Regulatory", "#MedicalDevice", "#Compliance"],
          image: "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/3192311537Charul_Gaur_Corpseed.webp",
          reverse: true,
        },
        {
          title: "Turning Regulatory Hurdles into Growth",
          desc: "Strategic guidance that transforms ideas into scalable businesses.",
          tags: ["#BusinessAdvisory", "#Environment", "#Compliance"],
          image: "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/3138773948Ganesh_Jha_Corpseed.jpeg",
          reverse: false,
        },
        {
          title: "Finance Leadership Beyond Numbers",
          desc: "Empowering teams and aligning strategy with growth vision.",
          tags: ["#Finance", "#Leadership", "#Accounts"],
          image: "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/1522579334Praveen_Kumar_Mishra_Corpseed.jfif",
          reverse: true,
        },
      ].map((item, index) => (
        <section key={index} className="py-16 px-6">
          <div
            className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2xl shadow-lg w-full h-[360px] object-cover"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-5">{item.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-sm border border-gray-300 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="text-blue-600 font-medium hover:underline cursor-pointer">
                Learn More →
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* LOAD MORE */}
      <div className="flex justify-center py-10">
        <button className="px-8 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition cursor-pointer">
          Load More
        </button>
      </div>

      {/* COMMUNITY SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Our Communities Inspire Our Progress
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We foster an inclusive environment where diverse backgrounds fuel
            innovation and growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Diversity & Inclusion",
                desc: "We celebrate differences in culture, thought, and experience.",
                image: "/culture1.jpg",
              },
              {
                title: "Company Culture",
                desc: "Our values define how we work, collaborate, and grow.",
                image: "/culture2.jpg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <button className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lifeatcorpseed
