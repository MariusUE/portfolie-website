import Link from "next/link";

const experience = [
  {
    role: "Tischler",
    company: "Garant Türen & Zargen GmbH",
    period: "2024",
    description:
      "Mitarbeit in der Produktion bei einem führenden Türenhersteller.",
  },
  {
    role: "Tischler / Gesellenbrief",
    company: "Pranke-Plitt Möbelbau GmbH",
    period: "2023 – 2024",
    description:
      "Individuelle Möbelanfertigung und handwerkliche Präzisionsarbeit im Möbelbau.",
  },
  {
    role: "Ausbildung zum Tischler",
    company: "Tischlerei Fischer GmbH",
    period: "2020 – 2023",
    description:
      "Dreijährige Berufsausbildung mit Gesellenprüfung. Holzverarbeitung, CNC, Oberflächentechnik.",
  },
];

const education = [
  {
    degree: "B.Sc. Angewandte Informatik",
    school: "Fachhochschule Erfurt",
    period: "seit 10/2024",
    detail: "3. Fachsemester — Gesamtnote: 1,7",
  },
  {
    degree: "Allgemeine Hochschulreife (Abitur)",
    school: "Walter-Gropius-Schule Erfurt — BGy Bautechnik",
    period: "2017 – 2020",
    detail: "",
  },
];

const skills = [
  {
    category: "Sprachen & Frameworks",
    items: ["PHP", "SQL", "C++", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Web & Datenbanken",
    items: ["HTML / CSS", "Tailwind CSS", "MySQL"],
  },
  {
    category: "Tools & Systeme",
    items: ["Git / GitHub", "VS Code", "Linux", "MS Office"],
  },
  {
    category: "Konzepte",
    items: ["MVC-Pattern", "OOP", "Responsive Design", "Datenbankmodellierung"],
  },
];

export default function Resume() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-[#1a3fff] text-sm font-medium tracking-wide mb-2">
            Resume
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Marius Überhagen
          </h1>
          <p className="text-neutral-400 mt-3">
            Informatik-Student & Webentwickler — Erfurt
          </p>
        </div>
        <a
          href="/resume.zip"
          download
          className="flex items-center gap-2 px-5 py-2.5 border border-neutral-700 rounded-lg text-sm text-neutral-300 hover:border-[#1a3fff] hover:text-[#1a3fff] transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          ZIP Download
        </a>
      </div>

      {/* Berufserfahrung */}
      <div className="mb-16">
        <h2 className="text-sm font-medium text-[#1a3fff] tracking-wide uppercase mb-8">
          Berufserfahrung
        </h2>
        <div className="space-y-10">
          {experience.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[180px_1fr] gap-8 group"
            >
              <span className="text-sm text-neutral-500 pt-1">
                {item.period}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#1a3fff] transition-colors">
                  {item.role}
                </h3>
                <p className="text-neutral-400 text-sm mt-0.5">
                  {item.company}
                </p>
                <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trennlinie */}
      <div className="h-[1px] bg-neutral-800 mb-16" />

      {/* Ausbildung */}
      <div className="mb-16">
        <h2 className="text-sm font-medium text-[#1a3fff] tracking-wide uppercase mb-8">
          Ausbildung
        </h2>
        <div className="space-y-10">
          {education.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[180px_1fr] gap-8 group"
            >
              <span className="text-sm text-neutral-500 pt-1">
                {item.period}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#1a3fff] transition-colors">
                  {item.degree}
                </h3>
                <p className="text-neutral-400 text-sm mt-0.5">
                  {item.school}
                </p>
                {item.detail && (
                  <p className="text-neutral-500 text-sm mt-2">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trennlinie */}
      <div className="h-[1px] bg-neutral-800 mb-16" />

      {/* Skills */}
      <div>
        <h2 className="text-sm font-medium text-[#1a3fff] tracking-wide uppercase mb-8">
          Skills & Technologien
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="text-sm font-medium text-neutral-300 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-800/60 border border-neutral-700/50 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
