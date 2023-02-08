import { apiClient } from './client'
import { AdDto, CategoryDto } from './type'

export const getAds = () => apiClient.get<AdDto[]>('ads')

export const getCategories = () => apiClient.get<CategoryDto[]>('categories')
