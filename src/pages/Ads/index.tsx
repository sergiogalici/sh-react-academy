import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductsContainer } from '../../components/ProductsContainer'
import { adsActions } from '../../feature/ads/reducer'
import { makeSelectAds } from '../../feature/ads/selector'

export const Ads = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const ads = useSelector(makeSelectAds(category))

  useEffect(() => {
    dispatch(adsActions.fetchAdsRequested())
  }, [dispatch])

  return <ProductsContainer products={ads} category={category} />
}
