export default function Skills() {
  const skillGroups = [
    {
      title: "Cloud and Infrastructure",
      items: ["AWS", "Azure", "Terraform", "CloudFormation"],
      accent: "Cloud-ready foundations",
    },
    {
      title: "CI/CD and Source Control",
      items: ["Jenkins", "AWS CodePipeline", "CodeDeploy", "GitHub", "Bitbucket"],
      accent: "Release systems that scale",
    },
    {
      title: "Containers and Runtime",
      items: ["Docker", "Kubernetes"],
      accent: "Modern workload delivery",
    },
    {
      title: "Languages and Config",
      items: ["Python", "Bash/Shell", "Java", "YAML", "HCL"],
      accent: "Automation and configuration fluency",
    },
    {
      title: "Observability",
      items: ["CloudWatch", "Grafana"],
      accent: "Signals, health, and visibility",
    },
    {
      title: "Security Tooling",
      items: ["Checkmarx", "Black Duck", "Fortify", "SonarQube"],
      accent: "Built for enterprise compliance",
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Capabilities</p>
        <h2>//skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.title}>
            <p className="skill-index">0{index + 1}</p>
            <h3>{group.title}</h3>
            <p className="skill-accent">{group.accent}</p>
            <ul className="skills-compact">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
