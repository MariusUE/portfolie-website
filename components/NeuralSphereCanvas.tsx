"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./NeuralSphereCanvas.module.css";

function fibonacciSphere(count: number, radius = 1) {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;

    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ),
    );
  }

  return points;
}

function buildEdges(points: THREE.Vector3[], maxDist = 0.55, maxNeighbors = 4) {
  const positions: number[] = [];

  for (let i = 0; i < points.length; i += 1) {
    const distances = points
      .map((point, j) => ({ j, d: points[i].distanceTo(point) }))
      .filter((value) => value.j !== i && value.d < maxDist)
      .sort((a, b) => a.d - b.d)
      .slice(0, maxNeighbors);

    for (const { j } of distances) {
      if (j > i) {
        positions.push(...points[i].toArray());
        positions.push(...points[j].toArray());
      }
    }
  }

  return new Float32Array(positions);
}

function SphereNetwork({ nodeCount = 180, radius = 1.5 }: { nodeCount?: number; radius?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const { points, edges } = useMemo(() => {
    const spherePoints = fibonacciSphere(nodeCount, radius);

    return {
      points: spherePoints,
      edges: buildEdges(spherePoints),
    };
  }, [nodeCount, radius]);

  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(points.flatMap((point) => point.toArray()));
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

    return geometry;
  }, [points]);

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(edges, 3));

    return geometry;
  }, [edges]);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.02;
    groupRef.current.rotation.x += delta * 0.006;
  });

  return (
    <group ref={groupRef} position={[-0.1, -0.1, 0.3]}>
      <points geometry={pointsGeometry}>
        <pointsMaterial
          color="#8fb8ff"
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points geometry={pointsGeometry}>
        <pointsMaterial
          color="#a0c4ff"
          size={0.022}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#6688dd" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

export default function NeuralSphereCanvas() {
  return (
    <Canvas
      className={styles.canvas}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <SphereNetwork nodeCount={180} radius={0.98} />
    </Canvas>
  );
}
