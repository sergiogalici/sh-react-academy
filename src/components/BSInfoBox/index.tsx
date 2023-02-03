import { ReactNode } from 'react'
import { ThemeColors, TextVariants, theme } from '../../style/theme'
import { Button } from '../Button'
import { Text } from '../Text'
import { StyledBSInfoBox, StyledBSInfoBoxProps } from './styled'

export type InfoBoxTypes = Partial<StyledBSInfoBoxProps> & {
  title?: string
  buttonTitle?: string
  subTitles?: ReactNode
  titleVariant?: TextVariants
  buttonColor?: ThemeColors
  buttonBgColor?: ThemeColors
}

export const BSInfoBox = ({
  title = 'Basic Title',
  buttonTitle = 'Basic Button',
  subTitles = 'Basic subTitle',
  width,
  height,
  padding = 'sm',
  titleVariant = 'h5',
  buttonColor = 'primary',
  buttonBgColor = 'transparent'
}: InfoBoxTypes) => {
  return (
    <StyledBSInfoBox padding={padding} width={width} height={height}>
      <Text bold={true} color={'textDark'} variant={titleVariant}>
        {title}
      </Text>
      <div className="subtitles-wrapper">
        {/* {subTitles.map((sub) => {
          return (
            <Text color={'textDark'} bold={false}>
              {sub}
            </Text>
          )
        })} */}
        {subTitles}
      </div>
      <Button
        fontSize={'md'}
        color={buttonColor}
        backgroundColor={buttonBgColor}
        fullWidth={false}
      >
        {buttonTitle}
      </Button>
    </StyledBSInfoBox>
  )
}
