import { theme, ThemeColors } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { CategoryCardProps, StyledCatCard } from './styled'

type Props = Partial<CategoryCardProps> & {
  title?: string
  buttonTitle?: string
  color?: ThemeColors
}

export const CategoryCard = ({
  title,
  buttonTitle,
  color = 'textLight',
  backgroundColor,
  fontSize,
  padding,
  shadow,
  borderRadius,
  width,
  height
}: Props) => {
  return (
    <>
      <StyledCatCard
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        padding={padding}
        shadow={shadow}
        borderRadius={borderRadius}
        width={width}
        height={height}
      >
        {title && (
          <Text color={color} upperCase={true} bold={true}>
            {title}
          </Text>
        )}
        {buttonTitle && <Button variant="tertiary">{buttonTitle}</Button>}
      </StyledCatCard>
    </>
  )
}
