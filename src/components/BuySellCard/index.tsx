import { ThemeSpacings } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { StyledBSCard, StyledBSCardProps } from './styled'

type Props = Partial<StyledBSCardProps> & {
  imageSrc: string
  title: string
  buttonSize?: ThemeSpacings
}

export const BSCard = ({ imageSrc, title, buttonSize = 'md' }: Props) => {
  return (
    <StyledBSCard>
      <Image src={imageSrc} alt={title} />
      <Button variant="primary" size={buttonSize}>
        {title}
      </Button>
    </StyledBSCard>
  )
}
