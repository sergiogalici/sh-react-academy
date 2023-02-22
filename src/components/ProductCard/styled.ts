import styled from 'styled-components'

export const StyledProductCard = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii[1]}px;
  position: relative;

  .link-container {
    width: 100%;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.radii[1]}px;
    width: 200px;
  }

  .category-title-author {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title-container {
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .author-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm}px;
  }

  .price-container {
    margin: auto;
  }

  .button-container > svg {
    pointer-events: none;
    z-index: 4;
    position: absolute;
  }
`
