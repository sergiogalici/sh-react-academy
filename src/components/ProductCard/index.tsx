import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdDto } from '../../api/type'
import { adsActions } from '../../feature/ads/reducer'
import { makeSelectAds, selectAllAds, selectMappedAds } from '../../feature/ads/selector'
import { Button } from '../Button'
import { FormattedPrice } from '../FormattedPrice'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledProductCard } from './styled'

type ProductCardProps = Omit<
  AdDto,
  'authorId' | 'categoryIds' | 'updated_at' | 'images' | 'countryId'
> & {
  // TODO REMOVE OPTIONAL
  imageSrc: string
  rating: number
  authorName: string
  category: string
  fullHeart: boolean
}

export const ProductCard = ({
  title,
  description = 'item is not present',
  price = { value: 0, currency: 'EUR' },
  imageSrc,
  premium,
  hidden,
  rating,
  authorName,
  category,
  created_at,
  id,
  fullHeart
}: ProductCardProps) => {
  const dispatch = useDispatch()
  const ads = useSelector(selectAllAds)

  const handleFavButton = (adId: string) => {
    const selectedAd = ads.find((ad) => ad.id === adId)
    dispatch(adsActions.favouritesAction(selectedAd!))
  }
  return (
    <StyledProductCard>
      <div className="image-container">
        <Image width={200} height={300} src={imageSrc} alt={description} cover={false} />
      </div>
      <div className="category-title-author">
        <div className="category-title">
          <Text bold upperCase color="lightGray" variant="p">
            {category}
          </Text>
          <div>
            <Text color="primary" variant="h4" className="title-container">
              {title}
            </Text>
            <Text>{`Annuncio pubblicato il ${new Date(created_at).toLocaleString(
              'it-IT'
            )}`}</Text>
          </div>
        </div>
        <div className="author-rating">
          <Text variant="p" bold>
            {authorName}
          </Text>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="price-container">
        <FormattedPrice price={price} variant="p" size="xl" />
      </div>
      {premium && (
        <Text color="primary" bold>
          Featured
        </Text>
      )}
      <div className="button-container">
        <Button
          fontSize="lg"
          color="primary"
          backgroundColor="textLight"
          icon={fullHeart ? ['fas', 'heart'] : ['far', 'heart']}
          onClick={() => {
            console.log('button clicked')
            handleFavButton(id)
          }}
        />
      </div>
    </StyledProductCard>
  )
}
