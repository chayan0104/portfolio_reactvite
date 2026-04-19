import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="section-kicker">Work</p>
        <h2>Experience</h2>
        <p className="section-note">
          Enterprise DevOps delivery across banking and insurance with measurable reliability
          and release-performance impact.
        </p>
      </div>

      <div className="experience-list">
        {projects.map((project) => (
          <article className="experience-card" key={project.company}>
            <div className="experience-head">
              <p className="experience-label">{project.label}</p>
              <h3 className="experience-company">{project.company}</h3>
              <p className="experience-role">{project.role}</p>
            </div>
            {project.tags.length > 0 ? (
              <div className="experience-tags" aria-label="Industry highlights">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}
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
