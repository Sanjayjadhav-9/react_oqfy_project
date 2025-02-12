import React from 'react';
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-white-100 text-gray-500 text-sm transition-all duration-300 ease-in-out">
      <div className="flex space-x-4 mb-2 md:mb-0">
        <a href="#" className="hover:text-gray-700 transition-colors duration-200">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-gray-700 transition-colors duration-200">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-gray-700 transition-colors duration-200">
          <Linkedin size={20} />
        </a>
      </div>
      <p className="text-center md:text-left">© 2023 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
