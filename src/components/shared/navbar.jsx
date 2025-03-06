import { useState } from "react";
import { CircleUserRound, Bell, Menu, X } from "lucide-react";
import logo from "../../assets/icons/logo-icon.svg";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { title: "Home", url: "/" },
    { title: "About Beast Mode", url: "/beastmodestore" },
    { title: "Horses", url: "/horses" },
    { title: "Offerings & Partnerships", url: "/ownerandpartnership" },
    { title: "Races", url: "/race" },
    { title: "Win Photos", url: "/winphoto" },
    { title: "Store", url: "/" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="bg-navbg py-[13px] h-[90px] flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/dashboard">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-[#FFF5EB] font-normal text-[16px]">
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-[#FFD700] transition">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center gap-5 text-[#FFF5EB]">
          <Link to={`/dashboard/notification`}>
            <Bell className="cursor-pointer" />
          </Link>
          <CircleUserRound className="cursor-pointer" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-[#FFF5EB] text-lg bg-navbg shadow-md">
          {navitems.map((item, index) => (
            <li key={index} className="hover:text-[#FFD700] transition">
              <Link
                to={item.url}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
