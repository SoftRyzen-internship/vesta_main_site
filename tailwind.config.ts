import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      smOnly: { max: '767.98px' },
      md: '768px',
      mdOnly: { min: '768px', max: '1279.98px' },
      xl: '1280px',
      notXl: { max: '1279.98px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '34px',
          xl: '2rem',
        },
      },
      fontFamily: {
        kyiv: ['var(--font-kyiv)'],
        eukraine: ['var(--font-eukraine)'],
      },
      fontSize: {
        light: ['14px', '1.6'],
        medium: ['20px', '2.15'],
        lightLarge: ['25px', '2.32'],
        large: ['60px', '5.15'],
        extraLarge: ['70px', '6'],
      },
      colors: {
        whiteGrey: '#F2EFE933',
        bgWhite: '#FFFCF6',
        bgText: '#F3EFE9',
        filledField: '#EEEBE6',
        logoElement: '#E7E0D7',
        accent: '#DAD1C5',
        green: '#1A341B',
        greenHover: '#849080',
        greenFocus: '#72806D',
        orangeText: '#F2600C',
        hoverDark: '#9C4E12',
        hoverOrange: '#F7A06D',
        focusOrange: '#EE9764',
        yellowLight: '#FFF2AD',
        grey: '#999999',
        darkGrey: '#5E5D5D',
        red: '#FF0000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
