import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { CLIENT } from '../config/client';
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '../utils/animations';

// Icon-Mapping für Leistungen
const icons = {
  star: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
    </svg>
  ),
  award: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
    </svg>
  ),
};

// ─── Hero Sektion ───────────────────────────────────────────────
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Parallax Background */}
      <motion.div
        style={{ y: yImg }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={CLIENT.hero.image}
          alt={CLIENT.firmenname}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-brand-bg/30" />
      </motion.div>

      {/* Dekorative Elemente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/3 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-gold/5 blur-2xl" />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="section-label mb-6"
        >
          {CLIENT.branche} · {CLIENT.ort}
        </motion.p>

        {/* Goldene Linie */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-24 h-px bg-gold-gradient mx-auto mb-8 origin-left"
        />

        {/* Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-display-xl text-brand-cream text-balance"
          >
            {CLIENT.hero.headingLine1}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-display-xl text-gradient-gold text-balance italic"
          >
            {CLIENT.hero.headingLine2}
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-sans text-brand-muted text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {CLIENT.hero.subheading}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/kontakt" className="btn-primary">
            {CLIENT.hero.ctaPrimary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="#ueber-uns" className="btn-outline">
            {CLIENT.hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-subtle text-xs font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-brand-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Features Streifen ─────────────────────────────────────────
function Features() {
  const features = [
    { icon: '✦', text: CLIENT.leistungen[0]?.titel || '[LEISTUNG 1]' },
    { icon: '✦', text: CLIENT.leistungen[1]?.titel || '[LEISTUNG 2]' },
    { icon: '✦', text: CLIENT.leistungen[2]?.titel || '[LEISTUNG 3]' },
  ];

  return (
    <div className="bg-brand-gold py-4 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...features, ...features, ...features, ...features].map((f, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 font-sans font-semibold text-sm tracking-widest uppercase text-brand-bg">
            <span className="text-brand-bg/50">{f.icon}</span>
            {f.text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Über Uns ──────────────────────────────────────────────────
function UeberUns() {
  return (
    <section id="ueber-uns" className="py-28 bg-brand-bg relative overflow-hidden">
      {/* Dekorativer Hintergrund */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-brand-gold/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Bild-Seite */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={CLIENT.about.image}
                alt={`${CLIENT.firmenname} – ${CLIENT.about.subheading}`}
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gold-Frame-Effekt */}
              <div className="absolute inset-0 border border-brand-gold/20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-brand-gold/30" />
            </div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="absolute -bottom-8 left-4 right-4 bg-brand-surface border border-brand-border p-6 grid grid-cols-3 gap-4"
            >
              {CLIENT.about.stats.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="text-center">
                  <p className="font-display text-2xl text-brand-gold font-bold">{stat.value}</p>
                  <p className="font-sans text-xs text-brand-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text-Seite */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:pl-8 mt-8 lg:mt-0"
          >
            <p className="section-label mb-4">{CLIENT.about.heading}</p>
            <div className="gold-divider-left" />
            <h2 className="section-heading-lg mb-6">{CLIENT.about.subheading}</h2>

            <div className="space-y-4">
              <p className="text-brand-muted font-sans leading-relaxed">{CLIENT.about.text1}</p>
              <p className="text-brand-muted font-sans leading-relaxed">{CLIENT.about.text2}</p>
            </div>

            <div className="mt-10">
              <Link to="/kontakt" className="btn-primary">
                Kontakt aufnehmen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Leistungen ────────────────────────────────────────────────
function Leistungen() {
  return (
    <section className="py-28 bg-brand-surface relative">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #c8a04a 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} className="section-label mb-4">Was wir bieten</motion.p>
          <motion.div variants={fadeIn} className="gold-divider" />
          <motion.h2 variants={fadeInUp} className="section-heading-lg">Unsere Leistungen</motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CLIENT.leistungen.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="card-dark p-8 group relative overflow-hidden">
              {/* Hintergrund-Glow bei Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold/20 transition-colors duration-300">
                  {icons[item.icon] || icons.star}
                </div>
                <h3 className="font-display text-xl text-brand-cream mb-3">{item.titel}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{item.beschreibung}</p>
                <div className="mt-6 w-8 h-px bg-brand-gold/30 group-hover:w-16 group-hover:bg-brand-gold transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Galerie ───────────────────────────────────────────────────
function Galerie() {
  const galerie = CLIENT.galerie;

  return (
    <section className="py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} className="section-label mb-4">Eindrücke</motion.p>
          <motion.div variants={fadeIn} className="gold-divider" />
          <motion.h2 variants={fadeInUp} className="section-heading-lg">Galerie</motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {galerie.map((src, i) => (
            <motion.div
              key={i}
              variants={scaleInAnim}
              className={`overflow-hidden relative group ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
            >
              <img
                src={src}
                alt={`${CLIENT.firmenname} Galerie ${i + 1}`}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? 'h-64 md:h-full min-h-[300px]' : 'h-48 md:h-56'
                }`}
              />
              <div className="absolute inset-0 bg-brand-bg/0 group-hover:bg-brand-bg/20 transition-colors duration-500" />
              <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const scaleInAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ─── Testimonials ──────────────────────────────────────────────
function Testimonials() {
  return (
    <section className="py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} className="section-label mb-4">Was Kunden sagen</motion.p>
          <motion.div variants={fadeIn} className="gold-divider" />
          <motion.h2 variants={fadeInUp} className="section-heading-lg">Stimmen unserer Kunden</motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CLIENT.testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeInUp} className="card-dark p-8 relative">
              {/* Anführungszeichen */}
              <div className="font-display text-6xl text-brand-gold/20 leading-none mb-4 select-none">"</div>
              <p className="font-sans text-brand-muted leading-relaxed text-sm mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center font-display text-brand-gold font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-brand-cream text-sm">{t.name}</p>
                  <p className="font-sans text-brand-muted text-xs">{t.rolle}</p>
                </div>
              </div>
              {/* 5 Sterne */}
              <div className="absolute top-6 right-6 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Öffnungszeiten ────────────────────────────────────────────
function Oeffnungszeiten() {
  return (
    <section className="py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Öffnungszeiten */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="section-label mb-4">Wann wir für Sie da sind</p>
            <div className="gold-divider-left" />
            <h2 className="section-heading-lg mb-8">Öffnungszeiten</h2>

            <div className="space-y-3">
              {CLIENT.oeffnungszeiten.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-brand-border/50">
                  <span className="font-sans font-medium text-brand-cream text-sm">{item.tag}</span>
                  <span className={`font-sans text-sm ${item.zeiten === 'Geschlossen' ? 'text-brand-muted italic' : 'text-brand-gold'}`}>
                    {item.zeiten}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kontakt-Vorschau */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="section-label mb-4">Hier finden Sie uns</p>
            <div className="gold-divider-left" />
            <h2 className="section-heading-lg mb-8">Kontakt & Adresse</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-brand-cream font-sans font-medium text-sm">{CLIENT.strasse}</p>
                  <p className="text-brand-muted font-sans text-sm">{CLIENT.plz} {CLIENT.ort}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                </div>
                <a href={`tel:${CLIENT.telefon}`} className="text-brand-cream font-sans text-sm hover:text-brand-gold transition-colors">
                  {CLIENT.telefon}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </div>
                <a href={`mailto:${CLIENT.email}`} className="text-brand-cream font-sans text-sm hover:text-brand-gold transition-colors">
                  {CLIENT.email}
                </a>
              </div>
            </div>

            <Link to="/kontakt" className="btn-primary">
              Nachricht senden
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/4 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeIn} className="section-label mb-4">Bereit für den ersten Schritt?</motion.p>
          <motion.div variants={fadeIn} className="gold-divider" />
          <motion.h2 variants={fadeInUp} className="section-heading-lg mb-6">
            Kontaktieren Sie uns noch heute
          </motion.h2>
          <motion.p variants={fadeIn} className="text-brand-muted font-sans text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {CLIENT.kurztext}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/kontakt" className="btn-primary">
              {CLIENT.hero.ctaPrimary}
            </Link>
            <a href={`tel:${CLIENT.telefon}`} className="btn-outline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              {CLIENT.telefon}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Home Seite ────────────────────────────────────────────────
export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Features />
      <UeberUns />
      <Leistungen />
      <Galerie />
      <Testimonials />
      <Oeffnungszeiten />
      <CTABanner />
    </PageWrapper>
  );
}
