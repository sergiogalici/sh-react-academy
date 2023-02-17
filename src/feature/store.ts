import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { adReducer } from './adDetail/reducers'
import { adsReducer } from './ads/reducer'
import { filteredAdsReducer } from './adsByCategory/reducer'
import { categoriesReducer } from './categories/reducer'
import { categoriesSaga } from './categories/saga'
import { countriesReducer } from './countries/reducer'
import { usersReducer } from './users/reducer'
import { usersSaga } from './users/saga'

const rootReducer = {
  categories: categoriesReducer,
  users: usersReducer,
  countries: countriesReducer,
  ads: adsReducer,
  filteredAds: filteredAdsReducer,
  ad: adReducer
}

// TODO make saga of getUsers and getCategories

function* rootSaga() {
  yield all([categoriesSaga(), usersSaga()])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>
}
