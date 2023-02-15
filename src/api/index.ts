import { adDetailApiClient, apiClient, currencyApiClient } from './client'
import { AdDto, CategoryDto, CountryDto, CurrencyRatesDto, UserDto } from './type'

export const getAds = () => apiClient.get<AdDto[]>('ads')

export const getCategories = () => apiClient.get<CategoryDto[]>('categories')

export const getUsers = () => apiClient.get<UserDto[]>('users')

export const getCountries = () => apiClient.get<CountryDto[]>('countries')

export const getUSDRates = () => currencyApiClient.get<CurrencyRatesDto>('latest')

export const getAdDetail = (id: string) => adDetailApiClient.get<AdDto>(id)
