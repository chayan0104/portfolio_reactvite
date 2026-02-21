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
