import { Link } from 'react-router-dom'
import { theme, ThemeColors } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { CategoryCardProps, StyledCatCard } from './styled'

type Props = Partial<CategoryCardProps> & {
  src: string
  buttonTitle: string
  color?: ThemeColors
  to: string
}

export const CategoryCard = ({
  to,
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
        <Link className="button-link" to={`ads${to}`}>
          <Button size="md" outlined fontSize="md" variant="tertiary">
            {buttonTitle}
          </Button>
        </Link>
      )}
    </StyledCatCard>
  )
}
