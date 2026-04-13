const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
      <h1 className="text-xl font-bold tracking-wide">Mahesh</h1>

      <div className="space-x-6 text-gray-300">
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