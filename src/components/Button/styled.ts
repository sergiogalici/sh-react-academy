import styled, { css } from 'styled-components'
import { BaseButton, BaseBtnProps } from './BaseButton'

/* 
const variantsMap = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.primaryLighter};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    }
  `,
  outline: css`
    background-color: transparent;
    border: ${`1px solid ${theme.colors.textLight}`};
    color: ${theme.colors.textLight};
    &:hover {
      background-color: ${theme.colors.grayShadowed};
    }
  `
}

export type VariantsMap = keyof typeof variantsMap
*/

export const StyledButton = styled(BaseButton)``
