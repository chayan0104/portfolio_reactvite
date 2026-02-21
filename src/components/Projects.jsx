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
        {projects.map((project) => (
          <article className="experience-card" key={project.company}>
            <h3>{project.company}</h3>
            <ul>
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
