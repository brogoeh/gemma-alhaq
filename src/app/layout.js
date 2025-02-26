import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'GEMMA',
  description: 'Generasi Muda Masjid Al-Haq',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
