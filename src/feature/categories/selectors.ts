import { CategoryDto } from '../../api/type'
import { RootState } from '../store'

export const selectAllCategories = (state: RootState) => state.categories.allCategories
export const getCategoryById = (state: RootState) =>
  state.categories.allCategories.reduce<Record<string, CategoryDto>>((acc, cat) => {
    return { ...acc, [cat.id]: cat }
  }, {})
