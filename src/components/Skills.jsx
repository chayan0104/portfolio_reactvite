export default function Skills() {
  const skillGroups = [
    {
      title: "Cloud and Infrastructure",
      items: ["AWS", "Azure", "Terraform", "CloudFormation"],
    },
    {
      title: "CI/CD and Source Control",
      items: ["Jenkins", "AWS CodePipeline", "CodeDeploy", "GitHub", "Bitbucket"],
    },
    {
      title: "Containers and Runtime",
      items: ["Docker", "Kubernetes"],
    },
    {
      title: "Languages and Config",
      items: ["Python", "Bash/Shell", "Java", "YAML", "HCL"],
    },
    {
      title: "Observability",
      items: ["CloudWatch", "Grafana"],
    },
    {
      title: "Security Tooling",
      items: ["Checkmarx", "Black Duck", "Fortify", "SonarQube"],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Capabilities</p>
        <h2>//skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
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
