import styled, { css } from 'styled-components'

export type StyledImageProps = {
  borderRadius?: number
  width?: number
  height?: number
}

export const StyledImage = styled.img<StyledImageProps>`
  ${({ borderRadius, theme }) =>
    borderRadius &&
    css`
      border-radius: ${theme.radii[borderRadius]}px;
    `};
  ${({ width }) => (width ? `width: ${width}px;` : 'width: 100%;')}
  ${({ height }) => (height ? `height: ${height}px;` : 'height: 100%;')}

  object-fit: cover;
`
