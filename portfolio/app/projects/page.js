import { site, projects } from "@/data/site";

export const metadata = { title: `Projects | ${site.name}` };

export default function Projects() {
  return (
    <section className="section page">
      <h1>Projects</h1>
      <p className="lead">Things I've built, with the code behind each one.</p>
      <ul className="list">
        {projects.map((p) => (
          <li key={p.title} className="project">
            <div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <p className="result">{p.result}</p>
              <p className="links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live site</a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Source code</a>}
              </p>
            </div>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
