"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const currentlyLearning = [
  {
    name: "React & Next.js",
    description: "Full-Stack Webentwicklung mit dem App Router",
    progress: 40,
  },
  {
    name: "TypeScript",
    description: "Typsicheres JavaScript für robusteren Code",
    progress: 35,
  },
  {
    name: "CSS Modules",
    description: "Komponentenbasiertes Styling ohne Utility-Frameworks",
    progress: 45,
  },
  {
    name: "Git & GitHub",
    description: "Versionskontrolle und kollaboratives Arbeiten",
    progress: 50,
  },
];

const certificates = [
  {
    title: "Gesellenbrief — Tischler",
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
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>Über mich</p>
      <h1 className={styles.title}>Vom Holz zum Code</h1>

      <div className={styles.story}>
        <p className={styles.storyText}>
          Mein Weg in die IT war alles andere als geradlinig — und genau das
          macht ihn besonders. Nach meinem Abitur an der Walter-Gropius-Schule
          in Erfurt habe ich eine Ausbildung zum Tischler gemacht und drei Jahre
          lang gelernt, wie man aus einem rohen Stück Holz etwas Präzises und
          Funktionales baut.
        </p>
        <p className={styles.storyText}>
          Was mich dabei am meisten fasziniert hat: der Moment, in dem ein Plan
          zu einem fertigen Produkt wird. Dieses Gefühl hat mich nie losgelassen
          — nur dass ich irgendwann gemerkt habe, dass ich es auch beim
          Programmieren finde. Eine Idee nehmen, sie in Struktur übersetzen und
          am Ende etwas Funktionierendes in den Händen halten.
        </p>
        <p className={styles.storyText}>
          Seit Oktober 2024 studiere ich Angewandte Informatik an der
          Fachhochschule Erfurt. Mein Handwerkerhintergrund hilft mir dabei mehr
          als man denkt: Sorgfalt, Problemlösung und der Anspruch, Dinge richtig
          zu machen — das braucht man an der Werkbank genauso wie vor dem
          Bildschirm.
        </p>
        <p className={`${styles.storyText} ${styles.storyHighlight}`}>
          Aktuell suche ich eine Werkstudentenstelle in der Webentwicklung, um
          das, was ich im Studium lerne, direkt in der Praxis anzuwenden.
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Was ich gerade lerne</h2>
        <div className={styles.learningGrid}>
          {currentlyLearning.map((item) => (
            <div key={item.name} className={styles.learningCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <p className={styles.progressLabel}>
                {item.progress}% — work in progress
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div>
        <h2 className={styles.sectionTitle}>Zertifikate & Abschlüsse</h2>
        <div className={styles.certificateGrid}>
          {certificates.map((cert, index) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setSelectedCert(index)}
              className={styles.certificateCard}
            >
              <div className={styles.certificateMedia}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className={styles.certificateImage}
                />
              </div>
              <div className={styles.certificateBody}>
                <h3 className={styles.certificateTitle}>{cert.title}</h3>
                <p className={styles.certificateMeta}>
                  {cert.issuer} — {cert.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCert !== null && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={styles.modalPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalImageWrap}>
              <Image
                src={certificates[selectedCert].image}
                alt={certificates[selectedCert].title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className={styles.modalImage}
              />
            </div>
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className={styles.closeButton}
              aria-label="Zertifikat schließen"
            >
              <svg
                className={styles.closeIcon}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className={styles.modalCaption}>
              <h3 className={styles.modalTitle}>
                {certificates[selectedCert].title}
              </h3>
              <p className={styles.modalMeta}>
                {certificates[selectedCert].issuer} —{" "}
                {certificates[selectedCert].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
