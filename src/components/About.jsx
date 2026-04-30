export default function About() {
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
  const months = adjustedMonths % 12;
  const yearLabel = years === 1 ? "year" : "years";
  const monthLabel = months === 1 ? "month" : "months";
  const experienceText =
    months === 0
      ? `${years} ${yearLabel}`
      : `${years} ${yearLabel} ${months} ${monthLabel}`;

  const highlights = [
    {
      label: "Experience",
      value: experienceText,
      description: "enterprise DevOps and SRE",
    },
    {
      label: "Domain",
      value: "Banking + Insurance",
      description: "with security, auditability, and uptime in focus",
    },
  ];

  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="section-kicker">Professional Summary</p>
        <h2>About</h2>
      </div>

      <div className="glass-panel about-panel">
        <div className="about-copy">
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
