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
      <h1 className={styles.title}>Vom Holz zum Code</h1>

      <div className={styles.story}>
        <p className={styles.storyText}>
          Mein Weg in die IT war alles andere als geradlinig - und genau das
          macht ihn besonders. Nach meinem Abitur an der Walter-Gropius-Schule
          in Erfurt habe ich eine Ausbildung zum Tischler gemacht und drei Jahre
          lang gelernt, wie man aus einem rohen Stück Holz etwas Präzises und
          Funktionales baut.
        </p>
        <p className={styles.storyText}>
          Was mich dabei am meisten fasziniert hat: der Moment, in dem ein Plan
          zu einem fertigen Produkt wird. Dieses Gefühl hat mich nie losgelassen
          - nur dass ich irgendwann gemerkt habe, dass ich es auch beim
          Programmieren finde. Eine Idee nehmen, sie in Struktur übersetzen und
          am Ende etwas Funktionierendes in den Händen halten.
        </p>
        <p className={styles.storyText}>
          Seit Oktober 2024 studiere ich Angewandte Informatik an der
          Fachhochschule Erfurt. Mein Handwerkerhintergrund hilft mir dabei mehr
          als man denkt: Sorgfalt, Problemlösung und der Anspruch, Dinge richtig
          zu machen - das braucht man an der Werkbank genauso wie vor dem
          Bildschirm.
        </p>
        <p className={`${styles.storyText} ${styles.storyHighlight}`}>
          Aktuell suche ich eine Werkstudentenstelle in der Webentwicklung, um
          das, was ich im Studium lerne, direkt in der Praxis anzuwenden.
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
