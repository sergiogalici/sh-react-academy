import styled from 'styled-components'

export type StyledDetailCardProps = {}

export const StyledDetailCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}px;

  .top-section {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.lg}px;
  }

  .slideshow-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    height: 500px;
    overflow: hidden;
  }

  .image-container {
    width: 100%;
    height: 100%;
  }

  .selected-image {
    position: absolute;
  }

  .button-container {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1;

    & button {
      border: 1px solid white;
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }

  .top-details {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md}px;
  }

  .category-indicator {
    padding: ${({ theme }) => theme.spacing.sm}px;
    border-radius: ${({ theme }) => theme.radii[1]}px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  .divisor {
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.radii[1]}px;
  }

  .country-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm}px;
  }

  .bottom-details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4rem;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.md}px;
  }

  .user-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: ${({ theme }) => theme.spacing.md}px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.radii[3]}px;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.md}px;
  }
`
