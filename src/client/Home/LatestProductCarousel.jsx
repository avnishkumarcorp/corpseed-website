import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "BIS Certification for Solid State Drive (SSD)",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "BIS Certification for Photovoltaic (PV) Module",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "BIS Certification for LED Modules",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "BIS Certification for LED Luminaires",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "BIS Certification for USB Type External Hard disk",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "BIS Certification for Power Banks",
  },
];

const CARD_WIDTH = 260;
const VISIBLE_CARDS = 5;

const LatestProductsCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev < products.length - VISIBLE_CARDS ? prev + 1 : prev
    );
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Latest
          </span>
          <h2 className="text-xl font-semibold">Products</h2>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute -left-6 top-1/2 -translate-y-1/2
                     bg-white border shadow p-2 rounded-full z-10"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute -right-6 top-1/2 -translate-y-1/2
                     bg-white border shadow p-2 rounded-full z-10"
        >
          <ChevronRight />
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {products.map((item, i) => (
              <div
                key={i}
                className="min-w-[240px] bg-white border border-gray-200
                           rounded-2xl p-5 text-center hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 mx-auto object-contain mb-4"
                />

                <h3 className="text-sm font-medium leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestProductsCarousel;
