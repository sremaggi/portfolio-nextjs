import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSwipeable } from "react-swipeable";
import technologies from "@/data/carousel";
import { useNavbar } from "@/contexts/NavbarContext";

const TechnologyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen } = useNavbar();

  const visibleTechnologies = technologies
    .slice(currentIndex, currentIndex + 5)
    .concat(
      technologies.slice(0, Math.max(5 - (technologies.length - currentIndex), 0))
    );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= technologies.length ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? technologies.length - 1 : prevIndex - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="carousel-container relative flex items-center justify-center">

      {isOpen ? "" : (
        <div className={`carousel-nav absolute inset-y-0 flex items-center justify-between w-full`}>
          <button onClick={handlePrev} className="carousel-prev z-10">
            <MdKeyboardArrowLeft size="2em" />
          </button>
          <button onClick={handleNext} className="carousel-next z-10">
            <MdKeyboardArrowRight size="2em" />
          </button>
        </div>
      )}

      <div {...handlers} className="carousel-content flex overflow-hidden justify-center w-full ">
        {visibleTechnologies.map((tech, index) => (
          <div
            key={index}
            className="carousel-item flex flex-col items-center justify-center"
          >
            <div className="tech-icon text-4xl lg:text-7xl xl:text-8xl">{tech.icon}</div>
            <p className="tech-name text-center text-sm lg:text-base text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCarousel;
