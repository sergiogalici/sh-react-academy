import { AdDto, CategoryDto, UserDto } from '../../api/type'

export type AdsState = {
  allAds: AdDto[]
  error?: string
}

export type MappedAdsType = Omit<AdDto, 'authorId' | 'categoryIds'> & {
  author: UserDto
  category: CategoryDto
}
