'use client';
import { useLanguage } from '../../context/LanguageContext';

const Analysis = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto fade-in">
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16 slide-up">
        {t('research.analysis.title')}
      </h1>

      <div className="grid gap-6 slide-up">
        <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-all duration-300 ease-in-out hover:translate-x-2">
            {t('research.analysis.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analysis; 