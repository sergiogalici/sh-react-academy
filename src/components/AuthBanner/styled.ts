import styled, { css } from 'styled-components'

export type StyledAuthBProps = {
  height?: string | number
  width?: string | number
}

export const StyledAuthBanner = styled.div<StyledAuthBProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  width: 100%;

  .sign-in {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md}px;
  }
`
