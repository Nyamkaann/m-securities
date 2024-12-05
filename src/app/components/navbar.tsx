import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-8">
          <Link href="/about" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
            About Us
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
            Services
          </Link>
          <Link href="/research" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
            Research
          </Link>
          <Link href="/faq" className="text-gray-800 hover:text-teal-500 text-lg font-semibold">
            FAQs
          </Link>
        </div>

        {/* Right: TRADE Button and Language Icon */}
        <div className="flex items-center space-x-4">
          <Link href="/trade">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300 text-lg">
              TRADE
            </button>
          </Link>

          {/* Language Change Icon Button */}
          <button className="bg-teal-500 p-2 rounded-full hover:bg-teal-600 transition duration-300 flex items-center justify-center">
            <img src="/globe_icon.svg" alt="Change Language" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
