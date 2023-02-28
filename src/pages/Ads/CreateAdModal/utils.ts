import { NewAd } from '../../../feature/ads/model'

export const validateForm = (newAd: Partial<NewAd>): newAd is NewAd => {
  return (
    Object.values(newAd).every((value) => !!value) && !Number.isNaN(Number(newAd.price))
  )
}
