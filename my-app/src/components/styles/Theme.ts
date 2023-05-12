import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      montserrat: string;
      merriweather: string;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      primaryBG: string;
      secondaryBG: string;
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}

export const theme: DefaultTheme = {
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    merriweather: "'Merriweather', serif",
  },
  colors: {
    // red color #F8485E
    primary: ' #F8485E',
    secondary: '#FFFFFF',
    tertiary: '#111111',
    // tertiary: '#111111',
    // primaryBG: '#111111',
    primaryBG: '#FFFFFF',
    secondaryBG: '#111111',
  },
  breakpoints: {
    lg: '64rem',
    md: '58.125rem',
    sm: '48rem',
    xs: '31.25rem',
  },
};
