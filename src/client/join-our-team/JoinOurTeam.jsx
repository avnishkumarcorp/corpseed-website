import CarrerJob from "./CareerJob"
const roles = [
  {
    title: "Sales",
    desc: "Be a legal advisor to customers and help them to transform, develop, & boost their business",
  },
  {
    title: "Marketing",
    desc: "Create and execute marketing strategies to grow brand awareness and engagement",
  },
  {
    title: "Technology",
    desc: "Build scalable products and improve platform performance",
  },
  {
    title: "HR",
    desc: "Manage people, culture, and talent acquisition",
  },
  {
    title: "Operations",
    desc: "Ensure smooth business operations and compliance",
  },
  {
    title: "Finance",
    desc: "Handle financial planning, audits, and compliance",
  },
];

const JoinOurTeam = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-center mb-12">
        Career @ <span className="text-blue-500">Corpseed</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="border border-gray-300 p-6 rounded-lg
                       hover:shadow-lg transition"
          >
            <h2 className="text-blue-400 font-bold text-xl mb-2">
              {role.title}
            </h2>
            <p className="text-gray-600">
              {role.desc}
            </p>
          </div>
        ))}
      </div>
      
        <CarrerJob/>
  </section>
  );
};

export default JoinOurTeam;
