// src/app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left: Logo */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
          <p className="text-gray-600 mt-2">Your company tagline or short description.</p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
          <Link href="/about" className="text-gray-800 hover:text-teal-600">About Us</Link>
          <Link href="/services" className="text-gray-800 hover:text-teal-600">Services</Link>
          <Link href="/research" className="text-gray-800 hover:text-teal-600">Research</Link>
          <Link href="/faq" className="text-gray-800 hover:text-teal-600">FAQs</Link>
        </div>

        {/* Right: Social Media Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Follow Us</h4>
          <Link href="https://twitter.com" className="text-gray-800 hover:text-teal-600">Twitter</Link>
          <Link href="https://facebook.com" className="text-gray-800 hover:text-teal-600">Facebook</Link>
          <Link href="https://linkedin.com" className="text-gray-800 hover:text-teal-600">LinkedIn</Link>
        </div>

        {/* Bottom: Contact Info */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
          <p className="text-gray-600">Email: info@yourcompany.com</p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className="bg-gray-100 py-4 mt-8 text-center text-gray-600">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
