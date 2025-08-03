import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Inter, Barlow } from 'next/font/google'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Puedes personalizar los pesos que usarás
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata = {
  title: 'sremaggi.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
