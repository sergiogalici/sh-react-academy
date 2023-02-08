import React, { useEffect, useState } from 'react'
import { getAds } from '../../api'
import { AdDto } from '../../api/type'
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
  imageSrc = 'https://images.pexels.com/photos/15444167/pexels-photo-15444167.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  adTitle = "Pellicano d'appartamento con microchip Pedigree Certificato",
  rating
}: ProductCardProps) => {
  const [ads, setAds] = useState<AdDto[]>([])

  useEffect(() => {
    getAds()
      .then((data) => setAds(data))
      .catch((e) => console.log(e.message))
  }, [])

  return (
    <StyledProductCard>
      <div className="left">
        <Image width={200} height={300} src={imageSrc} alt={adTitle} cover={false} />
      </div>
      <div className="right">
        <div className="right__left">
          <div className="right__left-top">
            <Text bold upperCase color="lightGray" variant="p">
              Market
            </Text>
            <Text color="primary" variant="h4">
              {adTitle}
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
          <Text variant="h1">€365.67</Text>
        </div>
      </div>
      <Icon fontSize="lg" color="primary" size="1x" icon="heart" />
    </StyledProductCard>
  )
}
