export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="connect">
      <div className="footer-inner">
        <p className="footer-kicker">Let&apos;s build dependable platforms.</p>
        <p className="footer-title">
          Open to collaboration on delivery engineering, cloud platforms, and reliability work.
        </p>

        <p className="footer-text">
          © {currentYear} Chayan Samanta | React + Vite | Hosted on AWS | Managed via GoDaddy DNS | Made with Codex.
        </p>
      </div>
    </footer>
  );
}
