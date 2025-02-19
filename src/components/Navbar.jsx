import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 flex justify-between items-center px-4 sm:px-8 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 bg-opacity-80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <a href="/" className="text-2xl text-center rounded-lg w-[110px] border border-[#00fffc] text-[#00fffc] sm:text-3xl font-bold">
        ABBAS
      </a>
      <button onClick={toggleDarkMode} className="text-2xl text-white mr-4 md:mr-8 focus:outline-none">
        {isDarkMode ? <FaSun className="text-[#00fffc]" /> : <FaMoon />}
      </button>

      <div className="md:hidden">
        {isMenuOpen ? (
          <FaTimes className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <div className="hidden md:flex space-x-6 lg:space-x-16 text-white">
        <a href="#home" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300 relative group">
          Home
          <span className="block h-0.5 bg-[#00fffc] absolute bottom-0 left-0 w-0 group-hover:w-full group-hover:shadow-lg transition-all duration-500"></span>
        </a>
        <a href="#about" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300 relative group">
          About Me
          <span className="block h-0.5 bg-[#00fffc] absolute bottom-0 left-0 w-0 group-hover:w-full group-hover:shadow-lg transition-all duration-500"></span>
        </a>
        <a href="#skills" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300 relative group">
          Skills
          <span className="block h-0.5 bg-[#00fffc] absolute bottom-0 left-0 w-0 group-hover:w-full group-hover:shadow-lg transition-all duration-500"></span>
        </a>
        <a href="#contact" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300 relative group">
          Contact Me
          <span className="block h-0.5 bg-[#00fffc] absolute bottom-0 left-0 w-0 group-hover:w-full group-hover:shadow-lg transition-all duration-500"></span>
        </a>
        <a href="#contact" className="text-base sm:text-lg font-semibold bg-[#00fffc] hover:text-gray-400 px-4 sm:px-5 py-1 rounded-lg transition-all duration-300">
          Hire Me
        </a>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center md:hidden">
          <a href="#home" className="text-3xl text-white my-4" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-3xl text-white my-4" onClick={toggleMenu}>About Me</a>
          <a href="#skills" className="text-3xl text-white my-4" onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="text-3xl text-white my-4" onClick={toggleMenu}>Contact Me</a>
          <a href="#contact" className="text-3xl text-white my-4" onClick={toggleMenu}>Hire Me</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
