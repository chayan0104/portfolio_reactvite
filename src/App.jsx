import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const navItems = [
    { href: "#about", label: "Professional summary", step: "01" },
    { href: "#skills", label: "Technical stack", step: "02" },
    { href: "#experience", label: "Worklog", step: "03" },
    { href: "#connect", label: "Connect", step: "04" },
  ];

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-brand-block">
          <a className="topbar-brand" href="#top" aria-label="Back to top">
            CS
          </a>
          <div className="topbar-brand-copy">
            <p className="topbar-kicker">Chayan Samanta</p>
            <p className="topbar-title">DevOps Portfolio</p>
          </div>
        </div>

        <nav className="topbar-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="topbar-step" href={item.href} key={item.href}>
              <span className="topbar-step-number">{item.step}</span>
              <span className="topbar-step-label">{item.label}</span>
            </a>
          ))}
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
