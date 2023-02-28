import styled from 'styled-components'

export type StyledModalProps = {}

export const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.grayShadowed};
  backdrop-filter: brightness(75%);

  .input-list {
    display: flex;
    justify-content: stretch;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.sm}px;
  }
`

export const StyledModalHeader = styled.div`
  display: flex;
  width: max-content;
  justify-content: stretch;
  align-items: flex-start;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.radii[2]}px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.textLight};
  z-index: 20;
`
