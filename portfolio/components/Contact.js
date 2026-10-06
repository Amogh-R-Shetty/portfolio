import { site } from "@/data/site";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's work together</h2>
      <p>
        Hiring, or have a project in mind? Send me a short message and I'll
        reply within a day.
      </p>
      <div className="actions">
        <a className="btn" href={`mailto:${site.email}`}>Email me</a>
        <a className="btn btn-ghost" href={site.resume} target="_blank" rel="noreferrer">
          View résumé
        </a>
        <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn btn-ghost" href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
