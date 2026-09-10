import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, BarChart3, BriefcaseBusiness, Cloud, Container,
  GitBranch, Github, Linkedin, Mail, Network, Rocket, Server,
  ShieldCheck, Wrench, Layers3
} from 'lucide-react';
import './styles.css';

const profile = '/profile1.jpg';
const linkedin = 'https://in.linkedin.com/in/chayan-samanta-a01856100';
const github = 'https://github.com/chayan0104?tab=repositories';
const email = 'mailto:chayansamanta8@gmail.com';

const focus = [
  { n:'01', icon:Rocket, title:'Delivery Engineering', text:'CI/CD, release automation and deployment strategies.' },
  { n:'02', icon:Cloud, title:'Cloud & Infrastructure', text:'AWS, Kubernetes, Terraform and hybrid environments.' },
  { n:'03', icon:ShieldCheck, title:'Security & Observability', text:'DevSecOps, monitoring and vulnerability management.' },
  { n:'04', icon:Layers3, title:'Production Engineering', text:'Troubleshooting, incident response and application operations.' },
];

const stack = [
  { icon:Cloud, title:'Cloud & Infrastructure', items:['AWS','EC2','VPC','EKS','ECR','RDS','S3','IAM','SNS','Terraform'] },
  { icon:Container, title:'Containers & Orchestration', items:['Docker','Docker Compose','Kubernetes','Helm'] },
  { icon:GitBranch, title:'CI/CD & Automation', items:['Jenkins','GitHub','Bitbucket','JFrog Artifactory','Bash','Python','Groovy'] },
  { icon:ShieldCheck, title:'DevSecOps & Security', items:['SonarQube','Checkmarx','Fortify','Black Duck','Trivy','Checkov','OWASP'] },
  { icon:BarChart3, title:'Monitoring & Observability', items:['Dynatrace','Prometheus','Grafana','CloudWatch'] },
  { icon:Server, title:'Applications & Platforms', items:['Linux','RHEL','WildFly','JBoss','Java'] },
];

const certifications = [
  { img:'/logos/aws.png', title:'AWS Certified', subtitle:'Solutions Architect – Associate', issuer:'Amazon Web Services', cls:'aws-logo' },
  { img:'/logos/docker.png', title:'Docker Foundations', subtitle:'Professional Certificate', issuer:'Docker, Inc.', cls:'docker-logo' },
  { img:'/logos/ubuntu.png', title:'Ubuntu Linux', subtitle:'Professional Certificate', issuer:'Canonical', cls:'ubuntu-logo' },
  { img:'/logos/microsoft.png', title:'Microsoft Certified', subtitle:'Azure Data Engineer Associate', issuer:'Microsoft', cls:'microsoft-logo' },
];

function SectionTitle({title, eyebrow}) {
  return (
    <div className="section-title">
      <div className="title-left">
        <h2>{title}</h2>
        <span className="title-rule" />
      </div>
      <span className="title-eyebrow">{eyebrow}</span>
    </div>
  );
}

