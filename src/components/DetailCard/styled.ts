import styled from 'styled-components'

export type StyledDetailCardProps = {}

export const StyledDetailCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .slideshow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    height: 500px;
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
`
