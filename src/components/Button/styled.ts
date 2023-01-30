import styled, { css } from 'styled-components'
import { theme } from '../../style/theme'
import { BaseButton, BaseBtnProps } from './BaseButton'

export type StyledButtonProps = Partial<BaseBtnProps> & {
  variant?: VariantsMap
}

const variantsMap = {
  primary: css`
    background-color: ${theme.colors.primary};
    font-weight: 700;
    color: ${theme.colors.textLight};
    &:hover {
      background-color: ${theme.colors.primaryLight};
    }
  `,
  secondary: css`
    background-color: ${theme.colors.primaryLighter};
    font-weight: 700;
    color: ${theme.colors.primary};
    &:hover {
      outline: ${`1px solid ${theme.colors.primary}`};
    }
    margin: 2px;
  `,
  transparent: css`
    background-color: transparent;
    font-weight: 700;
    border: ${`1px solid ${theme.colors.textLight}`};
    color: ${theme.colors.textLight};
    &:hover {
      background-color: ${theme.colors.grayShadowed};
    }
  `
}

export type VariantsMap = keyof typeof variantsMap

// eslint-disable-next-line prettier/prettier
export const StyledButton = styled(BaseButton) <StyledButtonProps>`
  ${({ variant }) => (variant ? variantsMap[variant] : '')}
`
