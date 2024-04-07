// Suponiendo que MyApp sea tu componente de layout y MyCareer sea una página.
import Footer from "@/components/footer/footer";
import experiences from "@/data/experiences";

const MyCareer = () => (
  <>
  <div className="flex flex-col min-h-screen">

        <div className="px-4">
        <h1 className="text-2xl md:text-4xl text-center font-bold mb-12">My Professional Career</h1>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-2 flex items-start">
              <div className="mr-4 flex-shrink-0 text-violet-400">
                <exp.Icon className="h-8 w-8" />
              </div>
              <div>
                <div className="text-lg text-gray-400">{exp.year}</div>
                <div className="text-xl font-semibold">{exp.title}</div>
                <p className="text-gray-400 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      <Footer />

    </div>
  </>
);

export default MyCareer;
