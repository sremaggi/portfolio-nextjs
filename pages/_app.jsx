import { NavbarProvider } from '../contexts/NavbarContext'; // Asegúrate de que la ruta de importación sea correcta
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <NavbarProvider> 
            <div className="min-h-screen">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </NavbarProvider>
    );
}

export default MyApp;
