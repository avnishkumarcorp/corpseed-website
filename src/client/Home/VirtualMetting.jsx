import { CalendarDays, Download, HelpCircle, Users } from "lucide-react";

const VirtualMeetingSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="bg-blue-200/60 rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start">
          
          {/* Illustration */}
          <img
            src="/calendar.png"   // replace with your image path
            alt="Calendar"
            className="w-64 mb-6"
          />

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Book a Virtual Meeting
          </h2>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
            <Download className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Start Up Guide</h3>
              <p className="text-sm text-gray-600">
                Download Your Free Legal Guide Now
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
            <HelpCircle className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Your Order</h3>
              <p className="text-sm text-gray-600">
                Feel Free To Ask Any Query
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
            <Users className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Become a partner</h3>
              <p className="text-sm text-gray-600">
                At Corpseed We Understand Our Responsibility
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VirtualMeetingSection;
