export default function Skills() {
  const skills = [
    "AWS",
    "Azure",
    "Terraform",
    "CloudFormation",
    "Jenkins",
    "AWS CodePipeline",
    "CodeDeploy",
    "GitHub",
    "Bitbucket",
    "Docker",
    "Kubernetes",
    "Python",
    "Bash/Shell",
    "Java",
    "YAML",
    "HCL",
    "CloudWatch",
    "Grafana",
    "Checkmarx",
    "Black Duck",
    "Fortify",
    "SonarQube",
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Capabilities</p>
        <h2>//skills</h2>
      </div>

      <div className="glass-panel skills-panel">
        <ul className="skills-compact">
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
