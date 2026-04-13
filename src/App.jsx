import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkHighlights from "./components/WorkHighlights";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <AnimatedSection>
      <About />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
      <WorkHighlights />
      </AnimatedSection>
      <AnimatedSection>
      <Experience />
      </AnimatedSection>
      <AnimatedSection>
      <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
}

export default App;