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
    transparent: 'transparent'
  },
  // Units in REM
  fontSizes: {
    xs: 0.8,
    sm: 0.9,
    base: 1,
    md: 1.4,
    lg: 2,
    xl: 2.4
  },
  textVariants: {
    h1: { fontSize: 'xl', lineHeight: 1.6 },
    h2: { fontSize: 'lg', lineHeight: 1.6 },
    h3: { fontSize: 'lg', lineHeight: 1.4 },
    h4: { fontSize: 'lg', lineHeight: 1.4 },
    h5: { fontSize: 'md', lineHeight: 1.4 },
    h6: { fontSize: 'md', lineHeight: 1.4 },
    p: { fontSize: 'base', lineHeight: 1.2 },
    span: { fontSize: 'base', lineHeight: 1.2 }
  } as const,
  spacing: {
    sm: 8,
    md: 16,
    lg: 32
  },
  radii: [5, 10, 20, 50]
}

export type Theme = typeof theme

export type ThemeColors = keyof Theme['colors']

export type ThemeFontSizes = keyof Theme['fontSizes']

export type TextVariants = keyof Theme['textVariants']

export type ThemeSpacings = keyof Theme['spacing']

export type ThemeRadii = keyof Theme['radii']
