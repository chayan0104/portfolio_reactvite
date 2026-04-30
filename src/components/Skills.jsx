export default function Skills() {
  const skillGroups = [
    {
      title: "Platforms & Infrastructure",
      items: ["AWS", "On-Prem", "Infrastructure Provisioning"],
      accent: "Cloud and on-premises solutions",
    },
    {
      title: "Containers & Orchestration",
      items: ["Docker", "Docker Compose", "Kubernetes", "Helm"],
      accent: "Modern workload deployment",
    },
    {
      title: "CI/CD & Release Management",
      items: ["Jenkins", "AWS CodePipeline", "CodeDeploy", "GitHub", "Bitbucket"],
      accent: "Enterprise delivery pipelines",
    },
    {
      title: "Secure Infrastructure Automation",
      items: [
        "Terraform",
        "CloudFormation",
        "HCL",
        "Checkmarx",
        "Black Duck",
        "Fortify",
        "JFrog",
        "Trivy",
      ],
      accent: "Provisioning, compliance, and security guardrails",
    },
    {
      title: "Monitoring & Observability",
      items: ["CloudWatch", "Prometheus", "Grafana", "Dynatrace"],
      accent: "Full-stack visibility and insights",
    },
    {
      title: "Scripting & Programming",
      items: ["Python", "Bash/Shell", "YAML", "Java", "Groovy"],
      accent: "Automation and configuration",
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Technical Stack</p>
        <h2>Skills & Tools</h2>
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
