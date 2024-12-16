// src/app/layout.tsx
import './styles/globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Nunito } from 'next/font/google';
import { Providers } from './context/providers';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'M Securities',
  description: 'M Securities is a financial services company that provides secure, reliable, and flexible investment solutions tailored to meet your financial goals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen bg-white dark:bg-[#26282c] transition-colors duration-200">
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
  