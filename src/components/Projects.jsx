import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="section-kicker">Work</p>
        <h2>//experience</h2>
        <p className="section-note">
          Enterprise DevOps delivery across banking and insurance with measurable reliability
          and release-performance impact.
        </p>
      </div>

      <div className="experience-list">
        {projects.map((project, index) => (
          <article className="experience-card" key={project.company}>
            <div className="experience-head">
              <p className="experience-badge">Engagement {String(index + 1).padStart(2, "0")}</p>
              <h3>{project.company}</h3>
            </div>
            <ul className="experience-points">
              {project.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
