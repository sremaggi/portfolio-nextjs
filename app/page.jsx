"use client";

import Footer from "@/components/footer/footer";
import MyBio from "@/components/myBio/myBio";
import Navbar from "@/components/navbar/navbar";
import TechnologyCarousel from "@/components/technologyCarousel/technologyCarousel";

export default function Home() {
  return (
    <div className="min-h-screen">
     {/* <div className="animated-background2"></div>  Fondo animado */}
      <Navbar />
      <div >

        {/* Sección de Mini Bio */}
        <div className="mt-10">
        <MyBio />
        </div>
        {/* Carrusel */}
        <TechnologyCarousel />
   
      </div>
      <Footer />
    </div>
  );
}
