import { configureStore } from '@reduxjs/toolkit'
import { adsReducer } from './ads/reducer'
import { categoriesReducer } from './categories/reducer'
import { usersReducer } from './users/reducer'

const rootReducer = {
  categories: categoriesReducer,
  users: usersReducer,
  ads: adsReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
