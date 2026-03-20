import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Subtle blue glow behind the photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a3fff] opacity-15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid grid-cols-3 items-end min-h-screen pb-16 pt-24">
        {/* Left column - Name + Social Icons */}
        <div className="flex flex-col justify-between h-full pb-4">
          <div className="mt-auto mb-auto">
            <p className="text-[#1a3fff] text-sm font-medium tracking-wide mb-2">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Marius Überhagen
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-5">
            <a
              href="https://www.linkedin.com/in/marius-ueberhagen-ef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#1a3fff] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/MariusUE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#1a3fff] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="marius.ue@gmx.de"
              className="text-neutral-500 hover:text-[#1a3fff] transition-colors"
              aria-label="E-Mail"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Center column - Photo */}
        <div className="flex justify-center items-end relative">
          <div className="relative w-[280px] h-[450px] sm:w-[340px] sm:h-[520px]">

            <Image
                src="/images/ProfilePicture-NoBackground.png"
                alt="Marius"
                fill
                sizes="(max-width: 640px) 280px, 340px"
                className="object-cover object-top"
                priority
              />

            {/* Blur-Fade am unteren Rand */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right column - Title + Resume */}
        <div className="flex flex-col justify-between h-full pb-4 text-right">
          <div className="mt-auto mb-auto">
            <p className="text-neutral-400 text-sm font-medium tracking-wide mb-2">
              Creative
            </p>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="text-[#1a3fff]">Developer</span>
              <br />
              <span className="text-white">& Designer</span>
            </h2>
          </div>

          {/* Resume Link */}
          <Link
            href="/resume"
            target="_blank"
            className="text-neutral-500 hover:text-[#1a3fff] transition-colors text-sm font-medium tracking-wide flex items-center justify-end gap-2"
          >
            RESUME
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
