// src/app/faq/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

interface FAQSectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const FAQSection = ({ title, children, id }: FAQSectionProps) => (
  <section id={id} className="mb-16 scroll-mt-20">
    <h2 className="text-2xl font-semibold text-teal-500 mb-6">{title}</h2>
    {children}
  </section>
);

export default function FAQs() {
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
        {t('faq.title')}
      </h1>

      <FAQSection title={t('faq.onlineTrading.title')} id="common-questions">
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
              {t('faq.onlineTrading.howTo.title')}
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                {t('faq.onlineTrading.howTo.description1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t('faq.onlineTrading.howTo.description2')}
              </p>
              <p className="text-red-600 dark:text-red-400">
                {t('faq.onlineTrading.howTo.note')}
              </p>
            </div>
          </div>
        </div>
      </FAQSection>

      <FAQSection title={t('faq.accountManagement.title')} id="manage-account">
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
              {t('faq.accountManagement.forgotPassword.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t('faq.accountManagement.forgotPassword.description')}
            </p>
          </div>

          <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
              {t('faq.accountManagement.contactUpdate.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t('faq.accountManagement.contactUpdate.description')}
            </p>
          </div>
        </div>
      </FAQSection>

      <FAQSection title={t('faq.contact.title')} id="contact">
        <div className="bg-white dark:bg-[#26282c] p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
            {t('faq.contact.subtitle')}
          </h3>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">
                {t('faq.contact.phone')}
              </span>{' '}
              <Link href="tel:8812-0890" className="text-teal-600 dark:text-teal-400 hover:underline">8812-0890</Link>,{' '}
              <Link href="tel:8966-6986" className="text-teal-600 dark:text-teal-400 hover:underline">8966-6986</Link>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">
                {t('faq.contact.email')}
              </span>{' '}
              <Link href="mailto:info@msecurities.mn" className="text-teal-600 dark:text-teal-400 hover:underline">
                info@msecurities.mn
              </Link>
            </p>
          </div>
        </div>
      </FAQSection>
    </div>
  );
}
  