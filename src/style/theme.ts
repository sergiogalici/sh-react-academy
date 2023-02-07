export const theme = {
  colors: {
    primary: '#f9423a',
    // primaryLight: '#feeceb',
    primaryLight: '#fa7b75',
    primaryLighter: '#FEECEB',
    secondary: '#f7f8fb',
    secondaryLight: '#2d3748',
    grayShadowed: 'rgba(247, 247, 247, 0.5)',
    gold: '#fcba03',
    textDark: '#282828',
    textLight: '#ffffff',
    lightGray: '#cccccc',
    transparent: 'transparent',
    backgroundLight: '#fafafa',
    motori: '#2650ff',
    market: '#f2a700',
    immobili: '#9924ff',
    lavoro: '#07bb9c'
  } as const,
  // Units in REM
  fontSizes: {
    // xs: 0.8,
    sm: 0.8,
    md: 1,
    lg: 1.6,
    xl: 2.4,
    xxl: 3.2
  },
  textVariants: {
    h1: { fontSize: 'xxl', lineHeight: 1.6 },
    h2: { fontSize: 'xl', lineHeight: 1.6 },
    h3: { fontSize: 'xl', lineHeight: 1.4 },
    h4: { fontSize: 'xl', lineHeight: 1.4 },
    h5: { fontSize: 'lg', lineHeight: 1.4 },
    h6: { fontSize: 'lg', lineHeight: 1.4 },
    p: { fontSize: 'md', lineHeight: 1.2 },
    span: { fontSize: 'md', lineHeight: 1.2 }
  } as const,
  spacing: {
    sm: 8,
    md: 16,
    lg: 32
  },
  radii: [4, 8, 12, 24]
}

export type Theme = typeof theme

export type ThemeColors = keyof Theme['colors']

export type ThemeFontSizes = keyof Theme['fontSizes']

export type TextVariants = keyof Theme['textVariants']

export type ThemeSpacings = keyof Theme['spacing']
