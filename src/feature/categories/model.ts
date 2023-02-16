import { CategoryDto } from '../../api/type'

export type CategoriesState = {
  allCategories: CategoryDto[]
  error?: string
}
