import styled from 'styled-components'

export const StyledSearchForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 17px;
  gap: 10px;
  box-shadow: 0 0 22px 3px ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  margin: 28px 0;
  width: 100%;

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    gap: 5px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`
