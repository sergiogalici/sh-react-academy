import { ThemeColors, TextVariants } from '../../style/theme'
import { Button } from '../Button'
import { Text } from '../Text'
import { StyledBSInfoBox, StyledBSInfoBoxProps } from './styled'

export type InfoBoxTypes = Partial<StyledBSInfoBoxProps> & {
  title?: [string, boolean]
  buttonTitle?: string
  subTitles?: [string, boolean, ThemeColors][]
  titleColor?: ThemeColors
  titleVariant?: TextVariants
  buttonColor?: ThemeColors
  buttonBgColor?: ThemeColors
}

export const BSInfoBox = ({
  title = ['Basic Title', false],
  buttonTitle = 'Basic Button',
  subTitles = [['Basic Sub', false, 'textDark']],
  width,
  height,
  padding = 'sm',
  titleColor = 'textDark',
  titleVariant = 'h5',
  buttonColor = 'primary',
  buttonBgColor = 'transparent'
}: InfoBoxTypes) => {
  return (
    <StyledBSInfoBox padding={padding} width={width} height={height}>
      <Text bold={title[1]} color={titleColor} variant={titleVariant}>
        {title[0]}
      </Text>
      <div className="subtitles-wrapper">
        {subTitles.map((sub) => {
          return (
            <Text color={sub[2]} bold={sub[1]}>
              {sub[0]}
            </Text>
          )
        })}
      </div>
      <Button
        fontSize={1}
        color={buttonColor}
        backgroundColor={buttonBgColor}
        fullWidth={false}
      >
        {buttonTitle}
      </Button>
    </StyledBSInfoBox>
  )
}
