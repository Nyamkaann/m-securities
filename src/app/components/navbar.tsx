'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './language-switcher';
import DarkModeToggle from './dark-mode-toggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
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

  // Function to create dropdown button
  const renderDropdownButton = (name: string, label: string) => (
    <button
      onClick={(e) => handleDropdownClick(name, e)}
      className="text-gray-800 hover:text-teal-500 text-lg font-semibold flex items-center"
    >
      {label}
      <svg 
        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${activeDropdown === name ? 'rotate-180' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return (
    <nav className="bg-white shadow-md relative z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-8 md:h-12" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              {renderDropdownButton('about', t('navbar.about'))}
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 transform transition-all duration-200 ease-in-out ${
                activeDropdown === 'about' 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link href="/about?section=introduction" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.introduction')}
                </Link>
                <Link href="/about?section=goal" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.goal')}
                </Link>
                <Link href="/about?section=objective" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.objective')}
                </Link>
                <Link href="/about?section=vision" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.vision')}
                </Link>
                <Link href="/about?section=values" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.values')}
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              {renderDropdownButton('services', t('navbar.services'))}
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 transform transition-all duration-200 ease-in-out ${
                activeDropdown === 'services' 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link href="/services?section=feedback" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.feedback')}
                </Link>
                <Link href="/services?section=broker" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.broker')}
                </Link>
                <Link href="/services?section=underwriter" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.underwriter')}
                </Link>
                <Link href="/services?section=investment-advisor" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.investmentAdvisor')}
                </Link>
                <Link href="/services?section=mining-broker" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.miningBroker')}
                </Link>
              </div>
            </div>

            {/* Research Dropdown */}
            <div className="relative group">
              {renderDropdownButton('research', t('navbar.research'))}
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 transform transition-all duration-200 ease-in-out ${
                activeDropdown === 'research' 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link href="/research?section=news" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.news')}
                </Link>
                <Link href="/research?section=analysis" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.analysis')}
                </Link>
              </div>
            </div>

            {/* FAQs Dropdown */}
            <div className="relative group">
              {renderDropdownButton('faqs', t('navbar.faqs'))}
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 transform transition-all duration-200 ease-in-out ${
                activeDropdown === 'faqs' 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link href="/faq?section=common-questions" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.commonQuestions')}
                </Link>
                <Link href="/faq?section=open-account" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.openAccount')}
                </Link>
                <Link href="/faq?section=manage-account" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.manageAccount')}
                </Link>
                <Link href="/faq?section=contact" className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-500" onClick={handleLinkClick}>
                  {t('navbar.sections.contact')}
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/trade">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-md font-semibold 
                               hover:bg-teal-600 transition duration-300 text-lg">
                {t('navbar.trade')}
              </button>
            </Link>
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="text-gray-800 text-lg font-semibold">About Us</div>
              <Link href="/about?section=introduction" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Introduction</Link>
              <Link href="/about?section=goal" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Goal</Link>
              <Link href="/about?section=objective" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Objective</Link>
              <Link href="/about?section=vision" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Vision</Link>
              <Link href="/about?section=values" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Values</Link>
            </div>
            <div className="space-y-2">
              <div className="text-gray-800 text-lg font-semibold">Services</div>
              <Link href="/services?section=feedback" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Feedback</Link>
              <Link href="/services?section=broker" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Broker</Link>
              <Link href="/services?section=underwriter" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Underwriter</Link>
              <Link href="/services?section=investment-advisor" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Investment Advisor</Link>
              <Link href="/services?section=mining-broker" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Mining Broker</Link>
            </div>
            <div className="space-y-2">
              <div className="text-gray-800 text-lg font-semibold">Research</div>
              <Link href="/research?section=news" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>News</Link>
              <Link href="/research?section=analysis" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Analysis</Link>
            </div>
            <div className="space-y-2">
              <div className="text-gray-800 text-lg font-semibold">FAQs</div>
              <Link href="/faq?section=common-questions" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Common Questions</Link>
              <Link href="/faq?section=open-account" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Open an Account</Link>
              <Link href="/faq?section=manage-account" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Manage Your Account Online</Link>
              <Link href="/faq?section=contact" className="block pl-4 text-gray-700 hover:text-teal-500" onClick={handleLinkClick}>Contact Us</Link>
            </div>
            <Link href="/trade">
              <button className="w-full bg-teal-500 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300 text-lg">
                TRADE
              </button>
            </Link>
          </div>

          {/* Add dark mode toggle to mobile menu */}
          <div className="mt-4 flex items-center justify-between px-4">
            <DarkModeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
