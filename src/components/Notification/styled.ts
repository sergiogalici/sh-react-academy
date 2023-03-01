import styled from 'styled-components'
import { NotificationType } from '../../feature/app/model'

export type StyledNotificationCardProps = {
  type: NotificationType['type']
}

export const StyledNotificationCard = styled.div<StyledNotificationCardProps>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.lg}px;
  right: ${({ theme }) => theme.spacing.lg}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.radii[2]}px;
  border-inline-end-width: ${({ theme }) => theme.spacing.sm}px;
  border-inline-end-color: ${({ theme, type }) =>
    type === 'error' ? theme.colors.danger : theme.colors.success};
  border-inline-end-style: solid;
  background-color: ${({ theme }) => theme.colors.primaryLighter};
  z-index: 30;
`
