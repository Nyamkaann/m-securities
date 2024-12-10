// src/app/faq/page.tsx
'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function FAQs() {
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
      <h1 className="text-4xl font-bold text-teal-500 text-center mb-16">FAQs</h1>
      
      <section id="faqs" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">How do I open an account?</h3>
            <p className="text-gray-700 mt-2">You can open an account by visiting our website and following the simple registration process...</p>
          </div>
          {/* Add more FAQ items */}
        </div>
      </section>

      <section id="common-questions" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800">What are your trading hours?</h3>
            <p className="text-gray-700 mt-2">Our trading hours follow the standard market hours...</p>
          </div>
          {/* Add more common questions */}
        </div>
      </section>

      <section id="open-account" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Open an Account</h2>
        <p className="text-gray-700">
          Learn about our account opening process and requirements...
        </p>
      </section>

      <section id="manage-account" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Manage Your Account Online</h2>
        <p className="text-gray-700">
          Discover how to manage your account through our online platform...
        </p>
      </section>

      <section id="contact" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Get in touch with our support team for any questions or assistance...
        </p>
      </section>
    </div>
  );
}
  