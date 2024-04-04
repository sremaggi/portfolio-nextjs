
// Simula tu archivo de datos o ajusta la importación según tus necesidades
const technologies = [
    { name: 'Golang', Icon: FaGolang },
    { name: 'JavaScript', Icon: FaJsSquare },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Git', Icon: FaGitAlt },
    // Añade más tecnologías y sus iconos correspondientes aquí
  ];

  // Configuración para el carrusel
  const settingsCarousel = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  export default settingsCarousel;technologies;