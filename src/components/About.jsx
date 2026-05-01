export default function About() {
  const highlights = [
    {
      label: "Domain",
      value: "Banking + Insurance",
      description: "with security, auditability, and uptime in focus",
    },
    {
      label: "Mode",
      value: "Hands-on",
      description: "from build pipelines to production incidents and RCA",
    },
  ];

  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="section-kicker">Professional summary</p>
        <h2>Profile</h2>
      </div>

      <div className="paper-panel about-panel">
        <div className="about-copy">
          <p className="panel-chip">Snapshot</p>
          
          <p className="about-summary">
            DevOps Engineer with 5+ years of experience designing, automating, and
            operating highly available, secure, and scalable systems in BFSI
            environments. Experienced in managing end-to-end CI/CD pipelines,
            implementing containerized deployments, and driving DevSecOps practices
            with integrated security and compliance controls. Proficient in cloud and
            on-prem infrastructure, infrastructure provisioning, and observability,
            enabling faster releases, reduced downtime, and improved system
            reliability. Handled production-critical BFSI systems with root cause
            analysis, strict compliance, and zero-downtime release requirements, with
            an end-to-end understanding of the application lifecycle.
          </p>
        </div>

        <div className="about-highlights" aria-label="Professional highlights">
          {highlights.map((highlight) => (
            <article className="about-highlight" key={highlight.label}>
              <p className="about-highlight-label">{highlight.label}</p>
              <p className="about-highlight-value">{highlight.value}</p>
              <p className="about-highlight-description">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
