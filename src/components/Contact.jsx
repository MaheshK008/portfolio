import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-4">kalakattumaheshroyal@gmail.com</p>

      <div className="flex justify-center gap-6 text-3xl">

        <a href="https://github.com/MaheshK008" target="_blank">
          <FaGithub className="hover:text-white transition" />
        </a>

        <a href="https://www.linkedin.com/in/maheshkalakattu/" target="_blank">
          <FaLinkedin className="hover:text-blue-400 transition" />
        </a>

      </div>
    </section>
  );
};

export default Contact;