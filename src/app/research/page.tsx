// src/app/research/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

interface ResearchSectionProps {
  title: string;
  description: string;
  id: string;
}

const ResearchSection = ({ title, description, id }: ResearchSectionProps) => (
  <section id={id} className="mb-16 scroll-mt-20">
    <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-semibold text-teal-500 mb-4">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </section>
);

export default function Research() {
  const { t } = useLanguage();
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
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16">
        {t('research.title')}
      </h1>
      
      <ResearchSection
        id="news"
        title={t('research.news.title')}
        description={t('research.news.description')}
      />

      <ResearchSection
        id="analysis"
        title={t('research.analysis.title')}
        description={t('research.analysis.description')}
      />
    </div>
  );
}
