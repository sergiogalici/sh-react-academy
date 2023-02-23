import styled from 'styled-components'

export type StyledNotificationCardProps = {}

export const StyledNotificationCard = styled.div<StyledNotificationCardProps>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg}px;
  right: ${({ theme }) => theme.spacing.lg}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.radii[2]}px;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-inline-end-width: ${({ theme }) => theme.spacing.sm}px;
  border-inline-end-color: ${({ theme }) => theme.colors.primary};
  border-inline-end-style: solid;
  background-color: ${({ theme }) => theme.colors.primaryLighter};
  z-index: 30;
`
