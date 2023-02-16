import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDto } from '../../api/type'
import { CategoriesState } from './model'

const initialState: CategoriesState = { allCategories: [] }

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesSuccess: (state, { payload }: PayloadAction<CategoryDto[]>) => {
      state.allCategories = payload
      delete state.error
    },
    fetchCategoriesFailed: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    }
  }
})

export const categoriesActions = {
  ...categoriesSlice.actions,
  fetchCategoriesRequested: createAction('CATEGORIES_FETCH_REQUESTED')
}
export const categoriesReducer = categoriesSlice.reducer
