import { useState } from "react";
import { jobs } from "./job";

const categories = [
  "All",
  "Sales",
  "Operations",
  "HR & Admin",
  "Marketing",
  "IT",
  "Legal",
];

const CareerJobs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* CATEGORY TABS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* JOB CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-xl p-6 bg-white
                       hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold uppercase mb-3">
                {job.title}
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                {job.description}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Explore
              </button>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CareerJobs;
