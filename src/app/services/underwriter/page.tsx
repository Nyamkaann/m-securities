'use client';
import { useLanguage } from '../../context/LanguageContext';

const UnderwriterService = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto fade-in">
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16 slide-up">
        {t('services.underwriter.title')}
      </h1>

      <div className="space-y-8 slide-up">
        <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out hover:translate-x-2">
          {t('services.underwriter.description')}
        </p>

        <div className="grid gap-6">
          <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out hover:translate-x-2">
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              {t('services.underwriter.equityFinancing.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t('services.underwriter.equityFinancing.description')}
            </p>
          </div>

          <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out hover:translate-x-2">
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              {t('services.underwriter.debtFinancing.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t('services.underwriter.debtFinancing.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderwriterService; 