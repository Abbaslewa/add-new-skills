import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-gray-800 via-gray-900 to-gray-800 text-gray-300 py-12 px-5 md:px-10 flex flex-col items-center justify-center shadow-2xl space-y-10 overflow-hidden">
      {/* Enhanced water-like background animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="water-background"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-3 mb-8">
        <p className="text-4xl font-extrabold text-white glowing-text animate-smooth-sneak">
          Abbas Lewa
        </p>
        <p className="text-lg text-gray-300 italic">Full Stack Developer</p>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-6 mb-8">
        <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
          <Mail className="w-6 h-6" />
          <a href="mailto:abbasomerhassn@gmail.com" className="text-lg">
            abbasomerhassn@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
          <Phone className="w-6 h-6" />
          <a href="tel:0794294091" className="text-lg">
            07 94294091
          </a>
        </div>
      </div>

      <div className="relative z-10 h-0.5 w-full max-w-sm bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 mb-6"></div>

      <p className="relative z-10 text-sm text-gray-400">
        © {currentYear} <span className="font-semibold text-white">Abbas Lewa</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
