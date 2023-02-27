import styled from 'styled-components'

export type StyledProductsFilterProps = {}

export const StyledProductsFilter = styled.div<StyledProductsFilterProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: max-content;
  gap: ${({ theme }) => theme.spacing.md}px;

  .filter-radio,
  .order-radio {
    display: flex;
    flex-direction: column;
    width: max-content;
  }

  input {
    margin: 0 ${({ theme }) => theme.spacing.sm}px;
  }
`
