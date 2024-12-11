// src/app/layout.tsx
import './styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Nunito } from 'next/font/google';
import { LanguageProvider } from './context/LanguageContext';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'M-Securities',
  description: 'M-Securities is a financial services company that provides secure, reliable, and flexible investment solutions tailored to meet your financial goals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
  