import styles from "./GlowText.module.css";

type GlowTextProps = {
  children: string;
  className?: string;
  phase?: "first" | "second";
};

export default function GlowText({ children, className, phase }: GlowTextProps) {
  const rootClassName = className
    ? `${styles.text} ${className}`
    : styles.text;

  return (
    <span className={rootClassName} data-phase={phase} data-text={children}>
      {children}
    </span>
  );
}
