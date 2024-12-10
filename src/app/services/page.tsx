// src/app/services/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Services() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16">Our Services</h1>
      
      <section id="feedback" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Feedback</h2>
        <p className="text-gray-700">
          Our feedback service provides valuable insights and recommendations to help improve your trading experience. We collect and analyze user feedback to continuously enhance our platform and services.
        </p>
      </section>

      <section id="broker" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Broker</h2>
        <p className="text-gray-700">
          Our brokerage services offer comprehensive trading solutions with competitive rates, advanced trading platforms, and expert guidance to help you achieve your investment goals.
        </p>
      </section>

      <section id="underwriter" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Underwriter</h2>
        <p className="text-gray-700">
          As underwriters, we facilitate capital raising and public offerings, ensuring smooth execution of securities transactions while maintaining compliance with regulatory requirements.
        </p>
      </section>

      <section id="investment-advisor" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Investment Advisor</h2>
        <p className="text-gray-700">
          Our investment advisory services provide personalized financial guidance, portfolio management, and strategic investment planning to help you make informed investment decisions.
        </p>
      </section>

      <section id="mining-broker" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Mining Broker</h2>
        <p className="text-gray-700">
          Specialized in mining sector investments, our mining broker service offers expert knowledge and access to mining-related securities, helping you navigate this unique market segment.
        </p>
      </section>
    </div>
  );
}
