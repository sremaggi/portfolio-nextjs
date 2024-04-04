import bio from "@/data/bio";
import experiences from "@/data/experiences";

export default function About() {
  return (
    <div className=" text-white min-h-screen px-4 py-2 f1">
          <div className="animated-background"></div> {/* Fondo animado */}
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-4 f1">
        Home
      </h1>
      {/* Sección de Mini Biografía */}
      <div className="max-w-4xl w-full mx-auto mb-2">
        <div className="bg-gray-200/25 p-8 rounded-lg shadow-lg pt-2">
          <div className="flex justify-center items-center mb-4 mt-2">
            <div
              className="w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-cover bg-center rounded-full"
              style={{
                backgroundImage: `url('/assets/logo/sremaggilogo.gif')`,
              }}
            ></div>
          </div>
          <ul className="text-center">
            <li>{bio.nombre}</li>
            <li>{bio.edad} años</li>
            <li>{bio.carrera}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
