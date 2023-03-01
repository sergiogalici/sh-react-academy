import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AdDto } from '../../api/type'
import { MappedAdsType } from '../../feature/ads/model'
import { adsActions } from '../../feature/ads/reducer'
import { makeSelectAd, makeSelectAdsInFavourites } from '../../feature/ads/selector'
import { Button } from '../Button'
import { FormattedPrice } from '../FormattedPrice'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { CardTitle } from './CardTitle'
import { StyledProductCard } from './styled'

const IMG_PLACEHOLDER =
  'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'

type Props = {
  product: MappedAdsType
  linkUrl?: string
}

export const ProductCard = ({ product, linkUrl }: Props) => {
  const {
    id,
    title,
    description = 'item is not present',
    price = { value: 0, currency: 'EUR' },
    images,
    premium,
    author,
    category,
    created_at
  } = product
  const dispatch = useDispatch()

  const adInFav = useSelector(makeSelectAdsInFavourites(id))

  const handleFavButton = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault()
      dispatch(adsActions.favouritesAction(product))
    },
    [dispatch, product]
  )

  const icon: IconProp = useMemo(
    () => (adInFav ? ['fas', 'heart'] : ['far', 'heart']),
    [adInFav]
  )

  const content = (
    <StyledProductCard>
      <div className="image-container">
        <Image
          width={200}
          height={300}
          src={images.at(0) || IMG_PLACEHOLDER}
          alt={description}
          cover={false}
          className="product-image"
        />
      </div>
      <div className="category-title-author">
        {premium && (
          <Text color="primary" bold>
            Featured
          </Text>
        )}
        <CardTitle category={category.title} title={title} createdAt={created_at} />
        <div className="author-rating">
          <Text variant="p" bold>
            {author.username}
          </Text>
          <Rating rating={author.rating} />
        </div>
      </div>
      <div className="price-container">
        <FormattedPrice price={price} variant="p" size="xl" />
      </div>
      <div className="button-container">
        <Button
          fontSize="lg"
          color="primary"
          backgroundColor="textLight"
          icon={icon}
          onClick={handleFavButton}
        />
      </div>
    </StyledProductCard>
  )

  return linkUrl ? <Link to={linkUrl}>{content}</Link> : content
}
