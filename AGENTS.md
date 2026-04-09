<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Styling Policy

Dieses Repository nutzt kein Tailwind CSS.
Für Styling sind CSS Modules Pflicht: Jede Page und jede wiederverwendbare Komponente erhält eine eigene `*.module.css` Datei.
`app/globals.css` ist nur für globale Basisregeln, CSS-Variablen und Resets erlaubt.
