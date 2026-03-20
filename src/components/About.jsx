export default function About() {
  const startDate = new Date(2021, 4, 1); // May 2021
  const monthAdjustment = 3;
  const today = new Date();
  let totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    totalMonths -= 1;
  }

  const adjustedMonths = Math.max(0, totalMonths - monthAdjustment);
  const years = Math.floor(adjustedMonths / 12);
  const months = adjustedMonths % 12;
  const yearLabel = years === 1 ? "year" : "years";
  const monthLabel = months === 1 ? "month" : "months";
  const experienceText =
    months === 0 ? `${years} ${yearLabel}` : `${years} ${yearLabel} ${months} ${monthLabel}`;

  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="section-kicker">Profile</p>
        <h2>//about</h2>
      </div>

      <div className="glass-panel about-panel">
        <p className="about-line">
          DevOps and Site Reliability Engineer with {experienceText} of experience
          managing mission-critical BFSI environments across banking and insurance
          platforms.
        </p>
        <p className="about-line">
          Specialized in CI/CD automation, infrastructure as code, release governance,
          and reliability operations with a strong focus on secure enterprise delivery.
        </p>
      </div>
    </section>
  );
}
