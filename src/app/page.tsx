// app/page.tsx

'use client';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from './components/carousel';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  const carouselImages = [
    {
      url: "/images/slide1.jpg",
      alt: "Investment Portfolio",
    },
    {
      url: "/images/slide2.jpg",
      alt: "Trading Platform",
    },
    {
      url: "/images/slide3.jpg",
      alt: "Market Analysis",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <Carousel images={carouselImages} autoPlayInterval={6000} />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <button className="bg-teal-500 text-white px-8 py-4 rounded-md text-lg font-semibold 
                           hover:bg-teal-600 transition duration-300 transform hover:scale-105">
            {t('home.hero.startInvesting')}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{t('home.about.title')}</h2>
          <p className="text-lg mb-6">{t('home.about.description')}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">{t('home.services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/trading.svg" alt="Trading" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('home.services.trading.title')}</h3>
              <p className="text-gray-600">{t('home.services.trading.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/portfolio.svg" alt="Portfolio Management" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('home.services.portfolioManagement.title')}</h3>
              <p className="text-gray-600">{t('home.services.portfolioManagement.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/risk.svg" alt="Risk Management" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('home.services.riskManagement.title')}</h3>
              <p className="text-gray-600">{t('home.services.riskManagement.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/analysis.svg" alt="Market Analysis" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('home.services.marketAnalysis.title')}</h3>
              <p className="text-gray-600">{t('home.services.marketAnalysis.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 bg-teal-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">{t('home.cta.title')}</h2>
        <p className="text-lg mb-6">{t('home.cta.description')}</p>
        <Link href="/signup">
          <button className="bg-white text-teal-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
            {t('home.cta.button')}
          </button>
        </Link>
      </section>
    </div>
  );
}
