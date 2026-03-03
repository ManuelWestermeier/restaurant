# 🏢 Website-Template – Kundendaten & Anleitung

## ✅ Für jeden neuen Kunden: Nur EINE Datei ändern

```
src/config/client.js
```

Alle Texte, Kontaktdaten, rechtlichen Angaben und Konfigurationen befinden sich
in dieser einen Datei. Einfach ausfüllen, fertig.

---

## 🚀 Installation & Start

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev

# 3. Produktions-Build erstellen
npm run build
```

---

## 📝 Pflichtfelder in `client.js`

| Feld | Beschreibung | Beispiel |
|------|-------------|---------|
| `firmenname` | Offizieller Firmenname | `"Mustermann GmbH"` |
| `rechtsform` | Rechtsform | `"GmbH"`, `"e.K."`, `""` |
| `branche` | Branche/Tätigkeitsfeld | `"Restaurant"`, `"Handwerk"` |
| `slogan` | Kurzer Werbespruch | `"Qualität seit 1990"` |
| `kurztext` | 1-2 Sätze Beschreibung | Für Hero und Footer |
| `strasse` | Straße und Hausnummer | `"Musterstraße 1"` |
| `plz` | Postleitzahl | `"80331"` |
| `ort` | Stadtname | `"München"` |
| `telefon` | Telefonnummer | `"+49 89 123456"` |
| `email` | E-Mail-Adresse | `"info@firma.de"` |
| `website` | Vollständige URL | `"https://firma.de"` |
| `inhaber` | Name des Inhabers/GF | `"Max Mustermann"` |

---

## ⚖️ Rechtliche Pflichtfelder (Impressum)

| Feld | Wann nötig |
|------|-----------|
| `ustId` | Wenn umsatzsteuerpflichtig |
| `handelsregisternummer` + `handelsregistergericht` | Bei GmbH, UG, AG, e.K. |
| `berufsaufsicht` | Bei regulierten Berufen (Anwalt, Arzt, Steuerberater...) |

---

## 📸 Bilder ersetzen

Bilder im Ordner `public/images/` ersetzen:

| Dateiname | Verwendung | Empfohlene Größe |
|-----------|-----------|-----------------|
| `landing-page.jpg` | Hero-Hintergrund | 1920×1080px |
| `indoor.jpg` | Über-uns-Bild | 800×600px |
| `og-image.jpg` | Social-Media-Vorschau | **1200×630px** (Pflicht!) |
| `favicon.ico` | Browser-Tab-Icon | 32×32px |

---

## 🌐 Cloudflare Pages Deployment

1. Repository auf GitHub/GitLab pushen
2. Cloudflare Pages → "Create application" → "Connect to Git"
3. Build-Einstellungen:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Fertig! Die Datei `public/_redirects` sorgt für korrektes SPA-Routing.

---

## 🔗 Domain von IONOS verbinden

1. In Cloudflare Pages: "Custom domains" → Domain hinzufügen
2. Bei IONOS: DNS-Einstellungen
   - CNAME-Record: `@` → `[ihr-projekt].pages.dev`
   - Oder A-Record auf Cloudflare-IPs
3. SSL wird automatisch von Cloudflare bereitgestellt

---

## 📊 SEO-Checkliste nach Anpassung

- [ ] `index.html` – alle `[PLATZHALTER]` ersetzen (Titel, Description, Domain)
- [ ] `public/robots.txt` – Domain eintragen
- [ ] `public/sitemap.xml` – Domain eintragen
- [ ] `public/images/og-image.jpg` – Social-Share-Bild hochladen (1200×630px)
- [ ] `client.js` – `seoTitle`, `seoDescription`, `seoKeywords` befüllen
- [ ] JSON-LD in `index.html` anpassen (Öffnungszeiten, Typ)

---

## 📱 Datenschutz-Checkliste (DSGVO)

- [ ] Cloudflare AVV (Auftragsverarbeitungsvertrag) abschließen:
  https://www.cloudflare.com/de-de/gdpr/introduction/
- [ ] `datenschutzBehoerde` + URL für Ihr Bundesland eintragen
- [ ] Kontaktformular-Backend bei Bedarf einrichten (aktuell: mailto-Fallback)
- [ ] Prüfen ob ein Datenschutzbeauftragter benötigt wird
  (Pflicht ab 20 Mitarbeitern mit Datenzugang oder bei bestimmten Branchen)

---

## 🎨 Design anpassen

Farben & Fonts in `tailwind.config.js` → `theme.extend.colors.brand` und `fontFamily`:

```js
// Hauptfarbe ändern (aktuell: Gold #c8a04a)
gold: '#c8a04a',      // → z.B. '#2563eb' für Blau
```

---

## 📦 Tech-Stack

| Technologie | Version | Zweck |
|-------------|---------|-------|
| React | 19 | UI-Framework |
| Vite | 7 | Build-Tool |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animationen |
| React Router DOM | 7 | Routing |
| @fontsource | 5 | Lokale Fonts (DSGVO) |

---

*Template erstellt für professionelle, rechtssichere deutsche Unternehmenswebsites.*
*Hosted on Cloudflare Pages · Domain via IONOS · Fonts lokal (DSGVO-konform)*
