import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.name} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}
