import styles from "./page.module.css";

const projects = [
  {
    name: "FC Traumverein",
    type: "Uni - Projekt",
    description:
      "Webapplikation für fiktiven Fußballverein. Mit Forumsbereich. Erstellt mit PHP im Backend und HTML, CSS und JS im Frontend.",
  },
];

export default function Projects() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Projekte</h1>
        <p className={styles.text}>
          Eine Auswahl von Arbeiten, an denen ich in Studium und Praxis
          gearbeitet habe.
        </p>
      </div>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.projectCard}>
            <p className={styles.projectType}>{project.type}</p>
            <h2 className={styles.projectTitle}>{project.name}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
