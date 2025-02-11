const certifications = [
  {
    title: 'Certificate of Participation',
    description: 'Awarded for active participation in various development programs aimed at enhancing professional and technical skills.',
  },
  {
    title: 'Certificate in Training and Development Department',
    description: 'Focused on developing training programs to enhance both professional and technical abilities in various fields.',
  },
  {
    title: 'Certificate in Community-Based Health First Aid',
    description: 'Emphasizes critical health and safety skills, particularly in community settings, enabling prompt and effective first aid.',
  },
  {
    title: 'Certificate in English Language',
    description: 'Emphasizes proficiency in the English language, enhancing communication skills and promoting effective learning in diverse environments.',
  },
];

const Certifications = () => {
  return (
    <div id="education" className="flex flex-col items-center justify-center min-h-screen  py-16 px-6">
      <div className="max-w-4xl w-full text-gray-100 rounded-lg shadow-lg p-8 ">
        
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Certifications & Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 hover:animate-pulse rounded-lg shadow-xl border border-gray-700 hover:border-[#00fffc] transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-medium text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Certifications;
