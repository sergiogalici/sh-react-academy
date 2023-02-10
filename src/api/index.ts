import { apiClient, currencyApiClient } from './client'
import { AdDto, CategoryDto, CurrencyRatesDto, UserDto } from './type'

export const getAds = () => apiClient.get<AdDto[]>('ads')

export const getCategories = () => apiClient.get<CategoryDto[]>('categories')

export const getUsers = () => apiClient.get<UserDto[]>('users')

export const getUSDRates = () => currencyApiClient.get<CurrencyRatesDto>('latest')
