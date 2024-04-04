import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

const Welcome = () => (
  <div className="flex h-screen justify-center items-center flex-col  relative">
    <div className="animated-background"></div> {/* Fondo animado */}
    <div className="flex justify-center items-center">
      <div
        className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-cover bg-center rounded-full"
        style={{ backgroundImage: `url('/assets/logo/sremaggilogo.gif')` }}
      ></div>
    </div>
    <div className="mb-10 space-y-2 z-10 mt-6">
      <a
        href="https://drive.google.com/uc?export=download&id=1jcOMuaiN6ej4_MpThs1heraQgjxeSOZb"
        className="flex justify-center items-center bg-orange-700 hover:bg-white hover:text-purple-900 text-white font-bold py-2 px-4 rounded min-w-[140px] text-center f1"
        download
      >
        Download CV
      </a>

      <Link href="/about" className="flex justify-center items-center">
        <p className="inline-block bg-gray-800 hover:bg-white hover:text-purple-900 text-white font-bold py-2 px-4 rounded min-w-[140px] text-center f1">
          Portfolio
        </p>
      </Link>
    </div>
  </div>
);

export default Welcome;
