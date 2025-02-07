
import fog from "../assets/fog.png";

function App() {
  return (
    <div id="about" className="relative min-h-screen bg-gray-700">
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>

      <div className="rain" style={{ top: '5%', left: '5%' }}></div>
      <div className="rain" style={{ top: '15%', left: '25%' }}></div>
      <div className="rain" style={{ top: '25%', left: '35%' }}></div>
      <div className="rain" style={{ top: '35%', left: '45%' }}></div>
      <div className="rain" style={{ top: '45%', left: '55%' }}></div>
      <div className="rain" style={{ top: '55%', left: '65%' }}></div>
      <div className="rain" style={{ top: '65%', left: '75%' }}></div>
      <div className="rain" style={{ top: '75%', left: '85%' }}></div>
      <div className="rain" style={{ top: '85%', left: '15%' }}></div>
      <div className="rain" style={{ top: '95%', left: '20%' }}></div>

      <h1 className="text-white font-extrabold text-center pt-20 text-4xl">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center mt-16 px-4 md:px-0">
        <div className=" mx-auto text-gray-300 w-full mb-8 md:mb-0 md:pr-8 p-6 rounded-lg shadow-lg">
          <p className="font-bold text-sm sm:text-base mb-4">
            Hi, I'm Abbas Omer Hassan Suliman, a passionate full-stack developer from Sudan. I specialize in crafting dynamic and responsive web applications, with a strong foundation in front-end development using React and TailwindCSS. Additionally, I work with back-end technologies such as Node.js and MongoDB, ensuring seamless integration of all components.
          </p>
          <p className="font-bold text-sm sm:text-base mb-4">
            I'm motivated by the challenge of solving complex problems through code, and I’m always on the lookout for new technologies to explore and implement. I actively contribute to open-source projects and enjoy experimenting with cutting-edge design patterns. My goal is to create intuitive and engaging user experiences, ensuring seamless interactions across platforms.
          </p>
        
         
            <a href='#project' className="mt-4 px-8 py-3 bg-gray-800 border border-yellow-700 lg:w-[20%] text-white rounded-lg hover:bg-gray-600 transition">
              Project
            </a>
         
        </div>

        <div className="md:w-1/2 flex justify-center mt-">
          <img
            src={fog}
            alt="fog"
            className="lg:w-[350px] lg:h-[350px] w-[200px] h-[200px] max-w-md rounded-full bg-gray-800 shadow-xl transform hover:scale-105 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default App;