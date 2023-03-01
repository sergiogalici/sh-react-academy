import { createSelector } from '@reduxjs/toolkit'
import { CategoryDto } from '../../api/type'
import type { RootState } from '../store'

const selectCategories = (state: RootState) => state.categories

export const selectAllCategories = (state: RootState) => state.categories.allCategories

export const selectCategoriesTitles = createSelector(
  selectCategories,
  ({ allCategories }) => {
    return allCategories.map((cat) => cat.title)
  }
)

export const makeSelectCategoryIdByTitle = (title: string) =>
  createSelector(selectAllCategories, (allCategories) => {
    return allCategories
      .filter((category) => category.title === title)
      .map((category) => category.id)[0]
  })

export const selectCategoriesOptions = createSelector(
  selectAllCategories,
  (categories) => {
    return categories.map((cat) => ({ label: cat.title, value: cat.id }))
  }
)

export const selectCategoryById = createSelector(
  [selectCategories],
  ({ allCategories }) =>
    allCategories.reduce<Record<string, CategoryDto>>((acc, cat) => {
      return { ...acc, [cat.id]: cat }
    }, {})
)
