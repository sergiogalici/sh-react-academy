import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard'
import { GradientContainer } from '../../components/ProductsContainer'
import { ProductsFilter } from '../../components/ProductsFilter'
import { Stack } from '../../components/Stack'
import { adsActions } from '../../feature/ads/reducer'
import { makeSelectAds } from '../../feature/ads/selector'

export const Ads = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const ads = useSelector(makeSelectAds(category))

  useEffect(() => {
    dispatch(adsActions.fetchAdsRequested())
  }, [dispatch])

  return (
    <GradientContainer
      preTitle={`${ads.length} risultati`}
      title="Annunci"
      leftSlot={<ProductsFilter />}
      rightSlot={
        <Stack direction="vertical">
          {ads.map((ad) => (
            <ProductCard
              key={ad.id}
              linkUrl={`/ads/${ad.category.title}/${ad.id}`}
              product={ad}
            />
          ))}
        </Stack>
      }
    />
  )
}
