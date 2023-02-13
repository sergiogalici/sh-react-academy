import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDto } from '../../api/type'
import { CategoriesState } from './model'

const initialState: CategoriesState = { allCategories: [] }

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesSuccess: (state, { payload }: PayloadAction<CategoryDto[]>) => {
      state.allCategories = payload
    }
  }
})

export const categoriesActions = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
