// app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import Carousel from './components/carousel';

export default function Home() {
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
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
          <p className="text-lg mb-6">
            With years of experience in the financial industry, we provide secure, reliable, and flexible investment solutions tailored to meet your financial goals. 
            Our platform ensures that your trades are protected, and our expert team is always available to assist you.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/trading.svg" alt="Trading" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trading</h3>
              <p className="text-gray-600">Buy and sell a variety of securities securely on our platform, with real-time market data and analysis tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/portfolio.svg" alt="Portfolio Management" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Portfolio Management</h3>
              <p className="text-gray-600">Track your investments with our intuitive portfolio management system and make informed decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/risk.svg" alt="Risk Management" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-gray-600">We offer tailored risk management strategies to ensure your investments are safe in all market conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/icons/analysis.svg" alt="Market Analysis" className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-600">Stay ahead of the market with in-depth analysis and insights into the latest trends and performance metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 bg-teal-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-lg mb-6">Start investing with us now and take the first step toward a secure financial future.</p>
        <Link href="/signup">
          <button className="bg-white text-teal-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
            Create Account
          </button>
        </Link>
      </section>
    </div>
  );
}
