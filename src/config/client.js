// ╔══════════════════════════════════════════════════════════════╗
// ║           KUNDENDATEN – Hier alle Daten eintragen           ║
// ║         Nur diese Datei muss für jeden Kunden geändert       ║
// ╚══════════════════════════════════════════════════════════════╝

export const CLIENT = {

  // ─── UNTERNEHMEN ───────────────────────────────────────────────
  firmenname:   "[FIRMENNAME]",
  rechtsform:   "[RECHTSFORM]",         // z.B. "GmbH", "e.K.", "Einzelunternehmen"
  branche:      "[BRANCHE]",            // z.B. "Restaurant", "Handwerk", "Beratung"
  slogan:       "[SLOGAN]",             // Kurzer Werbeslogan
  kurztext:     "[KURZE UNTERNEHMENSBESCHREIBUNG – 1–2 Sätze für Hero und Meta-Description]",

  // ─── ADRESSE ───────────────────────────────────────────────────
  strasse:    "[STRAßE & HAUSNUMMER]",
  plz:        "[PLZ]",
  ort:        "[ORT]",
  bundesland: "[BUNDESLAND]",
  land:       "Deutschland",

  // ─── KONTAKT ───────────────────────────────────────────────────
  telefon:    "[TELEFONNUMMER]",        // z.B. "+49 89 123456"
  email:      "[KONTAKT@DOMAIN.DE]",
  website:    "https://[DOMAIN].de",   // Vollständige URL mit https://

  // ─── RECHTLICHES ───────────────────────────────────────────────
  inhaber:                  "[VOR- UND NACHNAME DES INHABERS / GESCHÄFTSFÜHRERS]",
  ustId:                    "[UST-ID]",           // z.B. "DE123456789" – oder null falls nicht vorhanden
  handelsregisternummer:    "[HRB 12345]",        // z.B. "HRB 12345" – oder null
  handelsregistergericht:   "[AMTSGERICHT ORT]",  // z.B. "Amtsgericht München" – oder null
  berufsaufsicht:           null,                 // Zuständige Behörde, falls relevant – sonst null
  berufsbezeichnung:        null,                 // Falls Freiberufler – sonst null

  // ─── SOCIAL MEDIA (null = wird nicht angezeigt) ────────────────
  instagram:  null,   // z.B. "https://instagram.com/username"
  facebook:   null,   // z.B. "https://facebook.com/pagename"
  linkedin:   null,
  xing:       null,

  // ─── SEO ───────────────────────────────────────────────────────
  seoTitle:       "[FIRMENNAME] – [SLOGAN]",
  seoDescription: "[META-BESCHREIBUNG – ca. 150 Zeichen für Google-Suchergebnisse]",
  seoKeywords:    "[KEYWORD1], [KEYWORD2], [KEYWORD3], [ORT]",
  ogImage:        "/images/og-image.jpg",   // Social-Share-Bild (1200x630px)

  // ─── ÖFFNUNGSZEITEN ────────────────────────────────────────────
  oeffnungszeiten: [
    { tag: "Montag",              zeiten: "Geschlossen"          },
    { tag: "Dienstag – Freitag",  zeiten: "09:00 – 18:00 Uhr"   },
    { tag: "Samstag",             zeiten: "10:00 – 16:00 Uhr"   },
    { tag: "Sonntag",             zeiten: "Geschlossen"          },
  ],

  // ─── HERO-SEKTION ──────────────────────────────────────────────
  hero: {
    headingLine1: "[HAUPTÜBERSCHRIFT]",        // z.B. "Qualität die"
    headingLine2: "[HAUPTÜBERSCHRIFT ZEILE 2]", // z.B. "begeistert"
    subheading:   "[HERO-SUBTEXT – kurze Beschreibung des Angebots]",
    ctaPrimary:   "[CTA BUTTON TEXT]",         // z.B. "Jetzt anfragen"
    ctaSecondary: "Mehr erfahren",
    image:        "/images/landing-page.jpg",  // Pfad zum Hero-Bild
  },

  // ─── ÜBER UNS ──────────────────────────────────────────────────
  about: {
    heading:    "Über uns",
    subheading: "[ÜBER UNS ZWISCHENÜBERSCHRIFT]",
    text1:      "[ÜBER UNS TEXT ABSATZ 1 – Hintergrund und Geschichte des Unternehmens]",
    text2:      "[ÜBER UNS TEXT ABSATZ 2 – Werte, Philosophie oder Besonderheiten]",
    image:      "/images/indoor.jpg",
    stats: [
      { value: "[00+]", label: "[STAT 1 BESCHREIBUNG]" }, // z.B. "50+", "Zufriedene Kunden"
      { value: "[00+]", label: "[STAT 2 BESCHREIBUNG]" },
      { value: "[00]",  label: "[STAT 3 BESCHREIBUNG]" },
    ],
  },

  // ─── LEISTUNGEN ────────────────────────────────────────────────
  leistungen: [
    {
      icon:        "star",
      titel:       "[LEISTUNG 1 TITEL]",
      beschreibung:"[Kurze Beschreibung der Leistung 1 – 1–2 Sätze]",
    },
    {
      icon:        "award",
      titel:       "[LEISTUNG 2 TITEL]",
      beschreibung:"[Kurze Beschreibung der Leistung 2 – 1–2 Sätze]",
    },
    {
      icon:        "heart",
      titel:       "[LEISTUNG 3 TITEL]",
      beschreibung:"[Kurze Beschreibung der Leistung 3 – 1–2 Sätze]",
    },
    {
      icon:        "shield",
      titel:       "[LEISTUNG 4 TITEL]",
      beschreibung:"[Kurze Beschreibung der Leistung 4 – 1–2 Sätze]",
    },
  ],

  // ─── GALERIE ───────────────────────────────────────────────────
  galerie: [
    "/images/landing-page.jpg",
    "/images/indoor.jpg",
    "/images/landing-page.jpg",
    "/images/indoor.jpg",
    "/images/landing-page.jpg",
    "/images/indoor.jpg",
  ],

  // ─── TESTIMONIALS ──────────────────────────────────────────────
  testimonials: [
    {
      name:  "[NAME KUNDE 1]",
      rolle: "[ROLLE / ORT]",
      text:  "[KUNDENAUSSAGE 1 – authentisches, positives Zitat]",
    },
    {
      name:  "[NAME KUNDE 2]",
      rolle: "[ROLLE / ORT]",
      text:  "[KUNDENAUSSAGE 2 – authentisches, positives Zitat]",
    },
    {
      name:  "[NAME KUNDE 3]",
      rolle: "[ROLLE / ORT]",
      text:  "[KUNDENAUSSAGE 3 – authentisches, positives Zitat]",
    },
  ],

  // ─── KONTAKTSEITE ──────────────────────────────────────────────
  kontakt: {
    heading:    "Kontakt aufnehmen",
    subheading: "[KONTAKT EINLADUNGSTEXT – z.B. 'Wir freuen uns auf Ihre Nachricht']",
    googleMapsEmbed: null, // Embed-URL von Google Maps oder null
  },

  // ─── DATENSCHUTZ: SERVERSTANDORT ───────────────────────────────
  // Cloudflare Pages hostet in der EU (Frankfurt) wenn möglich
  hostingAnbieter:     "Cloudflare Inc., 101 Townsend St, San Francisco, CA 94107, USA",
  hostingDatenschutz:  "https://www.cloudflare.com/de-de/privacypolicy/",

  // Domainanbieter
  domainAnbieter:      "IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland",
  domainDatenschutz:   "https://www.ionos.de/terms-gtc/datenschutzerklaerung/",

  // Zuständige Datenschutzaufsichtsbehörde (nach Bundesland)
  datenschutzBehoerde: "[ZUSTÄNDIGE DATENSCHUTZ-AUFSICHTSBEHÖRDE IHR BUNDESLAND]",
  datenschutzBehoerdeUrl: "[URL DER AUFSICHTSBEHÖRDE]",
};
