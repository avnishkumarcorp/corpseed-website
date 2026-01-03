import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import corpseed from "../../assets/corpseed.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <img
          src={corpseed}
          alt="Corpseed Logo"
          className="h-10 w-auto"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <div className="text-center">
            <p>Who</p>
            <p>We Are</p>
          </div>

          <div className="text-center">
            <p>Environment</p>
            <p>& Sustainability</p>
          </div>

          <div className="text-center">
            <p>Project</p>
            <p>Planning & Setup</p>
          </div>

          <p>Compliance</p>
          <p>Industries Solution</p>
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center gap-3">
          <CiSearch size={26} />
          <div className="flex text-sm leading-tight">
            <div className="flex justify-center items-center">
              <p>Search</p>
            </div>
            <p className="m-5 font-semibold">All Corpseed</p>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-3 lg:hidden">
          <CiSearch size={26} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-5">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <div>
              <p className="font-semibold">Who</p>
              <p className="text-gray-600">We Are</p>
            </div>

            <div>
              <p className="font-semibold">Environment</p>
              <p className="text-gray-600">& Sustainability</p>
            </div>

            <div>
              <p className="font-semibold">Project</p>
              <p className="text-gray-600">Planning & Setup</p>
            </div>

            <p>Compliance</p>
            <p>Industries Solution</p>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
