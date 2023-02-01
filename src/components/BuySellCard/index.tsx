import { ThemeSpacings } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { StyledBSCard, StyledBSCardProps } from './styled'

type Props = Partial<StyledBSCardProps> & {
  imageSrc: string
  title: string
  width?: number
  height?: number
  buttonSize?: ThemeSpacings
}

export const BSCard = ({ imageSrc, title, height, width, buttonSize = 'md' }: Props) => {
  return (
    <StyledBSCard height={height} width={width}>
      <Image src={imageSrc} alt={title} />
      <Button variant="primary" size={buttonSize}>
        {title}
      </Button>
    </StyledBSCard>
  )
}
