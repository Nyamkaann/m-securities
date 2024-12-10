// src/app/research/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Research() {
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
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16">Research</h1>
      
      <section id="news" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">News</h2>
        <p className="text-gray-700">
          Stay updated with the latest market news and developments. Our news section provides real-time updates on market trends, company announcements, and economic indicators that impact your investment decisions.
        </p>
      </section>

      <section id="analysis" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Analysis</h2>
        <p className="text-gray-700">
          Access comprehensive market analysis and research reports from our expert analysts. We provide detailed insights into market trends, sector analysis, and investment opportunities to help you make informed decisions.
        </p>
      </section>
    </div>
  );
}
