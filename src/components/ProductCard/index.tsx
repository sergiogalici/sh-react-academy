import React, { useEffect, useState } from 'react'
import { getAds } from '../../api'
import { AdDto } from '../../api/type'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledProductCard } from './styled'

type ProductCardProps = Partial<AdDto> & {
  // TODO REMOVE OPTIONAL
  imageSrc: string
  rating: number
}

export const ProductCard = ({
  title,
  description = 'item is not present',
  authorId,
  categoryIds,
  price = { value: 0, currency: '' },
  imageSrc,
  premium,
  rating
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
              Market
            </Text>
            <Text color="primary" variant="h4">
              {title}
            </Text>
          </div>
          <div className="right__left-bottom">
            <Text variant="p" bold>
              franco
            </Text>
            <Rating rating={rating} />
          </div>
        </div>
        <div className="right_right">
          <Text variant="h1">
            {price.currency === 'EUR' && '€'}
            {price.value}
          </Text>
        </div>
      </div>
      <Icon fontSize="lg" color="primary" size="1x" icon="heart" />
    </StyledProductCard>
  )
}
