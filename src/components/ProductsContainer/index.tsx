import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAds } from '../../api'
import { adsActions } from '../../feature/ads/reducer'
import { adsByCategory, selectMappedAds } from '../../feature/ads/selector'
import { ProductCard } from '../ProductCard'
import { Text } from '../Text'
import { StyledProdContainer } from './styled'

type Props = {
  category?: string
}

export const ProductsContainer = ({ category }: Props) => {
  const dispatch = useDispatch()
  const ads = useSelector(selectMappedAds)
  const filteredAds = useSelector(adsByCategory)

  useEffect(() => {
    getAds()
      .then((data) => dispatch(adsActions.fetchAdsSuccess(data)))
      .catch((e) => console.log(e.message))
  }, [dispatch])

  console.log(' MAPP ADSS ', ads)
  console.log(' FILTT ADSS ', filteredAds[category ?? 'immobili'])

  const adsToMap = category ? filteredAds[category ?? 'immobili'] : ads

  return (
    <StyledProdContainer>
      <Text color="lightGray" variant="h6">{`${ads.length} risultati`}</Text>
      <Text variant="h6">Annunci</Text>
      {adsToMap.map((ad) => {
        return (
          <Link key={ad.id} style={{ all: 'unset', cursor: 'pointer' }} to={`${ad.id}`}>
            <ProductCard
              authorName={ad.author.username}
              category={ad.category.title}
              rating={ad.author.rating}
              title={ad.title}
              price={ad.price}
              description={ad.description}
              imageSrc={ad.images[0]}
            />
          </Link>
        )
      })}
    </StyledProdContainer>
  )
}
