import { site } from "@/data/site";

export const metadata = { title: `About | ${site.name}` };

export default function About() {
  return (
    <section className="section page">
      <h1>About me</h1>
      <div className="prose">
        {site.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <h2>Skills</h2>
      <ul className="tags">
        {site.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
