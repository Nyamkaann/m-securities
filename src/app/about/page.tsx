// app/about/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const About = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16">About Us</h1>
      
      <section id="introduction" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Introduction</h2>
        <p className="text-gray-700">
          Welcome to M-Securities, where we combine financial expertise with innovative solutions to help you achieve your investment goals. Our commitment to excellence and client satisfaction drives everything we do.
        </p>
      </section>

      <section id="goal" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Goal</h2>
        <p className="text-gray-700">
          Our primary goal is to empower investors with the tools, knowledge, and support they need to make informed financial decisions and build lasting wealth through strategic investment opportunities.
        </p>
      </section>

      <section id="objective" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Objective</h2>
        <p className="text-gray-700">
          We aim to deliver exceptional financial services while maintaining the highest standards of integrity, transparency, and professional excellence. Our objective is to become the most trusted partner in our clients' financial journey.
        </p>
      </section>

      <section id="vision" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Vision</h2>
        <p className="text-gray-700">
          To be the leading financial institution that revolutionizes the investment landscape by providing innovative solutions, superior customer service, and sustainable growth opportunities for our clients.
        </p>
      </section>

      <section id="values" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Integrity in all our dealings</li>
          <li>Excellence in service delivery</li>
          <li>Innovation in financial solutions</li>
          <li>Client-centric approach</li>
          <li>Transparency and accountability</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
  