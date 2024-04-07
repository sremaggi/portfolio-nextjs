"use client"
import Navbar from "@/components/navbar/navbar";
import "../app/globals.css";
import Footer from "@/components/footer/footer";



function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="min-h-screen">
    <Navbar/>
    <div  className="animated-background2"></div> {/* Fondo animado */}

      <Component {...pageProps} />
      <Footer/>
      </div>
   
    </>
  );
}

export default MyApp;
