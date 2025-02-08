// src/app/components/Footer.tsx
'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';

const Footer = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTradingViewWidget = () => {
      try {
        const currentWidget = widgetRef.current;
        if (!currentWidget) return;

        // Clear previous content
        currentWidget.innerHTML = '';

        // Create widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'tradingview-widget-container__widget';
        currentWidget.appendChild(widgetContainer);

        // Create script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';

        // Configure widget
        const config = {
          symbols: [
            { description: "GOLD", proName: "OANDA:XAUUSD" },
            { description: "ERDN", proName: "TSX:ERD" },
            { description: "EXR", proName: "ASX:EXR" },
            { description: "TMK", proName: "ASX:TMK" },
            { description: "USDMNT", proName: "FX_IDC:USDMNT" },
            { description: "BTC", proName: "BINANCE:BTCUSD" },
            { description: "ETH", proName: "BINANCE:ETHUSD" },
            { description: "SILVER", proName: "OANDA:XAGUSD" },
            { description: "EURUSD", proName: "OANDA:EURUSD" },
            { description: "GBPUSD", proName: "OANDA:GBPUSD" },
            { description: "AAPL", proName: "NASDAQ:AAPL" },
            { description: "MSFT", proName: "NASDAQ:MSFT" },
            { description: "GOOGL", proName: "NASDAQ:GOOGL" },
            { description: "AMZN", proName: "NASDAQ:AMZN" },
            { description: "TSLA", proName: "NASDAQ:TSLA" },
            { description: "FB", proName: "NASDAQ:META" },
            { description: "NFLX", proName: "NASDAQ:NFLX" },
          ],
          showSymbolLogo: true,
          colorTheme: isDarkMode ? "dark" : "light",
          isTransparent: true,
          displayMode: "adaptive",
          locale: "en",
          backgroundColor: isDarkMode ? "#26282c" : "#ffffff"
        };

        script.innerHTML = JSON.stringify(config);
        currentWidget.appendChild(script);
      } catch (error) {
        console.error('Error loading TradingView widget:', error);
      }
    };

    const timer = setTimeout(loadTradingViewWidget, 100);

    return () => {
      clearTimeout(timer);
      const currentWidget = widgetRef.current;
      if (currentWidget) {
        currentWidget.innerHTML = '';
      }
    };
  }, [isDarkMode]);

  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/msecurities.mn',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      label: t('footer.socialLinks.facebook')
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/company/105883976',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      label: t('footer.socialLinks.linkedin')
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/msecurities.mn',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
        </svg>
      ),
      label: t('footer.socialLinks.instagram')
    },
    {
      name: 'x',
      href: 'https://twitter.com/msecurities_mn',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: t('footer.socialLinks.twitter')
    }
  ];

  return (
    <>
      <footer className="bg-white dark:bg-[#26282c] shadow-md transition-colors duration-200">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left: Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center">
              <img 
                src={isDarkMode ? "/logo-dark.png" : "/logo.png"} 
                alt="Logo" 
                className="h-8 md:h-10 w-auto object-contain transition-opacity duration-200" 
                style={{ minWidth: '180px' }}
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-center sm:text-left">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t('footer.quickLinks')}
            </h4>
            <Link 
              href="/about" 
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {t('navbar.about')}
            </Link>
            <Link 
              href="/services" 
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {t('navbar.services')}
            </Link>
            <Link 
              href="/research" 
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {t('navbar.research')}
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              {t('navbar.faqs')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-medium text-gray-800 dark:text-gray-100">
              {t('footer.followUs')}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                  aria-label={item.label}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t('footer.contactUs.title')}
            </h4>
            
            {/* Email Link */}
            <Link 
              href="mailto:info@msecurities.mn"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 
                       hover:text-teal-500 dark:hover:text-teal-400 transition-colors group"
            >
              <svg 
                className="w-5 h-5 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <span className="hover:underline">
                <span className="font-medium">{t('footer.contactUs.email.label')}:</span>{' '}
                {t('footer.contactUs.email.value')}
              </span>
            </Link>

            {/* Phone Links */}
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {t('footer.contactUs.phone.label')}:
              </span>
              <Link 
                href="tel:8812-0890"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 
                         hover:text-teal-500 dark:hover:text-teal-400 transition-colors group"
              >
                <svg 
                  className="w-5 h-5 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span className="hover:underline">89819938</span>
              </Link>
            </div>

            {/* Location Link */}
            <Link 
              href="https://maps.google.com/?q=M+Securities"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 
                       hover:text-teal-500 dark:hover:text-teal-400 transition-colors group"
            >
              <svg 
                className="w-5 h-5 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <span className="hover:underline">{t('footer.contactUs.location.text')}</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm py-4">
            &copy; {new Date().getFullYear()} M Securities. {t('footer.copyright')}
          </p>
        </div>
      </footer>

      {/* TradingView Widget - Fixed at bottom */}
      <div 
        ref={widgetRef} 
        className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#26282c] transition-colors duration-200 z-50"
      ></div>
    </>
  );
};

export default Footer;
