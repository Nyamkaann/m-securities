// app/about/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
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
        {t('about.title')}
      </h1>
      
      <section id="objective" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          {t('about.objective.title')}
        </h2>
        <p className="text-gray-700">
          {t('about.objective.description')}
        </p>
      </section>

      <section id="goal" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          {t('about.goal.title')}
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {t('about.goal.items').map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="vision" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          {t('about.vision.title')}
        </h2>
        <p className="text-gray-700">
          {t('about.vision.description')}
        </p>
      </section>

      <section id="value" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          {t('about.value.title')}
        </h2>
        <p className="text-gray-700">
          {t('about.value.description')}
        </p>
      </section>

      <section id="introduction" className="mb-16">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          {t('about.introduction.title')}
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">
              {t('about.introduction.organizationalHistory.title')}
            </span>
            <br/>
            {t('about.introduction.organizationalHistory.description1')}
          </p>
          <p>
            {t('about.introduction.organizationalHistory.description2')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
  