import { FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ew from "../assets/ew.png";
import Navbar from '../components/Navbar';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const updateCirclePosition = () => {
      
      setCirclePos((prevPos) => ({
        x: prevPos.x + (mousePos.x - prevPos.x) * 0.3, 
        y: prevPos.y + (mousePos.y - prevPos.y) * 0.3,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    const circleInterval = setInterval(updateCirclePosition, 8);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(circleInterval);
    };
  }, [mousePos]);

  return (
    <main
      id="home"
      className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen py-10 px-4 sm:px-6 md:px-14 lg:px-20 bg-gray-800"
    >
      <Navbar />

      
      <div
        className="absolute bg-gradient-to-r from-blue-500 to-teal-500 rounded-full pointer-events-none"
        style={{
          width: '80px',
          height: '80px',
          left: `${circlePos.x - 40}px`, 
          top: `${circlePos.y - 40}px`,
          opacity: 0.8, 
          filter: 'blur(10px)', 
          transition: 'transform 0.1s ease',
          transform: `translate(-50%, -50%)`,
        }}
      />

      <div className="relative top-14 z-10 w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="relative w-[150px] h-[150px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] p-4 md:p-5 bg-gray-900 rounded-full ml-4 shadow-xl">
          <img
            src={ew}
            alt="Abbas"
            className="object-cover absolute w-[180px] h-[180px] -top-[30px] lg:w-[470px] lg:h-[470px] lg:-top-[70px] -rotate-3 rounded-b-full"
          />
        </div>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-5 px-4 sm:px-6 md:px-9">
        <h1 className="text-lg sm:text-2xl p-2 mt-7 font-extrabold text-white">Hi, I'm Abbas Omer 👋</h1>
        <p className="lg:text-2xl font-semibold text-gray-300">
          I'm a full-stack developer, and I love creating innovative solutions.
        </p>

        <div className="flex space-x-3">
          <a
            href="#contact"
            className="relative inline-block px-3 border border-gray-100 sm:px-5 py-1.5 text-white font-semibold bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg shadow-lg duration-300"
            aria-label="Hire Abbas"
          >
            Hire Me
          </a>
          <a
            href="Full.pdf"
            download="Full.pdf"
            className="hidden md:block border border-gray-200 bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md bg-opacity-30 hover:scale-105 transition-all duration-300 ease-in-out"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-1.5" />
            Download CV
          </a>
        </div>

        <div className="md:hidden flex justify-center mt-3">
          <a
            href="Full.pdf"
            download="Full.pdf"
            className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-lg shadow-lg transition-colors duration-300 ease-in-out flex items-center animate-bounce"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-1.5" />
            Download CV
          </a>
        </div>

        <div className="flex flex-col md:flex-row mt-5 space-y-3 md:space-y-0 md:space-x-7">
          <div className="text-center bg-white bg-opacity-10 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2">
            <h3 className="text-lg font-bold text-white">
              1
            </h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-2">
            <h3 className="text-lg font-bold text-white">
              10
            </h3>
            <p className="text-sm">Projects Done</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2">
            <h3 className="text-lg font-bold text-white">
              10
            </h3>
            <p className="text-sm ">Happy Clients</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
