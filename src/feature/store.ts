import { configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './categories/reducer'

const rootReducer = {
  categories: categoriesReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
