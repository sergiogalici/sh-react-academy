import styled from 'styled-components'

export type StyledMagazineBannerProps = {
  height?: string | number
  width?: string | number
}

export const StyledMagazineBanner = styled.div<StyledMagazineBannerProps>`
  display: flex;

  height: ${({ height }) =>
    height ? `${typeof height === 'string' ? height : `${height}px`}` : 'fit-content'};
  width: ${({ width }) =>
    width ? `${typeof width === 'string' ? width : `${width}px`}` : 'fit-content'};

  .magazine-banner-image {
    width: 60%;
  }

  .magazine-banner-text {
    gap: ${({ theme }) => theme.spacing.sm}px;
    padding: ${({ theme }) => theme.spacing.md}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
