import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos básicos de Swiper

import technologies from '@/data/carousel';


const TechnologyCarouselSwiper = () => {
  return (
    <div className="mx-auto px-14  md:px-36 lg:px-56 xl:px-80">
      <Swiper
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
      >
        {technologies.map((tech) => (
          <SwiperSlide key={tech.id} >
            <div className="flex flex-col items-center justify-between">
            <div className="text-5xl lg:text-7xl xl:text-9xl mb-4">{tech.icon}</div>
            <p className="text-center text-sm lg:text-base">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechnologyCarouselSwiper;
