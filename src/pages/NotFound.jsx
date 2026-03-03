import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { CLIENT } from '../config/client';

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-brand-bg px-6">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[12rem] leading-none text-brand-gold/10 select-none"
          >
            404
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="-mt-8"
          >
            <p className="section-label mb-4">Seite nicht gefunden</p>
            <h1 className="font-display text-3xl text-brand-ink mb-4">
              Oops! Diese Seite existiert nicht.
            </h1>
            <p className="text-brand-muted font-sans text-sm leading-relaxed mb-8">
              Die von Ihnen gesuchte Seite wurde möglicherweise verschoben, umbenannt oder existiert nicht mehr.
              Kehren Sie zur Startseite zurück.
            </p>
            <Link to="/" className="btn-primary">
              Zur Startseite
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
