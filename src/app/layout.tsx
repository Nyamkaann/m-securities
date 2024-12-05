// src/app/layout.tsx
import './styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
  title: 'My App',
  description: 'A beautiful Next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar is here */}
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* Footer is here */}
      </body>
    </html>
  );
}
  