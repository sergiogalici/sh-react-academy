import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { ThemeColors, ThemeSpacings } from '../../style/theme'

export type StyledIconProps = {
  color?: ThemeColors
  iconSize: ThemeSpacings
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  ${({ iconSize, theme }) => css`
    width: ${theme.spacing[iconSize]}px;
  `}
`
