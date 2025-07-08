import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Section atas */}
      <div className="py-10 flex flex-col items-center space-y-6">
        {/* Sosial Media */}
        <div className="flex space-x-4">
          <a href="#" className="bg-[#0072c6] p-2 rounded-full hover:bg-[#0028c6] transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-[#0072c6] p-2 rounded-full hover:bg-[#0028c6] transition">
            <FaPinterestP />
          </a>
          <a href="#" className="bg-[#0072c6] p-2 rounded-full hover:bg-[#0028c6] transition">
            <FaInstagram />
          </a>
          <a href="#" className="bg-[#0072c6] p-2 rounded-full hover:bg-[#0028c6] transition">
            <FaTwitter />
          </a>
        </div>

        {/* Menu navigasi utama */}
        <nav className="flex flex-wrap justify-center space-x-6 font-semibold uppercase text-sm tracking-wide">
          <NavLink to="/promo" className="hover:text-green-400 transition">Promo</NavLink>          
          <NavLink to="/pricelist" className="hover:text-[#0028c6] transition">Price List</NavLink>          
          <NavLink to="/testdrive" className="hover:text-[#0028c6] transition">Test Drive</NavLink>          
          <NavLink to="/contact" className="hover:text-[#0028c6] transition">Contact Us</NavLink>
        </nav>

        {/* Menu tambahan */}
        <div className="text-gray-400 text-xs flex space-x-4">
          <a href="#" className="hover:text-gray-200">Blog</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-200">Support</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
        </div>
      </div>

      {/* Garis hijau bawah */}
      <div className="bg-[#0072c6] py-4 text-center text-white text-xs font-medium tracking-wide">
        <p>
          BMW Dealer Website — Crafted with 💙 for automotive enthusiasts
        </p>
        <p className="text-xs mt-1 opacity-80">© 2025 BMW Cilegon. All rights reserved.</p>
      </div>
    </footer>
  );
}
