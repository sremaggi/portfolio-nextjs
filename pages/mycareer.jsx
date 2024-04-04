import experiences from "@/data/experiences";

const MyCareer = () => (
    <div className="bg-gray-800 text-white min-h-screen px-4 py-2 f1">
        <h1 className="text-2xl md:text-4xl text-center font-bold mb-12 f1">My profesional career</h1>
    <div className="max-w-4xl mx-auto">
    {experiences.map((exp, index) => (
      <div key={index} className="mb-8 flex items-start">
        <div className="mr-4 flex-shrink-0 text-violet-400">
          <exp.Icon className="h-8 w-8" />
        </div>
        <div>
          <div className="text-lg text-gray-400 f1">{exp.year}</div>
          <div className="text-xl font-semibold f1">{exp.title}</div>
          <p className="text-gray-400 mt-2 f1">{exp.description}</p>
        </div>
      </div>
    ))}
  </div>
  </div>
  );
  
  
  export default MyCareer;