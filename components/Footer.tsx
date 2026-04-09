import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {currentYear} Marius. Alle Rechte vorbehalten.
        </p>

        <div className={styles.links}>
          <a
            href="https://github.com/MariusUE"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/marius-ueberhagen-ef"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="mailto:marius.ue@gmx.de" className={styles.link}>
            E-Mail
          </a>
        </div>
      </div>
    </footer>
  );
}
