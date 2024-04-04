import "../app/globals.css";
import dynamic from 'next/dynamic';

// Importa el Navbar como un componente del cliente
const Navbar = dynamic(() => import('../components/navbar/navbar'), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
