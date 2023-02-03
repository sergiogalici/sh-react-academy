import React, { ReactNode } from 'react'
import { ThemeColors, TextVariants } from '../../style/theme'
import { BSCardBox, BSCardProps } from '../BSCardsBox'
import { BSInfoBox, InfoBoxTypes } from '../BSInfoBox'
import { StyledBSCardProps } from '../BuySellCard/styled'
import { StyledBSWProps, StyledBSWrapper } from './styled'

type Props = Partial<BSCardProps> &
  StyledBSWProps & {
    title?: string
    buttonTitle?: string
    subTitles?: ReactNode
    titleVariant?: TextVariants
    buttonColor?: ThemeColors
    buttonBgColor?: ThemeColors
  }

export const BSBanner = ({
  width,
  height,
  // TODO array => oggetto
  cards,
  // Card box opzionale, non ha valore di base -- cardbox si occupa dell'handling di props vuote
  ...rest
}: Props) => {
  return (
    <StyledBSWrapper width={width} height={height}>
      <BSInfoBox {...rest} />
      {cards && <BSCardBox cards={cards} />}
    </StyledBSWrapper>
  )
}
