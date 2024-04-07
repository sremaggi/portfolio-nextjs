// components/Footer.js
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center p-4 flex justify-center items-center z-10">
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
      <a href="mailto:seba.rf96@gmail.com" className="mx-2">
        <FaEnvelope size={24} />
      </a>
    </footer>
  );
};

export default Footer;
