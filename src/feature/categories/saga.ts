import { call, put, takeLatest } from 'redux-saga/effects'
import { getCategories } from '../../api'
import { CategoryDto } from '../../api/type'
import { categoriesActions as ca } from './reducer'

export function* fetchCategories() {
  try {
    const categories: CategoryDto[] = yield call(getCategories)
    yield put(ca.fetchCategoriesSuccess(categories))
  } catch (e) {
    if (e instanceof Error) {
      yield put(ca.fetchCategoriesFailed(e.message))
    }
  }
}

export function* categoriesSaga() {
  yield takeLatest(ca.fetchCategoriesRequested.toString(), fetchCategories)
}