function App() {
  const nav = [
    ['About','#about'], ['Stack','#skills'], ['Experience','#experience'],
    ['Certifications','#certifications'], ['Contact','#contact']
  ];

  return (
    <div className="site">
      <header className="topbar">
        <a href="#top" className="brand">
          <span className="brand-badge">CS</span>
          <span className="brand-copy"><strong>Chayan Samanta</strong><small>DevOps Portfolio</small></span>
        </a>
        <nav className="nav">
          {nav.map(([label,href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap" id="about">
          <div className="hero-main">
            <h1>Chayan <em>Samanta</em></h1>
            <p className="hero-lead">I build, automate and operate reliable<br className="desktop"/> enterprise platforms.</p>

            <div className="hero-meta">
              <div className="meta-item">
                <BriefcaseBusiness size={20}/>
                <span><b>5+ years</b><small>experience</small></span>
              </div>
              <div className="meta-separator"/>
              <div className="meta-item">
                <span className="location-icon">⌖</span>
                <span><b>Kolkata</b><small>India</small></span>
              </div>
            </div>

            <div className="actions">
              <a className="btn primary" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>Connect on LinkedIn</a>
              <a className="btn" href={github} target="_blank" rel="noreferrer"><Github size={18}/>View GitHub</a>
              <a className="btn" href={email}><Mail size={17}/>Mail to Me</a>
            </div>
          </div>

          <div className="hero-photo-area">
            <div className="portrait-wrap"><img src={profile} alt="Chayan Samanta"/></div>
            <div className="hero-aside">
              <div className="stacked-words">AUTOMATE<br/>DEPLOY<br/>OPERATE<br/>IMPROVE</div>
              <span className="aside-rule"/>
              <p>Turning complexity<br/>into reliable systems.</p>
            </div>
          </div>

          <div className="capability-strip">
            {[
              ['CI/CD', GitBranch],
              ['Cloud Infrastructure', Cloud],
              ['On-Premise', Server],
              ['Orchestration', Container],
              ['DevSecOps', ShieldCheck],
              ['Observability', BarChart3],
              ['Production Operations', Wrench]
            ].map(([label, Icon], i) =>
              <React.Fragment key={label}>
                <span className="capability">
                  <Icon size={17} />
                  {label}
                </span>
                {i < 6 && <i />}
              </React.Fragment>
            )}
          </div>
        </section>

        <section className="section wrap" id="focus">
          <SectionTitle title="What I do" eyebrow="FOCUS AREAS"/>
          <div className="focus-grid">
            {focus.map(({n,icon:Icon,title,text}) => (
              <article className="focus-card" key={title}>
                <div className="icon-box"><Icon size={23}/></div>
                <span className="card-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="skills">
          <SectionTitle title="Technical stack" eyebrow="TECHNOLOGIES I WORK WITH"/>
          <div className="stack-grid">
            {stack.map(({icon:Icon,title,items}) => (
              <article className="stack-card" key={title}>
                <div className="stack-title"><Icon size={24}/><h3>{title}</h3></div>
                <div className="pills">{items.map(x=><span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="experience">
          <SectionTitle title="Experience" eyebrow="PROFESSIONAL JOURNEY"/>
          <div className="experience-card">
            <div className="tcs-logo-wrap"><img src="/logos/tcs.png" alt="Tata Consultancy Services"/></div>
            <div className="exp-divider"/>
            <div className="exp-content">
              <h3>Tata Consultancy Services Ltd.</h3>
              <div className="clients">
                <div><span className="client-bullet"/>Citi Bank (APAC/EMEA)</div>
                <div><span className="client-bullet"/>Bajaj General Insurance (Bajaj Allianz)</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="certifications">
          <SectionTitle title="Certifications" eyebrow="CONTINUOUS LEARNING"/>
          <div className="cert-grid">
            {certifications.map(c=>(
              <article className="cert-card" key={c.title}>
                <div className={`cert-logo ${c.cls}`}><img src={c.img} alt=""/></div>
                <h3>{c.title}</h3>
                <strong>{c.subtitle}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap principles" id="principles">
          <SectionTitle title="Engineering approach" eyebrow="PRINCIPLES"/>
          <div className="principle-wrap">
            <div className="principle-grid">
              {[
                [Wrench,'Automate','repetitive work.'],
                [ShieldCheck,'Design for','safe releases.'],
                [BarChart3,'Observe what','reaches production.'],
                [Network,'Troubleshoot','from evidence.'],
                [Layers3,'Prefer simple,','repeatable systems.']
              ].map(([Icon,a,b])=>(
                <div className="principle" key={a}>
                  <Icon size={25}/><span>{a}<small>{b}</small></span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="wrap footer-inner">
          <div className="footer-copy">
            <span className="footer-kicker">LET’S CONNECT</span>
            <h2>Let’s build dependable platforms.</h2>
            <p>Open to DevOps, cloud platform, and reliability engineering opportunities.</p>
            <small>© 2026 Chayan Samanta</small>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn<ArrowUpRight size={13}/></a>
              <a href={github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={13}/></a>
              <a href={email}><Mail size={16}/>Email<ArrowUpRight size={13}/></a>
            </div>
            <div className="footer-motto">Build&nbsp; · &nbsp;Automate&nbsp; · &nbsp;Scale&nbsp; · &nbsp;Deliver <span/></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
