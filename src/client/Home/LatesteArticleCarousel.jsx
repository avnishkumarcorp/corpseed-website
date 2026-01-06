import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const visibleCards = 3;
const AUTO_DELAY = 3000;
const articles = [
  {
    image: "https://via.placeholder.com/400x200",
    category: "MEDIA",
    date: "2026-01-05",
    title: "NIST 800-88 Compliance Certification",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "ENVIRONMENTAL CONSULTANCY",
    date: "2026-01-05",
    title: "How To Get An Environmental Audit Certificate",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "WASTE MANAGEMENT",
    date: "2026-01-05",
    title: "BMW Certificate Renewal Process For Clinics And Hospitals",
  },
  {
    image: "https://via.placeholder.com/400x200",
    category: "COMPLIANCE",
    date: "2026-01-05",
    title: "ISO Certification Process in India",
  },
];


const LatestArticlesCarousel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) =>
      prev < articles.length - visibleCards ? prev + 1 : 0
    );
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(next, AUTO_DELAY);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      className="bg-blue-50 py-16 relative"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Latest
          </span>
          <h2 className="text-xl font-semibold">Articles</h2>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <ChevronRight />
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 360}px)` }}
          >
            {articles.map((item, i) => (
              <div
                key={i}
                className="min-w-[340px] bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-xl h-44 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestArticlesCarousel;
