'use client';
import { useLanguage } from '../../context/LanguageContext';

const InvestmentAdvisorService = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto fade-in">
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16 slide-up">
        {t('services.investmentAdvisor.title')}
      </h1>

      <div className="space-y-8 slide-up">
        <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out hover:translate-x-2">
          {t('services.investmentAdvisor.description')}
        </p>

        <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            {(t('services.investmentAdvisor.services') as unknown as string[]).map((service: string, index: number) => (
              <li key={index} className="transition-all duration-300 ease-in-out hover:translate-x-2">{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvisorService; 