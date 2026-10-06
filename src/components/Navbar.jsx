const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center px-8 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
      <a
        href="#home"
        className="text-xl font-bold tracking-wide hover:text-white transition"
      >
        Mahesh Kalakattu
      </a>

      <div className="space-x-6 text-gray-300">
        <a href="#about" className="hover:text-white transition">
          About
        </a>

        <a href="#projects" className="hover:text-white transition">
          Work
        </a>

        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;