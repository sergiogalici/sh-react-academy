export const variants = {
  primary: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'primary',
    borderRadius: 4,
    backgroundColor: 'primary',
    padding: 3
  },
  secondary: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'secondary',
    borderRadius: 5,
    backgroundColor: 'secondary',
    padding: 3
  }
} as const

export type Variants = keyof typeof variants
