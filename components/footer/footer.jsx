// components/Footer.js
import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900/80 text-white text-center p-2 flex flex-col justify-center items-center z-10">
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/sremaggi"
          className="mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-ignacio-remaggi-flores-5a558b294/"
          className="mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://wa.me/YOURNUMBER" className="mx-2" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>
      </div>
      <p className="mt-1">
        <a href="mailto:seba.rf96@gmail.com" className="text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-300 f1">
          contact@sremaggi.dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
