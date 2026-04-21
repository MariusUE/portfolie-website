import CertificatesGallery from "./CertificatesGallery";
import styles from "./page.module.css";

const skills = [
  {
    name: "React & Next.js",
    description: "Full-Stack Webentwicklung mit dem App Router",
  },
  {
    name: "TypeScript",
    description: "Typsicheres JavaScript für robusteren Code",
  },
  {
    name: "CSS Modules",
    description: "Komponentenbasiertes Styling ohne Utility-Frameworks",
  },
  {
    name: "Git & GitHub",
    description: "Versionskontrolle und kollaboratives Arbeiten",
  },
];

const certificates = [
  {
    title: "Gesellenbrief - Tischler",
    issuer: "Handwerkskammer Erfurt",
    date: "Juli 2023",
    image: "/images/gesellenbrief.jpg",
  },
  {
    title: "Allgemeine Hochschulreife",
    issuer: "Walter-Gropius-Schule Erfurt",
    date: "Juli 2020",
    image: "/images/hochschulzeugnis.png",
  },
  {
    title: "Einführung in C++",
    issuer: "Sololearn",
    date: "Dezember 2024",
    image: "/images/cpp-zertifikat.jpg",
  },
];

export default function About() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Über mich</p>
      <h1 className={styles.title}>
        Effiziente Softwareentwicklung durch moderne Technologien
      </h1>

      <div className={styles.story}>
        <p className={styles.storyText}>
          Software soll unser Leben einfacher machen und Prozesse effizienter
          gestalten. Genau an diesem Punkt möchte ich ansetzen und aktiv dazu
          beitragen, mit gut durchdachten Lösungen echten Mehrwert zu schaffen.
        </p>
        <p className={styles.storyText}>
          Mit der richtigen Idee lassen sich komplexe Herausforderungen lösen
          und innovative Systeme entwickeln. Gleichzeitig gehört für mich auch
          der verantwortungsvolle Umgang mit diesen Systemen dazu. Insbesondere
          deren Absicherung gegen typische Angriffsvektoren wie Cross-Site
          Scripting (XSS) oder SQL-Injection. Diese Kombination aus Kreativität
          und Sicherheitsbewusstsein macht für mich den Reiz der
          Softwareentwicklung aus.
        </p>
        <p className={styles.storyText}>
          Außerdem setze ich mich intensiv mit Künstlicher Intelligenz
          auseinander, um neue Ansätze zu erschließen und Entwicklungsprozesse
          gezielt zu optimieren. Aus genau diesem Grund finde ich es wichtig,
          sie verantwortungsvoll und mit Bedacht zu nutzen. Um ein fundiertes
          und praxisnahes Verständnis zu entwickeln, bilde ich mich in diesem
          Bereich kontinuierlich weiter und experimentiere mit verschiedenen
          Tools und Methoden.
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Meine Skills</h2>
        <div className={styles.skillGrid}>
          {skills.map((item) => (
            <div key={item.name} className={styles.skillCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div>
        <h2 className={styles.sectionTitle}>Zertifikate & Abschlüsse</h2>
        <CertificatesGallery certificates={certificates} />
      </div>
    </section>
  );
}
