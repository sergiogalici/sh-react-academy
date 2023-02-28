import { CreateAdDto } from '../../api/type'
import { NewAd } from './model'

export const mapAdForPost = (ad: NewAd): CreateAdDto => {
  return {
    title: ad.title,
    authorId: 'c7fe52f8-1802-471f-a3ce-bf2aa214eb76',
    categoryIds: [ad.categoryId],
    countryId: ad.countryId,
    images: ad.images.replaceAll(' ', '').split(','),
    price: { value: Number(ad.price), currency: 'EUR' },
    description: ad.description
  }
}
