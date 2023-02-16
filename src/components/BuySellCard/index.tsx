import { Link } from 'react-router-dom'
import { ThemeSpacings } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { StyledBSCard, StyledBSCardProps } from './styled'

type Props = Partial<StyledBSCardProps> & {
  imageSrc: string
  title: string
  buttonSize?: ThemeSpacings
  to: string
}

export const BSCard = ({ imageSrc, title, buttonSize = 'md', to }: Props) => {
  return (
    <StyledBSCard>
      <Image src={imageSrc} alt={title} />
      <Link className="button-link" to={to}>
        <Button fullWidth variant="primary" size={buttonSize}>
          {title}
        </Button>
      </Link>
    </StyledBSCard>
  )
}
