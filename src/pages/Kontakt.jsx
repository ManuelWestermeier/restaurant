import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { CLIENT } from '../config/client';
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '../utils/animations';

// ── Kontaktkarte ────────────────────────────────────────────────
function KontaktKarte({ icon, label, children, href }) {
  const inner = (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(154,114,40,0.10)' }}
      className="bg-brand-card border border-brand-border p-8 flex flex-col gap-5 h-full transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-full bg-brand-gold-pale flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-gold mb-2">
          {label}
        </p>
        <div className="font-sans text-sm text-brand-secondary leading-relaxed">
          {children}
        </div>
      </div>
      {href && (
        <div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase text-brand-muted group-hover:text-brand-gold transition-colors duration-300">
          Öffnen
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </motion.div>
  );

  if (href) return <a href={href} className="block no-underline">{inner}</a>;
  return inner;
}

export default function Kontakt() {
  return (
    <PageWrapper>

      {/* ── Page Header ─────────────────────────────────────────── */}
      <div className="pt-32 pb-20 bg-brand-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgba(154,114,40,0.04), transparent)' }} />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.p variants={fadeIn}
              className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-brand-gold mb-4">
              Wir freuen uns auf Sie
            </motion.p>
            <motion.div variants={fadeIn}
              className="w-14 h-px bg-gold-gradient origin-left mb-6" />
            <motion.h1 variants={fadeInUp}
              className="font-display text-display-lg text-brand-ink mb-5">
              {CLIENT.kontakt.heading}
            </motion.h1>
            <motion.p variants={fadeIn}
              className="font-sans text-brand-muted font-light text-lg leading-relaxed max-w-lg">
              {CLIENT.kontakt.subheading}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Kontaktkarten ───────────────────────────────────────── */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
          >
            <KontaktKarte
              href={`tel:${CLIENT.telefon}`}
              label="Telefon"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>}
            >
              {CLIENT.telefon}
            </KontaktKarte>

            <KontaktKarte
              href={`mailto:${CLIENT.email}`}
              label="E-Mail"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>}
            >
              {CLIENT.email}
            </KontaktKarte>

            <KontaktKarte
              label="Adresse"
              icon={<><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></>}
            >
              {CLIENT.strasse}<br />{CLIENT.plz} {CLIENT.ort}<br />{CLIENT.land}
            </KontaktKarte>

            <KontaktKarte
              label="Öffnungszeiten"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>}
            >
              <div className="space-y-2">
                {CLIENT.oeffnungszeiten.map((item, i) => (
                  <div key={i} className="flex justify-between gap-3 text-xs">
                    <span className="text-brand-muted">{item.tag}</span>
                    <span className={item.zeiten === 'Geschlossen'
                      ? 'text-brand-subtle'
                      : 'text-brand-gold font-medium'}>
                      {item.zeiten}
                    </span>
                  </div>
                ))}
              </div>
            </KontaktKarte>
          </motion.div>

          {/* ── Zweispaltige Info-Sektion ──────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Links – Direktkontakt-Links */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <p className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-brand-gold mb-4">
                Direkt erreichen
              </p>
              <div className="w-14 h-px bg-gold-gradient origin-left mb-6" />
              <h2 className="font-display text-display-md text-brand-ink mb-5">
                So erreichen<br />Sie uns
              </h2>
              <p className="font-sans font-light text-brand-muted leading-relaxed mb-8">
                Sie können uns telefonisch oder per E-Mail kontaktieren.
                Wir melden uns innerhalb von{' '}
                <strong className="text-brand-secondary font-medium">[Zeitraum, z.B. 24 Stunden]</strong>{' '}
                bei Ihnen zurück.
              </p>

              <div className="space-y-3">
                {[
                  {
                    label: 'Jetzt anrufen',
                    val: CLIENT.telefon,
                    href: `tel:${CLIENT.telefon}`,
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>,
                  },
                  {
                    label: 'E-Mail schreiben',
                    val: CLIENT.email,
                    href: `mailto:${CLIENT.email}`,
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center justify-between p-5 bg-brand-card border border-brand-border group transition-all duration-300 no-underline hover:border-brand-gold hover:shadow-gold"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold-pale flex items-center justify-center shrink-0 group-hover:bg-brand-gold/10 transition-colors duration-300">
                        <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-brand-muted mb-0.5 group-hover:text-brand-gold transition-colors">{item.label}</p>
                        <p className="font-sans text-sm text-brand-secondary">{item.val}</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Rechts – Adresse, Datenschutz */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-5"
            >
              {/* Adresskarte */}
              <div className="bg-brand-surface border border-brand-border p-8">
                <p className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-gold mb-5">
                  Anschrift
                </p>
                <address className="not-italic font-sans text-sm text-brand-secondary leading-loose">
                  <span className="block font-semibold text-brand-ink">{CLIENT.firmenname}</span>
                  <span className="block">{CLIENT.strasse}</span>
                  <span className="block">{CLIENT.plz} {CLIENT.ort}</span>
                  <span className="block">{CLIENT.land}</span>
                </address>

                {/* Google Maps Embed (optional) */}
                {CLIENT.kontakt.googleMapsEmbed && (
                  <div className="mt-6 overflow-hidden border border-brand-border">
                    <iframe
                      src={CLIENT.kontakt.googleMapsEmbed}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort auf Google Maps"
                    />
                  </div>
                )}
              </div>

              {/* Datenschutzhinweis */}
              <div className="border-l-4 border-brand-gold bg-brand-gold-pale p-6">
                <p className="font-sans text-xs text-brand-secondary leading-relaxed">
                  <strong className="text-brand-ink font-semibold">Datenschutzhinweis:</strong>{' '}
                  Ihre Kontaktdaten werden ausschließlich zur Beantwortung Ihrer Anfrage
                  verwendet und nicht an Dritte weitergegeben. Weitere Informationen
                  entnehmen Sie unserer{' '}
                  <Link to="/datenschutz"
                    className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-light transition-colors">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>

              {/* Impressum-Link */}
              <p className="font-sans text-xs text-brand-subtle text-center pt-1">
                Pflichtangaben gemäß § 5 TMG finden Sie im{' '}
                <Link to="/impressum"
                  className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-light transition-colors">
                  Impressum
                </Link>.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
