import { MappedAd } from '../../feature/adDetail/model'
import { useCurrency } from '../../hooks/useCurrency'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledDetailCard, StyledDetailCardProps } from './styled'

type Props = {
  ad: MappedAd
} & Partial<StyledDetailCardProps>

export const DetailCard = ({ ad }: Props) => {
  const { format } = useCurrency()
  return (
    <StyledDetailCard>
      <div className="slideshow-container">
        <Image alt={ad.title} src={ad.images[0]} />
      </div>
      <div className="details-container">
        <div className="top-details">
          <Text className="category-indicator" variant="p">
            {ad.category.title}
          </Text>
          <div className="divisor" />
          <Text size="lg" bold className="ad-title">
            {ad.title}
          </Text>
          <Text bold>
            <Icon icon={['fas', 'location-dot']} size="1x" color="lightGray" />
            {ad.country.name}
          </Text>
          <Text size="xl" color="primary">
            {format(ad.price)}
          </Text>
        </div>
        <div className="bottom-details">
          <div className="user-avatar">{ad.author.username[0].toUpperCase()}</div>
          <div>
            <Text>{ad.author.username}</Text>
            <Rating rating={ad.author.rating} />
          </div>
        </div>
      </div>
    </StyledDetailCard>
  )
}
