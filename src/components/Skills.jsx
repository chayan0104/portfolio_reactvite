export default function Skills() {
  const skillGroups = [
    {
      title: "Platforms & Infrastructure",
      items: ["AWS", "On-Prem RHEL", "Linux", "Infrastructure Provisioning"],
      accent: "Cloud and on-prem foundations for regulated production systems",
    },
    {
      title: "Containers & Orchestration",
      items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "ECR", "EKS"],
      accent: "Containerized workloads, orchestration, and deployment control",
    },
    {
      title: "CI/CD & Version Control",
      items: ["Jenkins", "AWS CodePipeline", "CodeDeploy", "GitHub", "Bitbucket" ,"Jfrog" ],
      accent: "Automated release pipelines with controlled enterprise delivery",
    },
    {
      title: "Infrastructure as Code & Security",
      items: [
        "Terraform",
        "Sonarqube",
        "Vault",
        "HCL",
        "Checkmarx",
        "Black Duck",
        "Fortify",
        "JFrog",
        "Trivy",
      ],
      accent: "Provisioning, compliance, and DevSecOps guardrails",
    },
    {
      title: "Monitoring & Logging",
      items: ["CloudWatch", "Prometheus", "Grafana", "Dynatrace","New Relic"] ,
      accent: "Runtime visibility, alerting, and performance diagnostics",
    },
    {
      title: "Scripting, Programming & Practice",
      items: ["Python", "Bash/Shell", "YAML", "Groovy", "SRE", "DevOps"],
      accent: "Automation, troubleshooting, and reliability engineering practice",
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2>Technical stack</h2>
      </div>

      <div className="paper-panel skills-shell">
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
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
      </div>
    </section>
  );
}
