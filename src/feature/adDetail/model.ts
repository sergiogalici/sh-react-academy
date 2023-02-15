import { AdDto, CategoryDto, CountryDto, UserDto } from '../../api/type'

export type AdState = {
  ad: AdDto
}

export type MappedAd = Omit<AdDto, 'categoryIds' | 'authorId' | 'countryId'> & {
  category: CategoryDto
  author: UserDto
  country: CountryDto
}
