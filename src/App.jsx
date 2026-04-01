import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar.jsx";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground.jsx";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <ScrollProgressBar />
      <Analytics />
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-8">
        <Navbar />
        <main className="pt-16">
          <div>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
