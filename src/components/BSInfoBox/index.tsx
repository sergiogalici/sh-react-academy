import { ThemeColors, TextVariants } from '../../style/theme'
import { Button } from '../Button'
import { Text } from '../Text'
import { StyledBSInfoBox } from './styled'

export type Props = {
  title: string
  subTitle: string
  buttonTitle: string
  titleColor?: ThemeColors
  subTitleColor?: ThemeColors
  titleVariant?: TextVariants
  subTitleVariant?: TextVariants
  buttonColor?: ThemeColors
  buttonBgColor?: ThemeColors
}

export const BSInfoBox = ({
  title,
  subTitle,
  buttonTitle,
  titleColor = 'textDark',
  subTitleColor = 'textDark',
  titleVariant = 'h3',
  subTitleVariant = 'p',
  buttonColor = 'primary',
  buttonBgColor = 'transparent'
}: Props) => {
  return (
    <StyledBSInfoBox>
      <Text color={titleColor} variant={titleVariant}>
        {title}
      </Text>
      <Text color={subTitleColor} variant={subTitleVariant}>
        {subTitle}
      </Text>
      <Button color={buttonColor} backgroundColor={buttonBgColor} fullWidth={false}>
        {buttonTitle}
      </Button>
    </StyledBSInfoBox>
  )
}
