export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="connect">
      <div className="footer-inner">
        <p className="footer-title">Open to collaboration and challenging platform work.</p>

        <div className="footer-links">
          <a
            href="https://github.com/chayan0104?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://in.linkedin.com/in/chayan-samanta-a01856100"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-text">
          (c) {currentYear} Chayan Samanta | React + Vite | Hosted on AWS | Managed via
          GoDaddy DNS | Built with Codex.
        </p>
      </div>
    </footer>
  );
}
