import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT } from '../config/client';

const navLinks = [
  { href: '/',           label: 'Start'       },
  { href: '/kontakt',    label: 'Kontakt'     },
  { href: '/impressum',  label: 'Impressum'   },
  { href: '/datenschutz',label: 'Datenschutz' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Menü bei Routenwechsel schließen
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/50 py-3 shadow-card'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-display text-xl text-brand-cream tracking-wide group-hover:text-brand-gold transition-colors duration-300">
            {CLIENT.firmenname}
          </span>
          <span className="text-[10px] font-sans font-light tracking-[0.3em] text-brand-gold uppercase mt-0.5">
            {CLIENT.branche}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative group ${
                    isActive ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-cream'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-brand-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          to="/kontakt"
          className="hidden md:inline-flex btn-primary text-xs"
        >
          {CLIENT.hero.ctaPrimary}
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
        >
          <span className={`block w-6 h-px bg-brand-cream transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-px bg-brand-cream transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-brand-surface/98 backdrop-blur-md border-t border-brand-border/50"
          >
            <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      `block font-sans text-base font-medium tracking-widest uppercase py-2 border-b border-brand-border/30 transition-colors ${
                        isActive ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-cream'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="pt-2"
              >
                <Link to="/kontakt" className="btn-primary w-full justify-center text-xs">
                  {CLIENT.hero.ctaPrimary}
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
