import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import technologies from '@/data/carousel';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const TechnologyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = window.innerWidth > 768 ? 5:3; // Mantener siempre 5 elementos visibles
  const visibleTechnologies = technologies.slice(currentIndex, currentIndex + itemsPerView).concat(technologies.slice(0, Math.max(itemsPerView - (technologies.length - currentIndex), 0)));

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= technologies.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container relative flex items-center justify-center px-5 lg:px-40 xl:px-96">
      <div className="absolute inset-y-0 flex items-center justify-between w-full px-1 lg:px-36 xl:px-80">
        <button onClick={handlePrev} className="z-10 text-gray-500 text-2xl lg:text-3xl xl:text-4xl">
          <MdKeyboardArrowLeft size="2em" />
        </button>
        <button onClick={handleNext} className="z-10 text-gray-500 text-2xl lg:text-3xl xl:text-4xl">
          <MdKeyboardArrowRight size="2em" />
        </button>
      </div>
      <div className="flex overflow-hidden justify-center w-full">
        {visibleTechnologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center flex-none" style={{width: `${100/itemsPerView}%`}}>
            <div className="text-5xl lg:text-7xl xl:text-8xl mb-1">
              {tech.icon}
            </div>
            <p className="text-center text-sm lg:text-base text-gray-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCarousel;
