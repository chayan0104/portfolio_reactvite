export default function Hero() {
  return (
    <section className="section hero" id="top">
      <p className="eyebrow">DevOps Engineer</p>

      <div className="hero-content">
        <img src="/profile.jpg" alt="Chayan Samanta" className="profile" />

        <div>
          <h1>
            Chayan <span>Samanta</span>
          </h1>
          <p className="hero-tagline">
            DevOps Engineer || Site Reliability Engineer || Cloud Platform Engineer
          </p>
          <p className="hero-summary">
            Results-driven engineer with hands-on ownership of mission-critical BFSI
            environments, focused on secure automation, release governance, and
            reliability-first platform operations.
          </p>

          <div className="hero-actions">
            <a
              href="https://in.linkedin.com/in/chayan-samanta-a01856100"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/chayan0104?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
