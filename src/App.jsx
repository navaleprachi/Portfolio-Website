import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <main className="pt-28">
          <div>
            <Hero />
            <About />
            <Skills />
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
