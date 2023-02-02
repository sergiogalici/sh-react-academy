import React from 'react'
import { ThemeColors, TextVariants } from '../../style/theme'
import { BSCardBox, BSCardProps } from '../BSCardsBox'
import { BSInfoBox, InfoBoxTypes } from '../BSInfoBox'
import { StyledBSCardProps } from '../BuySellCard/styled'
import { StyledBSWProps, StyledBSWrapper } from './styled'

type Props = Partial<InfoBoxTypes> & Partial<BSCardProps> & Partial<StyledBSWProps> & {}

export const BSBanner = ({
  width,
  height,
  cards = [['', '', 200, 200]],
  ...rest
}: Props) => {
  return (
    <StyledBSWrapper width={width} height={height}>
      <BSInfoBox {...rest} />
      <BSCardBox cards={cards} />
    </StyledBSWrapper>
  )
}
