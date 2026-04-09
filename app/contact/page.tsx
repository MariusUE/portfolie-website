import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Kontakt</h1>
        <p className={styles.text}>
          Du möchtest mit mir zusammenarbeiten oder hast eine Frage? Schreib mir
          gerne eine Nachricht.
        </p>
        <a href="mailto:marius.ue@gmx.de" className={styles.button}>
          E-Mail schreiben
        </a>
      </div>
    </section>
  );
}
