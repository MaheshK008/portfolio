const Hero = () => {
  return (
    <section  id="home" className="min-h-[85vh] flex items-center px-10 md:px-20">

      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-400 mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Mahesh <br /> Kalakattu
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            {/* Node.js Backend Developer specializing in scalable APIs, 
            real-time systems, and AWS cloud architecture. */}
            Senior Backend Developer | Node.js | TypeScript | AWS | Distributed Systems
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Building event-driven systems with 7+ years of experience
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              View Work Highlights
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Mahesh_Kalakattu_Resume.pdf`}
              className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition"
              target="_blank"
            >
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">6+</h3>
              <p className="text-gray-400 text-sm">Years</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">7+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-pink-400">AWS</h3>
              <p className="text-gray-400 text-sm">Cloud</p>
            </div>
          </div>
        </div>
        

        {/* RIGHT SIDE */}
        <div className="flex justify-center hover:scale-105 transition duration-300">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpeg`}
            alt="Mahesh"
            className="w-72 h-72 object-cover rounded-2xl border border-white/10 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;