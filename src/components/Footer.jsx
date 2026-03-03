import { Link } from 'react-router-dom';
import { CLIENT } from '../config/client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border/50 relative overflow-hidden">

      {/* Dekoratives Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gold-gradient opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Marke & Beschreibung */}
          <div>
            <Link to="/" className="block mb-4">
              <span className="font-display text-2xl text-brand-ink">{CLIENT.firmenname}</span>
              <span className="block text-[10px] font-sans font-light tracking-[0.3em] text-brand-gold uppercase mt-1">
                {CLIENT.branche}
              </span>
            </Link>
            <p className="text-brand-muted font-sans text-sm leading-relaxed max-w-xs">
              {CLIENT.kurztext}
            </p>

            {/* Social Media */}
            {(CLIENT.instagram || CLIENT.facebook || CLIENT.linkedin || CLIENT.xing) && (
              <div className="flex gap-4 mt-6">
                {CLIENT.instagram && (
                  <a href={CLIENT.instagram} target="_blank" rel="noopener noreferrer"
                     className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                )}
                {CLIENT.facebook && (
                  <a href={CLIENT.facebook} target="_blank" rel="noopener noreferrer"
                     className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="section-label mb-5">Kontakt</h3>
            <address className="not-italic space-y-3">
              <p className="text-brand-muted text-sm">
                {CLIENT.strasse}<br />
                {CLIENT.plz} {CLIENT.ort}
              </p>
              <a href={`tel:${CLIENT.telefon}`}
                 className="flex items-center gap-2 text-brand-muted text-sm hover:text-brand-gold transition-colors group">
                <svg className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {CLIENT.telefon}
              </a>
              <a href={`mailto:${CLIENT.email}`}
                 className="flex items-center gap-2 text-brand-muted text-sm hover:text-brand-gold transition-colors group">
                <svg className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {CLIENT.email}
              </a>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="section-label mb-5">Navigation</h3>
            <ul className="space-y-2">
              {[
                { to: '/',             label: 'Startseite'     },
                { to: '/kontakt',      label: 'Kontakt'        },
                { to: '/impressum',    label: 'Impressum'      },
                { to: '/datenschutz',  label: 'Datenschutz'    },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}
                        className="text-brand-muted text-sm hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="block w-4 h-px bg-brand-border group-hover:bg-brand-gold transition-colors duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-brand-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-subtle text-xs font-sans tracking-wide">
            © {year} {CLIENT.firmenname} · {CLIENT.rechtsform}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum"   className="text-brand-subtle text-xs hover:text-brand-gold transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-brand-subtle text-xs hover:text-brand-gold transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
