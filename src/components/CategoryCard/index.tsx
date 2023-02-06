import { theme, ThemeColors } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { CategoryCardProps, StyledCatCard } from './styled'

type Props = Partial<CategoryCardProps> & {
  src: string
  buttonTitle: string
  color?: ThemeColors
}

export const CategoryCard = ({
  src,
  buttonTitle,
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
        {src && <Image src={src} alt={buttonTitle} width={126} height={30} />}
        {buttonTitle && (
          <Button size="md" outlined fontSize="md" variant="tertiary">
            {buttonTitle}
          </Button>
        )}
      </StyledCatCard>
    </>
  )
}
