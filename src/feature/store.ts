import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { adModalReducer } from './adModal/reducers'
import { adsReducer } from './ads/reducer'
import { adsSaga } from './ads/saga'
import { categoriesReducer } from './categories/reducer'
import { categoriesSaga } from './categories/saga'
import { countriesReducer } from './countries/reducer'
import { countriesSaga } from './countries/saga'
import { usersReducer } from './users/reducer'
import { usersSaga } from './users/saga'

const rootReducer = {
  categories: categoriesReducer,
  users: usersReducer,
  countries: countriesReducer,
  ads: adsReducer,
  // TODO move to local state
  showModal: adModalReducer
}

function* rootSaga() {
  yield all([categoriesSaga(), usersSaga(), adsSaga(), countriesSaga()])
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
