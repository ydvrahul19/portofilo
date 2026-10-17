import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import RevealObserver from "./components/RevealObserver";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <RevealObserver />
    </>
  );
}
