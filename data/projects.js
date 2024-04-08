// data/projects.js
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGoogle,

} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Primera Vista Hospedaje",
    description:
      "A project created with react js, the main objective was to provide a system for a lodging business with a daily fee, in which users can generate a reservation request with all the necessary information and with an attractive user interface.",
    technologies: [<FaReact />, <FaNodeJs />,<FaGoogle/> ,<FaDatabase />],
    year: "2022 - Present",
    demoUrl:"https://primeravista-50b01.web.app/",
  }
  
  // Añade más proyectos según sea necesario
];

export default projects;
