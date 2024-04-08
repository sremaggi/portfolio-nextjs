import bio from "@/data/bio";

export default function MyBio() {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <div className=" p-8 rounded-lg  pt-2">
        <div className="flex justify-center items-center mb-4 mt-2">
          <div
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-cover bg-center rounded-full"
            style={{
              backgroundImage: `url('/assets/logo/sremaggilogo.gif')`,
            }}
          ></div>
        </div>
        <ul className="text-center xl:text-xl f1">
          <li>{bio.nombre}</li>
          <li className="text-gray-500">{bio.carrera}</li>
        </ul>
      </div>
    </div>
  );
}
