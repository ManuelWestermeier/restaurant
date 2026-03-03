import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { CLIENT } from '../config/client';
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '../utils/animations';

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', telefon: '', betreff: '', nachricht: '', datenschutz: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())      e.name      = 'Bitte geben Sie Ihren Namen ein.';
    if (!form.email.trim())     e.email     = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    if (!form.nachricht.trim()) e.nachricht = 'Bitte geben Sie Ihre Nachricht ein.';
    if (!form.datenschutz)      e.datenschutz = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Mailto-Fallback – für Backend-Integration hier API-Call einbauen
    const body = `Name: ${form.name}%0D%0AE-Mail: ${form.email}%0D%0ATelefon: ${form.telefon}%0D%0ABetreff: ${form.betreff}%0D%0A%0D%0ANachricht:%0D%0A${encodeURIComponent(form.nachricht)}`;
    window.location.href = `mailto:${CLIENT.email}?subject=${encodeURIComponent(`Kontaktanfrage: ${form.betreff || form.name}`)}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  return (
    <PageWrapper>
      {/* Header */}
      <div className="pt-32 pb-16 bg-brand-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30" />
          <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.p variants={fadeIn} className="section-label mb-3">Wir freuen uns auf Sie</motion.p>
            <motion.div variants={fadeIn}>
              <span className="gold-divider-left" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="section-heading-lg">{CLIENT.kontakt.heading}</motion.h1>
            <motion.p variants={fadeIn} className="text-brand-muted font-sans text-lg mt-3 max-w-xl">
              {CLIENT.kontakt.subheading}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Kontakt-Informationen */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-xl text-brand-cream mb-6">Kontaktdaten</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>,
                      secondary: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>,
                      label: 'Adresse',
                      content: <>{CLIENT.strasse}<br />{CLIENT.plz} {CLIENT.ort}</>,
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>,
                      label: 'Telefon',
                      content: <a href={`tel:${CLIENT.telefon}`} className="hover:text-brand-gold transition-colors">{CLIENT.telefon}</a>,
                    },
                    {
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>,
                      label: 'E-Mail',
                      content: <a href={`mailto:${CLIENT.email}`} className="hover:text-brand-gold transition-colors">{CLIENT.email}</a>,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.icon}{item.secondary}
                        </svg>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-brand-muted tracking-wider uppercase mb-1">{item.label}</p>
                        <p className="font-sans text-brand-cream text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="p-6 bg-brand-surface border border-brand-border">
                <h3 className="font-sans font-semibold text-brand-cream text-sm mb-4 tracking-wider uppercase">Öffnungszeiten</h3>
                <div className="space-y-2">
                  {CLIENT.oeffnungszeiten.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-brand-muted">{item.tag}</span>
                      <span className={item.zeiten === 'Geschlossen' ? 'text-brand-subtle' : 'text-brand-gold'}>{item.zeiten}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Kontaktformular */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 bg-brand-surface border border-brand-gold/30 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-brand-cream mb-3">Vielen Dank!</h3>
                  <p className="text-brand-muted font-sans text-sm">Ihre Nachricht wurde vorbereitet. Ihr E-Mail-Programm sollte sich gleich öffnen.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                             placeholder="Max Mustermann" className="form-input"
                             aria-describedby={errors.name ? 'name-error' : undefined} />
                      {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="form-label">E-Mail-Adresse *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                             placeholder="max@beispiel.de" className="form-input"
                             aria-describedby={errors.email ? 'email-error' : undefined} />
                      {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Telefon <span className="text-brand-subtle">(optional)</span></label>
                      <input type="tel" name="telefon" value={form.telefon} onChange={handleChange}
                             placeholder="+49 000 000000" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Betreff <span className="text-brand-subtle">(optional)</span></label>
                      <input type="text" name="betreff" value={form.betreff} onChange={handleChange}
                             placeholder="Anfrage zu..." className="form-input" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Nachricht *</label>
                    <textarea name="nachricht" value={form.nachricht} onChange={handleChange}
                              rows={6} placeholder="Ihre Nachricht..." className="form-input resize-none"
                              aria-describedby={errors.nachricht ? 'nachricht-error' : undefined} />
                    {errors.nachricht && <p id="nachricht-error" className="text-red-400 text-xs mt-1">{errors.nachricht}</p>}
                  </div>

                  {/* Datenschutz-Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input type="checkbox" name="datenschutz" checked={form.datenschutz}
                               onChange={handleChange} className="sr-only" />
                        <div className={`w-5 h-5 border transition-colors duration-200 flex items-center justify-center ${
                          form.datenschutz ? 'bg-brand-gold border-brand-gold' : 'border-brand-border bg-brand-surface group-hover:border-brand-gold/50'
                        }`}>
                          {form.datenschutz && (
                            <svg className="w-3 h-3 text-brand-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4.5 12.75l6 6 9-13.5"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="font-sans text-xs text-brand-muted leading-relaxed">
                        Ich habe die{' '}
                        <Link to="/datenschutz" className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-light">
                          Datenschutzerklärung
                        </Link>{' '}
                        gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage gemäß Art. 6 Abs. 1 lit. b DSGVO zu. *
                      </span>
                    </label>
                    {errors.datenschutz && <p className="text-red-400 text-xs mt-1 ml-8">{errors.datenschutz}</p>}
                  </div>

                  <p className="font-sans text-xs text-brand-subtle">* Pflichtfelder</p>

                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                    Nachricht senden
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </form>
              )}

              {/* Hinweis */}
              <div className="mt-6 p-4 border border-brand-border/50 bg-brand-surface">
                <p className="font-sans text-xs text-brand-muted leading-relaxed">
                  <strong className="text-brand-cream">Hinweis zum Kontaktformular:</strong>{' '}
                  Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
                  Weitere Informationen entnehmen Sie unserer{' '}
                  <Link to="/datenschutz" className="text-brand-gold underline underline-offset-2">Datenschutzerklärung</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
