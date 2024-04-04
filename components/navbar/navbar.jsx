import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white flex justify-between items-center p-4 relative">
      <Link href="/" className="text-xl md:text-3xl font-bold f1">SRemaggi.dev</Link>
      <button onClick={handleClick} className="md:hidden z-20">
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        )}
      </button>
      <div className={`fixed top-0 right-0 h-full z-10  w-64 transform transition-transform duration-150 ease-in-out ${isOpen ? "translate-x-1/4 bg-zinc-950/95 " : "translate-x-full"} md:relative md:translate-x-0 md:flex md:items-center md:w-auto f1`}>
        <Link href="/about">
          <p onClick={handleClick} className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-gray-300 px-4 py-2">About</p>
        </Link>
        <Link href="/mycareer">
          <p onClick={handleClick} className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-gray-300 px-4 py-2">My Career</p>
        </Link>
        <Link href="/projects">
          <p onClick={handleClick} className="block mt-4 md:inline-block md:mt-0 md:ml-6 hover:text-gray-300 px-4 py-2">Projects</p>
        </Link>
        <a
        href="https://drive.google.com/uc?export=download&id=1jcOMuaiN6ej4_MpThs1heraQgjxeSOZb"
        className="block mt-4 md:inline-block md:mt-0 md:ml-6 md:bg-orange-800 hover:text-gray-300 px-4 py-2  text-white font-bold py-2 px-4 rounded min-w-[140px]  f1"
        download
      >
        Download CV
      </a>

      </div>
    </nav>
  );
};

export default Navbar;
