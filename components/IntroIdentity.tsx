import GlowText from "./GlowText";
import styles from "./IntroIdentity.module.css";

type IntroIdentityProps = {
  className?: string;
};

export default function IntroIdentity({ className }: IntroIdentityProps) {
  const rootClassName = className
    ? `${styles.block} ${className}`
    : styles.block;

  return (
    <div className={rootClassName}>
      <p className={styles.eyebrow}>Hello, I&apos;m</p>
      <h1 className={styles.title}>
        <span>Marius </span>
        <GlowText phase="second">Überhagen</GlowText>
      </h1>
    </div>
  );
}
