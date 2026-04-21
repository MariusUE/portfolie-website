"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import styles from "./page.module.css";
import { projects, type Project } from "./projectsData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <button
              type="button"
              className={styles.projectOpenButton}
              onClick={() => setSelectedProject(project)}
              aria-label={`Details zu ${project.name} öffnen`}
            />
          </article>
        ))}
      </div>

      <ProjectModal
        key={selectedProject?.name ?? "project-modal"}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
