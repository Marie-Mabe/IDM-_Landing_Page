import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/images/ChatGPT_Image_19_mai_2025__02_40_14-removebg-preview.png"
                alt="Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 mr-2"
              />
              <span className="text-base sm:text-xl font-bold text-blue-400">IDM+</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-6 md:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm font-medium">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className=" items-center hidden sm:flex">
            <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-blue-700 text-sm sm:text-base">
              Contactez-nous
            </button>
          </div>

          {/* Menu hamburger pour mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center">
              <img
                src="/images/ChatGPT_Image_19_mai_2025__02_40_14-removebg-preview.png"
                alt="Logo"
                className="h-12 w-12 mr-2"
              />
              <span className="text-xl font-bold text-blue-400">IDM+</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-8">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
