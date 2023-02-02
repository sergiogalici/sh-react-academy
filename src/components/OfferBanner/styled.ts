import styled, { css } from 'styled-components'

export type StyledOfferBannerProps = {
  height?: string | number
  width?: string | number
  bgImage?: string
}

export const StyledOfferBanner = styled.div<StyledOfferBannerProps>`
  height: ${({ height }) =>
    height ? `${typeof height === 'string' ? height : `${height}px`}` : 'fit-content'};
  width: ${({ width }) =>
    width ? `${typeof width === 'string' ? width : `${width}px`}` : 'fit-content'};

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  border-radius: ${({ theme }) => theme.radii[1]}px;

  padding: ${({ theme }) => theme.spacing.lg}px;

  ${({ bgImage }) =>
    bgImage &&
    css`
      background-image: url(${bgImage});
      background-position: 0 0;
      background-size: contain;
      background-repeat: no-repeat;
    `};

  .offer-banner-text {
    padding-inline-start: 20%;
  }

  .offer-banner-button {
    margin: ${({ theme }) => `0 ${theme.spacing.lg}px`};
    min-width: max-content;
  }
`
