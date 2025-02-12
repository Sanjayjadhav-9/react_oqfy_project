import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-4 bg-gray-100 text-gray-500 text-sm">
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-700">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-gray-700">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-gray-700">
          <Linkedin size={20} />
        </a>
      </div>
      <p>© 2023 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
