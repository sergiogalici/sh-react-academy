import { AdDto } from '../../api/type'
import { Icon } from '../Icon'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledDetailCard, StyledDetailCardProps } from './styled'

type Props = {
  ad: AdDto
} & Partial<StyledDetailCardProps>

export const DetailCard = ({ ad }: Props) => {
  return (
    <StyledDetailCard>
      <div className="slideshow-container">Slideshow</div>
      <div className="details-container">
        <div className="top-details">
          <Text className="category-indicator" variant="p">
            {ad?.categoryIds[0]}
          </Text>
          <div className="divisor" />
          <Text size="lg" bold>
            Canna da pesca
          </Text>
          <Text bold>
            <Icon icon={['fas', 'location-dot']} size="1x" color="lightGray" />
            {} Germany
          </Text>
          <Text size="xl" color="primary">
            €1.00
          </Text>
        </div>
        <div className="bottom-details">
          <div className="user-avatar">A</div>
          <div>
            <Text>Anthony</Text>
            <Rating rating={3} />
          </div>
        </div>
      </div>
    </StyledDetailCard>
  )
}
