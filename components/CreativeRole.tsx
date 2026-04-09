import GlowText from "./GlowText";
import styles from "./CreativeRole.module.css";

type CreativeRoleProps = {
  className?: string;
};

export default function CreativeRole({ className }: CreativeRoleProps) {
  const rootClassName = className
    ? `${styles.block} ${className}`
    : styles.block;

  return (
    <div className={rootClassName}>
      <p className={styles.eyebrow}>Creative</p>
      <h2 className={styles.title}>
        <span className={styles.srOnly}>Developer &amp; Designer</span>
        <span className={styles.wordStack} aria-hidden="true">
          <GlowText phase="first">Developer</GlowText>
          <span>Designer</span>
        </span>
        <span className={styles.ampersand} aria-hidden="true">
          &amp;
        </span>
      </h2>
    </div>
  );
}
