import React from "react";
import MyTitle from "@/components/myTitle";
import projects from "@/data/projects";
// Importa el ícono que deseas usar
import { FaAngleDoubleRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-20">
      <MyTitle>My Projects</MyTitle>
      <div className="max-w-3xl mx-auto space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start relative">
            <div className="md:col-span-2 flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold f1">{project.title}</h3>
                <p className="text-gray-400 f1">{project.year}</p>
              </div>
       
          
            </div>
            <p className="mt-4 text-gray-300 text-justify md:col-span-2 f1">{project.description}</p>
            {/* Botones debajo de la descripción */}
            <div className="md:col-span-2 flex justify-between items-center mt-4">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-800 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-orange-800 transition-colors w-1/2 md:w-1/3 mr-4 text-center f1">DEMO</a>
              <div className="flex items-center justify-end w-full md:w-1/2 space-x-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-fuchsia-100 py-1 px-3 rounded-full text-sm  lg:text-lg">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
