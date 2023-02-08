import React from 'react'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledProductCard } from './styled'

type ProductCardProps = {
  // TODO REMOVE OPTIONAL
  imageSrc?: string
  adTitle?: string
  rating: number
}

export const ProductCard = ({
  imageSrc = 'https://images.pexels.com/photos/9423300/pexels-photo-9423300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  adTitle = 'Vendesi roccia lavica da colazione',
  rating
}: ProductCardProps) => {
  return (
    <StyledProductCard>
      <div className="left">
        <Image width={200} height={300} src={imageSrc} alt={adTitle} cover={false} />
      </div>
      <div className="right">
        <div className="right__left">
          <div className="right__left-top">
            <Text color="lightGray" variant="h6">
              Immobili
            </Text>
            <Text color="primary" variant="h4">
              {adTitle}
            </Text>
          </div>
          <div className="right__left-bottom">
            <Text variant="p" bold>
              Franco
            </Text>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="right_right">
          <Text variant="h1">€365.67</Text>
        </div>
      </div>
      <Icon fontSize="lg" color="primary" size="1x" icon="heart" />
    </StyledProductCard>
  )
}
