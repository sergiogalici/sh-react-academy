import { apiClient, currencyApiClient } from './client'
import {
  AdDto,
  CategoryDto,
  CountryDto,
  CreateAdDto,
  CurrencyRatesDto,
  UserDto
} from './type'

export const getAds = () => apiClient.get<AdDto[]>('ads')

export const getCategories = () => apiClient.get<CategoryDto[]>('categories')

export const getUsers = () => apiClient.get<UserDto[]>('users')

export const getCountries = () => apiClient.get<CountryDto[]>('countries')

export const getUSDRates = () => currencyApiClient.get<CurrencyRatesDto>('latest')

export const getAdDetail = (id: string) => apiClient.get<AdDto>(`ads/${id}`)

export const postAd = (body: CreateAdDto) => apiClient.post('ads', body)
