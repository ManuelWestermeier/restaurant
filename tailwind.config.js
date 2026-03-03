/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ─── Hintergründe ───────────────────────────
          bg:      '#faf9f6',   // Haupt-Hintergrund (warmes Cremeweiß)
          surface: '#f3f0ea',   // Abwechselnde Abschnitte
          card:    '#ffffff',   // Karten & Formulare

          // ─── Rahmen & Trennlinien ───────────────────
          border:  '#e2ddd4',

          // ─── Gold-Akzent ────────────────────────────
          gold:        '#9a7228',   // Primärakzent (lesbar auf Weiß, WCAG AA)
          'gold-light':'#c8952e',   // Hover-Zustand
          'gold-pale': '#f5edd8',   // Hintergrundflächen mit Goldton

          // ─── Text ───────────────────────────────────
          ink:       '#18160f',   // Primärtext  (nicht 'text' – Tailwind-reserviert)
          secondary: '#4a4538',   // Sekundärtext
          muted:   '#8a8070',   // Beschreibungen / Metainfo
          subtle:  '#b5afa3',   // Sehr leiser Text / Platzhalter

          // ─── Dunkel (Footer & CTA-Banner) ───────────
          dark:    '#18160f',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em'  }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)',  { lineHeight: '1.1',  letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.4rem, 2.5vw, 2rem)',{ lineHeight: '1.2'  }],
      },
      backgroundImage: {
        'gold-gradient':    'linear-gradient(135deg, #9a7228 0%, #c8952e 50%, #9a7228 100%)',
        'hero-overlay':     'linear-gradient(105deg, rgba(250,249,246,0.95) 40%, rgba(250,249,246,0.65) 70%, rgba(250,249,246,0.05) 100%)',
        'dark-gradient':    'linear-gradient(180deg, #18160f 0%, #2a2618 100%)',
        'section-gradient': 'linear-gradient(180deg, #faf9f6 0%, #f3f0ea 100%)',
      },
      boxShadow: {
        'gold':    '0 8px 32px rgba(154, 114, 40, 0.18)',
        'gold-lg': '0 16px 56px rgba(154, 114, 40, 0.22)',
        'card':    '0 4px 32px rgba(24, 22, 15, 0.07)',
        'card-lg': '0 12px 48px rgba(24, 22, 15, 0.11)',
      },
      animation: {
        'fade-up':   'fadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'line-grow': 'lineGrow 1s ease forwards',
        'float':     'float 6s ease-in-out infinite',
        'ticker':    'ticker 24s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
