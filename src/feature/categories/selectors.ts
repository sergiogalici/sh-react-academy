import { createSelector } from '@reduxjs/toolkit'
import { CategoryDto } from '../../api/type'
import { RootState } from '../store'

const selectCategories = (state: RootState) => state.categories

export const selectAllCategories = (state: RootState) => state.categories.allCategories

export const selectCategoryById = createSelector(
  [selectCategories],
  ({ allCategories }) =>
    allCategories.reduce<Record<string, CategoryDto>>((acc, cat) => {
      return { ...acc, [cat.id]: cat }
    }, {})
)
