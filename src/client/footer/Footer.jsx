import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        <div className="flex items-center gap-3 text-gray-700">
          <span className="font-medium">Follow Us :</span>
          <div className="flex gap-3 text-gray-500">
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex w-full sm:w-auto">
          <input
            type="email"
            placeholder="Email address..."
            className="flex-1 sm:w-64 border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-black text-white px-4 py-2 text-sm">
            Subscribe
          </button>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          
          <div>
            <h4 className="font-semibold mb-4">Waste Management & Circularity</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Bio-Medical Waste</li>
              <li>Hazardous Waste Management</li>
              <li>Battery Waste Management</li>
              <li>Solid Waste Management</li>
              <li>DPCC Waste Management</li>
              <li>EPR Authorization</li>
              <li>Sustainability Consulting</li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold mb-4">Green Certifications & Eco-labeling</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Zero Carbon Certification</li>
              <li>Green Building Certification</li>
              <li>Eco Labelling Certification</li>
              <li>Energy Audits</li>
              <li>Green Building Design</li>
              <li>Sustainable Business Certification</li>
            </ul>
          </div>

     
          <div>
            <h4 className="font-semibold mb-4">Safety and Regulatory</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Hallmark Registration</li>
              <li>ISI Registration</li>
              <li>BIS Registration</li>
              <li>Drone Registration</li>
              <li>Medical Devices Import</li>
              <li>Drug License</li>
              <li>WPC Import License</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Become A Partner</li>
              <li>Contact Us</li>
              <li>Knowledge Centre</li>
              <li>Change Your CA</li>
              <li>Life At Corpseed</li>
              <li>MCA Calculator</li>
              <li>Online Payment</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700">
            ALL SERVICES
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
