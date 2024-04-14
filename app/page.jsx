"use client";

import Footer from "@/components/footer/footer";
import MyBio from "@/components/myBio/myBio";
import Navbar from "@/components/navbar/navbar";
import TechnologyCarousel from "@/components/technologyCarousel/technologyCarousel";
import { NavbarProvider } from "@/contexts/NavbarContext";

export default function Home() {
  return (
    <NavbarProvider> 
    <div className="min-h-screen">
      <Navbar />
      <div>
        {/* Sección de Mini Bio */}
        <div className="mt-20">
          <MyBio />
        </div>
        {/* Carrusel */}
        <div className="px-10 lg:px-60 xl:px-96">
        <TechnologyCarousel />
        </div>

      </div>
      <Footer />
    </div>
    </NavbarProvider> 
  );
}
