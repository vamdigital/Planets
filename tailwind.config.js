/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    {
      pattern:
        /border-b-(mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/
    }
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        heading: ['var(--font-antonio)'],
        body: ['var(--font-spartan)']
      },
      colors: {
        'planet-white': '#ffffff',
        'planet-primary': '#070724',
        'planet-secondary': '#38384f',
        'planet-tertiary': '#838391',
        mercury: '#419EBB',
        venus: '#EDA249',
        earth: '#6F2EDF',
        mars: '#D14C32',
        jupiter: '#D83A34',
        saturn: '#CD5120',
        uranus: '#1EC2A4',
        neptune: '#2D68F0'
      },
      fontSize: {
        'planet-h1': ['80px', '103px'],
        'planet-h2': ['40px', '52px', { letterSpacing: '-1.5' }],
        'planet-h3': ['12px', '25px', { letterSpacing: '2.6' }],
        'planet-h4': ['11px', '25px', { letterSpacing: '1' }],
        'planet-body': ['18px', '32px'],
        'planet-mobile-nav': ['15px', '25px']
      }
    }
  },
  plugins: []
}
