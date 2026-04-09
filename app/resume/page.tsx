import styles from "./page.module.css";

const experience = [
  {
    role: "Tischler",
    company: "Garant Türen & Zargen GmbH",
    period: "2024",
    description:
      "Mitarbeit in der Produktion bei einem führenden Türenhersteller.",
  },
  {
    role: "Tischler / Gesellenbrief",
    company: "Pranke-Plitt Möbelbau GmbH",
    period: "2023 – 2024",
    description:
      "Individuelle Möbelanfertigung und handwerkliche Präzisionsarbeit im Möbelbau.",
  },
  {
    role: "Ausbildung zum Tischler",
    company: "Tischlerei Fischer GmbH",
    period: "2020 – 2023",
    description:
      "Dreijährige Berufsausbildung mit Gesellenprüfung. Holzverarbeitung, CNC, Oberflächentechnik.",
  },
];

const education = [
  {
    degree: "B.Sc. Angewandte Informatik",
    school: "Fachhochschule Erfurt",
    period: "seit 10/2024",
    detail: "3. Fachsemester — Gesamtnote: 1,7",
  },
  {
    degree: "Allgemeine Hochschulreife (Abitur)",
    school: "Walter-Gropius-Schule Erfurt — BGy Bautechnik",
    period: "2017 – 2020",
    detail: "",
  },
];

const skills = [
  {
    category: "Sprachen & Frameworks",
    items: ["PHP", "SQL", "C++", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Web & Datenbanken",
    items: ["HTML / CSS", "CSS Modules", "MySQL"],
  },
  {
    category: "Tools & Systeme",
    items: ["Git / GitHub", "VS Code", "Linux", "MS Office"],
  },
  {
    category: "Konzepte",
    items: ["MVC-Pattern", "OOP", "Responsive Design", "Datenbankmodellierung"],
  },
];

export default function Resume() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>Resume</p>
          <h1 className={styles.title}>Marius Überhagen</h1>
          <p className={styles.subtitle}>
            Informatik-Student & Webentwickler — Erfurt
          </p>
        </div>
        <a href="/resume.zip" download className={styles.downloadLink}>
          <svg
            className={styles.downloadIcon}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          ZIP Download
        </a>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Berufserfahrung</h2>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={`${item.role}-${item.period}`} className={styles.timelineItem}>
              <span className={styles.period}>{item.period}</span>
              <div>
                <h3 className={styles.entryTitle}>{item.role}</h3>
                <p className={styles.entrySub}>{item.company}</p>
                <p className={styles.entryText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Ausbildung</h2>
        <div className={styles.timeline}>
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.period}`}
              className={styles.timelineItem}
            >
              <span className={styles.period}>{item.period}</span>
              <div>
                <h3 className={styles.entryTitle}>{item.degree}</h3>
                <p className={styles.entrySub}>{item.school}</p>
                {item.detail && <p className={styles.entryText}>{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div>
        <h2 className={styles.sectionTitle}>Skills & Technologien</h2>
        <div className={styles.skillsGrid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.skillGroup}>
              <h3 className={styles.skillTitle}>{group.category}</h3>
              <div className={styles.chipList}>
                {group.items.map((item) => (
                  <span key={item} className={styles.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
