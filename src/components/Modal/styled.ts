import styled from 'styled-components'

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.grayShadowed};
  backdrop-filter: brightness(75%);
  opacity: 0;
  transition: opacity 0.2s;

  &.visible {
    opacity: 1;
  }

  .container {
    padding: ${({ theme }) => theme.spacing.md}px;
    border-radius: ${({ theme }) => theme.radii[2]}px;
    background-color: ${({ theme }) => theme.colors.textLight};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm}px;
    min-width: 40rem;
  }
`

export const StyledModalHeader = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  position: relative;

  .close-button {
    margin-left: auto;
  }
`
