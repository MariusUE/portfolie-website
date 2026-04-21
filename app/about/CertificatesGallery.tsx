"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

type CertificatesGalleryProps = {
  certificates: Certificate[];
};

export default function CertificatesGallery({
  certificates,
}: CertificatesGalleryProps) {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <>
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
                {cert.issuer} - {cert.date}
              </p>
            </div>
          </button>
        ))}
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
                {certificates[selectedCert].issuer} -{" "}
                {certificates[selectedCert].date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
