import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="section">
      <h2>Experience</h2>

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
