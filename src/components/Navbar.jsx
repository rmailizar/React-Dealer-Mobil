import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/bmw-logo.svg";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "PRICE LIST", path: "/pricelist" },
  { name: "TEST DRIVE", path: "https://maps.app.goo.gl/uxva4dNHupmD9RdQA" },
  { name: "CONTACT US", path: "https://wa.me/6289653479540" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 shadow-sm relative z-50">
      {/* garis biru atas */}
      <div className="bg-[#0072c6] h-1 w-full" />

      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        
        {/* Logo */}
        <NavLink to="/">      
        <div className="flex items-center space-x-2">
          <img src={logo} alt="BMW Logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl md:text-3xl font-bold text-[#0072c6]">
            BMW
          </span>
        </div>
        </NavLink>

        {/* Hamburger - muncul saat mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0072c6] font-bold"
                    : "text-gray-700 hover:text-[#0072c6] transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      <div className={`md:hidden bg-white px-6 pb-2 shadow transition-all duration-300 ease-in-out transform origin-top ${
            isOpen
            ? "opacity-100 translate-y-0 scale-100 max-h-screen"
            : "opacity-0 -translate-y-2 scale-95 max-h-0 overflow-hidden"
        }`}
        >
        <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
            <li key={item.path}>
                <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                    isActive
                    ? "text-[#0072c6] font-bold block"
                    : "text-gray-700 hover:text-[#0072c6] transition block"
                }
                >
                {item.name}
                </NavLink>
            </li>
            ))}
        </ul>
        </div>
    </header>
  );
}
