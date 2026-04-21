"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ProjectModal.module.css";
import type { Project } from "./projectsData";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageCount = project?.images.length ?? 0;
  const currentImage = project?.images[activeImage];

  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
          return;
        }

        onClose();
        return;
      }

      if (isFullscreen) {
        return;
      }

      if (imageCount < 2) {
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) => (current - 1 + imageCount) % imageCount);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % imageCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageCount, isFullscreen, onClose, project]);

  if (!project) {
    return null;
  }

  const showControls = imageCount > 1;

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + imageCount) % imageCount);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % imageCount);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} Projektdetails`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{project.name}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Projektansicht schließen"
          >
            <svg
              className={styles.closeIcon}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {currentImage ? (
          <>
            <div className={styles.viewer}>
              <button
                type="button"
                className={styles.imageButton}
                onClick={() => setIsFullscreen(true)}
                aria-label="Projektbild im Vollbildmodus anzeigen"
              >
                <Image
                  src={currentImage.src}
                  alt={`${project.name}: ${currentImage.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 960px"
                  className={styles.image}
                  priority
                />
              </button>

              {showControls && (
                <>
                  <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.arrowPrevious}`}
                    onClick={showPreviousImage}
                    aria-label="Vorheriges Projektbild anzeigen"
                  >
                    <svg
                      className={styles.arrowIcon}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.arrowNext}`}
                    onClick={showNextImage}
                    aria-label="Nächstes Projektbild anzeigen"
                  >
                    <svg
                      className={styles.arrowIcon}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className={styles.caption}>
              <p className={styles.description}>{currentImage.description}</p>
              {showControls && (
                <p className={styles.counter}>
                  {activeImage + 1} / {imageCount}
                </p>
              )}
            </div>
          </>
        ) : (
          <p className={styles.emptyState}>
            Für dieses Projekt sind noch keine Detailbilder hinterlegt.
          </p>
        )}
      </div>

      {isFullscreen && currentImage && (
        <button
          type="button"
          className={styles.fullscreenOverlay}
          onClick={(event) => {
            event.stopPropagation();
            setIsFullscreen(false);
          }}
          aria-label="Vollbildmodus schließen"
        >
          <Image
            src={currentImage.src}
            alt={`${project.name}: ${currentImage.description}`}
            fill
            sizes="100vw"
            className={styles.fullscreenImage}
            priority
          />
          <span className={styles.fullscreenHint} aria-hidden="true">
            ESC
          </span>
        </button>
      )}
    </div>
  );
}
