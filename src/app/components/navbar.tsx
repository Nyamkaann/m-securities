'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './language-switcher';
import DarkModeToggle from './dark-mode-toggle';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
  const { isDarkMode } = useDarkMode();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (dropdownName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  // Updated dropdown button renderer
  const renderDropdownButton = (name: string, label: string) => (
    <button
      onClick={(e) => handleDropdownClick(name, e)}
      className="text-gray-700 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400 
                 text-lg font-medium flex items-center transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 
                 rounded-lg px-3 py-2"
      aria-expanded={activeDropdown === name}
    >
      {label}
      <svg 
        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
          activeDropdown === name ? 'rotate-180' : ''
        }`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  // Updated dropdown menu renderer
  const renderDropdownMenu = (name: string, items: { href: string; label: string }[]) => (
    <div 
      className={`absolute left-0 mt-1 w-64 rounded-lg overflow-hidden
                 bg-white dark:bg-[#26282c] 
                 shadow-lg border border-gray-100 dark:border-gray-700
                 transform transition-all duration-200 ease-in-out
                 ${activeDropdown === name 
                   ? 'opacity-100 visible translate-y-0' 
                   : 'opacity-0 invisible -translate-y-2'}`}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2.5 text-base text-gray-700 dark:text-gray-200
                     hover:bg-gray-50 dark:hover:bg-gray-700/50
                     hover:text-teal-500 dark:hover:text-teal-400
                     transition-colors duration-200"
            onClick={handleLinkClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="bg-white dark:bg-[#26282c] shadow-md relative z-50 transition-colors duration-200" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={isDarkMode ? "/logo-dark.png" : "/logo.png"} 
                alt="Logo" 
                className="h-8 md:h-10 w-auto object-contain transition-opacity duration-200" 
                style={{ minWidth: '180px' }}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-200
                     hover:text-teal-500 dark:hover:text-teal-400
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700
                     transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <div className="relative group">
              {renderDropdownButton('about', t('navbar.about'))}
              {renderDropdownMenu('about', [
                { href: "/about?section=introduction", label: t('navbar.sections.introduction') },
                { href: "/about?section=goal", label: t('navbar.sections.goal') },
                { href: "/about?section=objective", label: t('navbar.sections.objective') },
                { href: "/about?section=vision", label: t('navbar.sections.vision') },
                { href: "/about?section=values", label: t('navbar.sections.values') }
              ])}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              {renderDropdownButton('services', t('navbar.services'))}
              {renderDropdownMenu('services', [
                { href: "/services?section=feedback", label: t('navbar.sections.feedback') },
                { href: "/services?section=broker", label: t('navbar.sections.broker') },
                { href: "/services?section=underwriter", label: t('navbar.sections.underwriter') },
                { href: "/services?section=investment-advisor", label: t('navbar.sections.investmentAdvisor') },
                { href: "/services?section=mining-broker", label: t('navbar.sections.miningBroker') }
              ])}
            </div>

            {/* Research Dropdown */}
            <div className="relative group">
              {renderDropdownButton('research', t('navbar.research'))}
              {renderDropdownMenu('research', [
                { href: "/research?section=news", label: t('navbar.sections.news') },
                { href: "/research?section=analysis", label: t('navbar.sections.analysis') }
              ])}
            </div>

            {/* FAQs Dropdown */}
            <div className="relative group">
              {renderDropdownButton('faqs', t('navbar.faqs'))}
              {renderDropdownMenu('faqs', [
                { href: "/faq?section=common-questions", label: t('navbar.sections.commonQuestions') },
                { href: "/faq?section=open-account", label: t('navbar.sections.openAccount') },
                { href: "/faq?section=manage-account", label: t('navbar.sections.manageAccount') },
                { href: "/faq?section=contact", label: t('navbar.sections.contact') }
              ])}
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/trade">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold 
                               hover:bg-teal-600 transition duration-300 text-lg
                               shadow-sm hover:shadow-md">
                {t('navbar.trade')}
              </button>
            </Link>
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4
                     transition-all duration-200 ease-in-out`}
        >
          <div className="py-2 space-y-1 bg-white dark:bg-[#26282c] rounded-lg 
                         shadow-lg border border-gray-100 dark:border-gray-700">
            {/* Mobile menu items */}
            {[
              { title: t('navbar.about'), items: [
                { href: "/about?section=introduction", label: t('navbar.sections.introduction') },
                { href: "/about?section=goal", label: t('navbar.sections.goal') },
                { href: "/about?section=objective", label: t('navbar.sections.objective') },
                { href: "/about?section=vision", label: t('navbar.sections.vision') },
                { href: "/about?section=values", label: t('navbar.sections.values') }
              ]},
              // Add other sections similarly
            ].map((section, index) => (
              <div key={index} className="px-4 py-2">
                <div className="text-gray-700 dark:text-gray-200 text-lg font-medium mb-2">
                  {section.title}
                </div>
                <div className="ml-4 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <Link 
                      key={itemIndex}
                      href={item.href} 
                      className="block text-gray-600 dark:text-gray-300 
                               hover:text-teal-500 dark:hover:text-teal-400
                               hover:bg-gray-50 dark:hover:bg-gray-700/50
                               px-2 py-1.5 rounded-md transition-colors duration-200" 
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
