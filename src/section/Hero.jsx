import { FaDownload } from 'react-icons/fa';
import { useEffect } from 'react';
import ew from '../assets/ew.png';

const Hero = () => {
  useEffect(() => {
    const loadParticlesCursor = async () => {
      try {
        const { particlesCursor } = await import(
          'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
        );

        const pc = particlesCursor({
          el: document.getElementById('app'),
          gpgpuSize: 512,
          color: 0xfff,
          colors: [0x00fffc, 0x00fffc],
          coordScale: 0.5,
          pointSize: 2,
          noiseIntensity: 0.005,
          noiseTimeCoef: 0.0001,
          pointDecay: 0.0025,
          sleepRadiusx: 250,
          sleepRadiusy: 250,
          sleepTimeCoefx: 0.001,
          sleepTimeCoefy: 0.002,
          followMouse: true,
          mouseEffect: true,   
        });

        return () => {
          pc && pc.cleanup && pc.cleanup();
        };
      } catch (error) {
        console.error("Failed to load particlesCursor:", error);
      }
    };

    loadParticlesCursor();
  }, []);

  return (
    <div id='home'>
      <main
        id="app"
        className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen py-10 px-4 sm:px-6 md:px-14 lg:px-20 bg-gray-00 h-screen"
      >
        <div className="relative top-20 z-10 w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="relative  w-[140px] h-[140px] sm:w-[280px] sm:h-[280px] md:w-[390px] md:h-[390px] shadow-[0_10px_20px_rgba(0,255,252,0.6)] p-4 md:p-5 bg-gray-900 rounded-full ml-4 ">
            <img
              src={ew}
              alt="Abbas"
              className="object-cover absolute w-[180px] h-[180px] mx-auto -top-[40px] lg:w-[470px] lg:h-[490px] lg:-top-[100px] -rotate-3 rounded-b-full"
            />
          </div>
        </div>

        <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-5 px-4 sm:px-6 md:px-9">
          <h1 className="text-lg sm:text-2xl p-2 mt-16 font-extrabold text-white">Hi, I'm Abbas Omer 👋</h1>
          <p className="lg:text-2xl font-semibold text-transparent bg-clip-text text-white">
            I'm a full-stack developer, and I love creating innovative solutions.
          </p>

          <div className="flex space-x-3">
          <div className="flex space-x-3">
           
  <a
    href="#contact"
    className="relative inline-block px-3  border border-gray-100 sm:px-5 py-1.5 text-white font-semibold rounded-lg shadow-lg duration-300 hover:scale-105 transition-all custom-button"
    aria-label="Hire Abbas"
  >
    Hire Me
  </a>
  <a
    href="Full.pdf"
    download="Full.pdf"
    className="relative hidden md:block border border-gray-200  px-3 py-1.5 text-white rounded-lg shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300 ease-in-out custom-button"
    aria-label="Download Abbas's Resume"
  >
    <FaDownload className="inline mr-1.5" />
    Download CV
  </a>
</div>



</div>


          <div className="md:hidden flex justify-center mt-3"></div>

          <div className="flex flex-col md:flex-row mt-5 space-y-3 md:space-y-0 md:space-x-7">
            <div className="text-center bg-white bg-opacity-20 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2">
              <h3 className="text-lg font-bold ">1</h3>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center bg-white bg-opacity-20 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-2">
              <h3 className="text-lg font-bold ">10</h3>
              <p className="text-sm">Projects Done</p>
            </div>
            <div className="text-center bg-white bg-opacity-20 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2">
              <h3 className="text-lg font-bold ">10</h3>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
