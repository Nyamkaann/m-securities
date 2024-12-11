// src/app/services/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

interface ServiceSectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const ServiceSection = ({ title, children, id }: ServiceSectionProps) => (
  <section id={id} className="mb-16 scroll-mt-20">
    <h2 className="text-2xl font-semibold text-teal-500 mb-6">{title}</h2>
    {children}
  </section>
);

export default function Services() {
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
        {t('services.title')}
      </h1>

      <ServiceSection title={t('services.broker.title')} id="broker">
        <div className="space-y-6">
          <p className="text-gray-700">
            {t('services.broker.description')}
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              {t('services.broker.requiredDocs.title')}
            </h3>
            
            <div className="grid gap-6">
              {/* Citizen Requirements */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {t('services.broker.requiredDocs.citizen.title')}
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {t('services.broker.requiredDocs.citizen.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Legal Entity Requirements */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {t('services.broker.requiredDocs.legalEntity.title')}
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {t('services.broker.requiredDocs.legalEntity.items').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Foreign Citizen Requirements */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {t('services.broker.requiredDocs.foreignCitizen.title')}
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {(t('services.broker.requiredDocs.foreignCitizen.items') as string[]).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title={t('services.underwriter.title')} id="underwriter">
        <div className="space-y-6">
          <p className="text-gray-700">
            {t('services.underwriter.description')}
          </p>

          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">
                {t('services.underwriter.equityFinancing.title')}
              </h3>
              <p className="text-gray-700">
                {t('services.underwriter.equityFinancing.description')}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">
                {t('services.underwriter.debtFinancing.title')}
              </h3>
              <p className="text-gray-700">
                {t('services.underwriter.debtFinancing.description')}
              </p>
            </div>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title={t('services.investmentAdvisor.title')} id="investment-advisor">
        <div className="space-y-6">
          <p className="text-gray-700">
            {t('services.investmentAdvisor.description')}
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {t('services.investmentAdvisor.services').map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title={t('services.miningBroker.title')} id="mining-broker">
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-4">
              {t('services.miningBroker.requiredDocs.title')}
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {t('services.miningBroker.requiredDocs.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ServiceSection>
    </div>
  );
}
