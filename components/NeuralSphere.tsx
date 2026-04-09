"use client";

import dynamic from "next/dynamic";
import styles from "./NeuralSphere.module.css";

const NeuralSphereCanvas = dynamic(() => import("./NeuralSphereCanvas"), {
  ssr: false,
});

export default function NeuralSphere() {
  return (
    <div className={styles.root} aria-hidden="true">
      <NeuralSphereCanvas />
    </div>
  );
}
