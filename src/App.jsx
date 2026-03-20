import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site">
      <div className="bg-layer bg-layer-one" aria-hidden="true" />
      <div className="bg-layer bg-layer-two" aria-hidden="true" />

      <header className="topbar">
        <a className="topbar-brand" href="#top" aria-label="Back to top">
          CS
        </a>
        <nav className="topbar-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main className="layout">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
