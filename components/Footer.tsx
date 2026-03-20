import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">
          © {currentYear} Marius. Alle Rechte vorbehalten.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/MariusUE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-[#1a3fff] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/DEIN-PROFIL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-[#1a3fff] transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:deine@email.de"
            className="text-sm text-neutral-500 hover:text-[#1a3fff] transition-colors"
          >
            E-Mail
          </Link>
        </div>
      </div>
    </footer>
  );
}
