export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Kontakt</h1>
        <p className="text-lg text-neutral-500 leading-relaxed mb-8">
          Du möchtest mit mir zusammenarbeiten oder hast eine Frage?
          Schreib mir gerne eine Nachricht.
        </p>
        <a
          href="mailto:deine@email.de"
          className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors inline-block"
        >
          E-Mail schreiben
        </a>
      </div>
    </section>
  );
}
