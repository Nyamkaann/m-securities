// app/page.tsx

'use client';
import Link from 'next/link';
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
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#26282c] transition-colors duration-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            {t('home.about.title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {t('home.about.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-[#1e2023] transition-colors duration-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800 dark:text-gray-100">
            {t('home.services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trading Card */}
            <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700
                          transition-all duration-200 hover:shadow-lg">
              <img src="/icons/trading.svg" alt="Trading" className="h-12 w-12 mx-auto mb-4 dark:invert" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {t('home.services.trading.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.services.trading.description')}
              </p>
            </div>

            {/* Portfolio Management Card */}
            <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700
                          transition-all duration-200 hover:shadow-lg">
              <img src="/icons/portfolio.svg" alt="Portfolio Management" className="h-12 w-12 mx-auto mb-4 dark:invert" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {t('home.services.portfolioManagement.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.services.portfolioManagement.description')}
              </p>
            </div>

            {/* Risk Management Card */}
            <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700
                          transition-all duration-200 hover:shadow-lg">
              <img src="/icons/risk.svg" alt="Risk Management" className="h-12 w-12 mx-auto mb-4 dark:invert" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {t('home.services.riskManagement.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.services.riskManagement.description')}
              </p>
            </div>

            {/* Market Analysis Card */}
            <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700
                          transition-all duration-200 hover:shadow-lg">
              <img src="/icons/analysis.svg" alt="Market Analysis" className="h-12 w-12 mx-auto mb-4 dark:invert" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {t('home.services.marketAnalysis.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('home.services.marketAnalysis.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 bg-teal-500 dark:bg-teal-600 text-white text-center transition-colors duration-200">
        <h2 className="text-3xl font-semibold mb-4">{t('home.cta.title')}</h2>
        <p className="text-lg mb-6 text-white/90">{t('home.cta.description')}</p>
        <Link href="https://trader.msecurities.mn/">
          <button className="bg-white text-teal-500 px-8 py-3 rounded-md font-semibold 
                           hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl">
            {t('home.cta.button')}
          </button>
        </Link>
      </section>
    </div>
  );
}
