import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
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
        h1: ['40px', '1.2'],
        h2: ['40px', '1.2'],
        h3: ['25px', '1.22'],
        body1: ['20px', '1.3'],
        body2: ['16px', '1.5'],
        body3: ['16px', '1.4'],
        body4: ['14px', '1.6'],
        button: ['14px', '1.5'],
        caption: ['16px', '1.4'],

        h1_tab: ['60px', '1.2'],
        h2_tab: ['50px', '1.2'],
        h3_tab: ['30px', '1.22'],
        body1_tab: ['25px', '1.3'],
        body2_tab: ['18px', '1.5'],
        body3_tab: ['16px', '1.4'],
        body4_tab: ['14px', '1.6'],
        button_tab: ['14px', '1.5'],
        caption_tab: ['16px', '1.4'],

        h1_desk: ['70px', '1.2'],
        h2_desk: ['60px', '1.2'],
        h3_desk: ['40px', '1.22'],
        body1_desk: ['35px', '1.3'],
        body2_desk: ['20px', '1.5'],
        body3_desk: ['18px', '1.4'],
        body4_desk: ['14px', '1.6'],
        button_desk: ['14px', '1.5'],
        caption_desk: ['18px', '1.4'],
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
        logoWhite: '#F2EFE9',
        filledInputBg: '#EDE9E4',
      },
    },
  },
  plugins: [],
};
export default config;
