export type ProjectImageEntry = {
  src: string;
  description: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  images: ProjectImageEntry[];
};

export const projects: Project[] = [
  {
    name: "FC Traumverein",
    type: "Uni - Projekt",
    description:
      "Webapplikation für fiktiven Fußballverein. Mit Forumsbereich. Erstellt mit PHP im Backend und HTML, CSS und JS im Frontend.",
    images: [
      {
        src: "/images/Projekte/Traumverein/HomeAdmin.png",
        description:
          "Admin-Startseite mit zentralem Einstieg in die Verwaltungsbereiche des Vereins.",
      },
      {
        src: "/images/Projekte/Traumverein/Login_vor_anmeldung.png",
        description:
          "Login-Ansicht vor der Anmeldung mit klarer Trennung zwischen Zugang und Registrierung.",
      },
      {
        src: "/images/Projekte/Traumverein/Nach_login.png",
        description:
          "Ansicht nach erfolgreicher Anmeldung mit angepasster Navigation für eingeloggte Nutzer.",
      },
      {
        src: "/images/Projekte/Traumverein/KaderSeite.png",
        description:
          "Kaderseite mit übersichtlicher Darstellung der Spieler und Vereinsinformationen.",
      },
      {
        src: "/images/Projekte/Traumverein/StatischSpielplan.png",
        description:
          "Statischer Spielplan zur schnellen Orientierung über anstehende Begegnungen.",
      },
      {
        src: "/images/Projekte/Traumverein/Diskussion_2.png",
        description:
          "Forumsbereich für Diskussionen und Austausch innerhalb der Vereinscommunity.",
      },
      {
        src: "/images/Projekte/Traumverein/ForumPostAnsicht.png",
        description:
          "Detailansicht eines Forumbeitrags mit Antworten und nachvollziehbarer Thread-Struktur.",
      },
      {
        src: "/images/Projekte/Traumverein/AdminManagePosts.png",
        description:
          "Administrationsansicht zur Moderation und Verwaltung von Forumbeiträgen.",
      },
      {
        src: "/images/Projekte/Traumverein/Passwort_vergessen.png",
        description:
          "Passwort-zurücksetzen-Ansicht als Teil des Nutzerzugangs und Account-Flows.",
      },
    ],
  },
];
