export default function Hero() {
  const startDate = new Date(2021, 3, 1);
  const today = new Date();

  let totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    totalMonths -= 1;
  }

  const adjustedMonths = Math.max(0, totalMonths);
  const years = Math.floor(adjustedMonths / 12);
  const yearLabel = years === 1 ? "year" : "years";
  const experienceText = `${years} ${yearLabel}`;

  const checkpoints = [
    {
      title: "Infa & Cloud",
      description: "Managing On-Premises infrastructure and cloud environments ",
      tone: "paper",
    },
    {
      title: "CI/CD delivery",
      description: "Shipping predictable release pipelines with rollback readiness.",
      tone: "green",
    },
    
    {
      title: "Security & Observability",
      description: "Embedding scans, compliance, and Tracking platform health with actionable alerts.",
      tone: "yellow",
    },
  ];

  return (
    <section className="section hero" id="top">
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-identity">
            <img src="/profile1.jpg" alt="Chayan Samanta" className="profile profile-main" />

            <div className="hero-copy">
              <p className="eyebrow">Platform systems engineer</p>
              <h1>
                Chayan <span>Samanta</span>
              </h1>
            </div>
          </div>

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

          <div className="hero-meta">
            <div className="hero-meta-card">
              <p className="hero-meta-label">Role</p>
              <p className="hero-meta-value">DevOps + SRE</p>
            </div>
            <div className="hero-meta-card">
              <p className="hero-meta-label">Experience</p>
              <p className="hero-meta-value">{experienceText}</p>
            </div>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Current operating themes">
          <div className="hero-panel-head">
            <p className="hero-panel-title">Operational priorities</p>
          </div>

          <div className="checkpoint-list">
            {checkpoints.map((checkpoint) => (
              <article className={`checkpoint-card checkpoint-${checkpoint.tone}`} key={checkpoint.title}>
                <div className="checkpoint-icon" aria-hidden="true">
                  OK
                </div>
                <div>
                  <h2>{checkpoint.title}</h2>
                  <p>{checkpoint.description}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
