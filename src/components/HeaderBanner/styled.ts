import styled from 'styled-components'

export type StyledHeaderBannerProps = {
  height?: string | number
}

export const StyledHeaderBanner = styled.div<StyledHeaderBannerProps>`
  padding: ${({ theme }) => theme.spacing.md}px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) =>
    height ? `${typeof height === 'string' ? height : `${height}px`}` : 'fit-content'};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;

  select {
    position: absolute;
    right: ${({ theme }) => theme.spacing.sm}px;
  }
`
