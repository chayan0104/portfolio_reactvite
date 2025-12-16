import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="section">
      <h1 className="section-title">Experience</h1>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.company}</h3>
          <ul>
            {project.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
