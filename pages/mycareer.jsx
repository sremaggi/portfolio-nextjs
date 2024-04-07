import Footer from "@/components/footer/footer";
import experiences from "@/data/experiences";

const MyCareer = () => (
  <>
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow mb-20 lg:mb-44">
        <h1 className="text-2xl md:text-4xl text-center font-bold my-5">
          My Professional Career
        </h1>
        <div className="space-y-1 max-w-4xl mx-auto p-4">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="text-orange-500">
                  <exp.Icon className="h-12 w-12" />
                </div>
                <div>
                  <div className="text-xs md:text-lg text-gray-300">{exp.year}</div>
                  <div className="text-sm md:text-xl font-semibold">{exp.title}</div>
                  <p className="text-xs md:text-lg text-gray-300 mt-2">{exp.description}</p>
                </div>
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
