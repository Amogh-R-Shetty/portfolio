import Link from "next/link";
import { site, projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="status">
          <span className="dot" aria-hidden="true" />
          {site.available}
        </p>
        <p className="hello">Hello, I'm</p>
        <h1>{site.name}</h1>
        <p className="hero-role">{site.role}</p>
        <p className="lead">{site.tagline}</p>
        <div className="actions">
          <a href="#contact" className="btn">Hire me</a>
          <Link href="/projects" className="btn btn-ghost">See my work</Link>
        </div>
        <dl className="stats">
          {site.highlights.map((h) => (
            <div key={h.label}>
              <dt>{h.label}</dt>
              <dd>{h.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <h2>What I can do for you</h2>
        <div className="services">
          {site.services.map((s) => (
            <div key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Selected work</h2>
        <ul className="list">
          {projects.slice(0, 2).map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
            </li>
          ))}
        </ul>
        <p><Link href="/projects" className="textlink">View all projects</Link></p>
      </section>
    </>
  );
}