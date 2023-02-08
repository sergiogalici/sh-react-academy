import styled from 'styled-components'

export const StyledProductCard = styled.div`
  background-color: white;
  display: flex;
  gap: 20px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii[1]}px;
  width: 100%;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.radii[1]}px;
    width: 200px;
  }

  .right {
    display: flex;
    flex-direction: row;
    flex: 3;
  }

  .right__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right__left-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .right_right {
    margin: auto;
  }
`
