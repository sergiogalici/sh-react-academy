export const variants = {
  primary: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'primary',
    borderRadius: 4,
    backgroundColor: 'primary',
    padding: 3
  },
  secondary: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'primary',
    borderRadius: 5,
    backgroundColor: 'primaryLight',
    padding: 3
  },
  tertiary: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'textLight',
    borderRadius: 5,
    backgroundColor: 'transparent',
    padding: 3
  },
  noBorder: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'primaryLight',
    borderRadius: 5,
    backgroundColor: 'primaryLight',
    padding: 3
  }
} as const

export type Variants = keyof typeof variants
