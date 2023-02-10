import { AdDto } from '../../api/type'
import { FormattedPrice } from '../FormattedPrice'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledProductCard } from './styled'

type ProductCardProps = Partial<AdDto> & {
  // TODO REMOVE OPTIONAL
  imageSrc: string
  rating: number
  authorName: string
  category: string
}

export const ProductCard = ({
  title,
  description = 'item is not present',
  authorId,
  price = { value: 0, currency: 'EUR' },
  imageSrc,
  premium,
  rating,
  authorName,
  category
}: ProductCardProps) => {
  return (
    <StyledProductCard>
      <div className="left">
        <Image width={200} height={300} src={imageSrc} alt={description} cover={false} />
      </div>
      <div className="right">
        <div className="right__left">
          <div className="right__left-top">
            <Text bold upperCase color="lightGray" variant="p">
              {category}
            </Text>
            <Text color="primary" variant="h4">
              {title}
            </Text>
          </div>
          <div className="right__left-bottom">
            <Text variant="p" bold>
              {authorName}
            </Text>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="right_right">
          <FormattedPrice price={price} variant="p" size="xl" />
        </div>
      </div>
      <Icon fontSize="lg" color="primary" size="1x" icon="heart" />
    </StyledProductCard>
  )
}
