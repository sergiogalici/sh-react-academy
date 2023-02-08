import { apiClient } from './client'
import { AdDto, CategoryDto, UserDto } from './type'

export const getAds = () => apiClient.get<AdDto[]>('ads')

export const getCategories = () => apiClient.get<CategoryDto[]>('categories')

export const getUsers = () => apiClient.get<UserDto[]>('users')
