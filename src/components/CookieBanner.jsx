import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CookieBanner({ onAccept }) {
  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    onAccept();
  };

  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="dialog"
      aria-label="Cookie-Einwilligung"
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-4xl mx-auto bg-brand-surface border border-brand-border shadow-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        
        {/* Icon */}
        <div className="shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-brand-ink font-sans font-semibold text-sm mb-1">
            Diese Website verwendet technisch notwendige Cookies
          </p>
          <p className="text-brand-muted font-sans text-xs leading-relaxed">
            Wir verwenden ausschließlich funktionale Cookies, die für den Betrieb der Website erforderlich sind.
            Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Durch Nutzung dieser Website stimmen Sie der
            Verwendung dieser Cookies zu. Weitere Informationen finden Sie in unserer{' '}
            <Link to="/datenschutz" className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-light">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <Link
            to="/datenschutz"
            className="btn-ghost text-xs flex-1 sm:flex-none justify-center"
          >
            Mehr erfahren
          </Link>
          <button
            onClick={handleAccept}
            className="btn-primary text-xs flex-1 sm:flex-none justify-center"
          >
            Verstanden
          </button>
        </div>
      </div>
    </motion.div>
  );
}
