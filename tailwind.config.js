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
          bg:        '#08070a',
          surface:   '#110f17',
          card:      '#1a1726',
          border:    '#2c2840',
          gold:      '#c8a04a',
          'gold-light': '#e8c060',
          'gold-dim':   '#8a6d30',
          cream:     '#f0ecf5',
          muted:     '#7a7288',
          subtle:    '#4a4560',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #c8a04a 0%, #e8c060 50%, #c8a04a 100%)',
        'dark-gradient':  'linear-gradient(180deg, #08070a 0%, #110f17 100%)',
        'hero-overlay':   'linear-gradient(to bottom, rgba(8,7,10,0.5) 0%, rgba(8,7,10,0.85) 100%)',
      },
      boxShadow: {
        'gold':    '0 0 30px rgba(200, 160, 74, 0.15)',
        'gold-lg': '0 0 60px rgba(200, 160, 74, 0.2)',
        'card':    '0 4px 40px rgba(0,0,0,0.5)',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'line-grow':  'lineGrow 1.2s ease forwards',
        'float':      'float 6s ease-in-out infinite',
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
          '0%':   { scaleX: '0' },
          '100%': { scaleX: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }
    },
  },
  plugins: [],
}
