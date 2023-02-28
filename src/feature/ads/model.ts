import { AdDto, CategoryDto, UserDto } from '../../api/type'

export type AdsState = {
  allAds: AdDto[]
  filterData: FilterDataType
  error?: string
  favourites: AdDto[]
}

export type FilterDataType = {
  filter?: 'created_at' | 'value'
  order?: 'ASC' | 'DESC'
}

export type MappedAdsType = Omit<AdDto, 'authorId' | 'categoryIds'> & {
  author: UserDto
  category: CategoryDto
}

export type NewAd = {
  title: string
  description: string
  name: string
  categoryId: string
  price: string
  images: string
  countryId: string
}
