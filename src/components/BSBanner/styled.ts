import styled, { css } from 'styled-components'

export type StyledBSWProps = {
  height?: string | number
  width?: string | number
}

export const StyledBSWrapper = styled.div<StyledBSWProps>`
  ${({ width }) => width && `width: ${typeof width === 'string' ? width : `${width}px`}`};
  ${({ height }) =>
    height && `height: ${typeof height === 'string' ? height : `${height}px`}`};

  display: flex;
  flex-direction: row;
  align-items: center;
`
