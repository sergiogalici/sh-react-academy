import { call, put, takeLatest } from 'redux-saga/effects'
import { getCountries } from '../../api'
import { CountryDto } from '../../api/type'
import { countriesActions as ca } from './reducer'

export function* fetchCountries() {
  try {
    const countries: CountryDto[] = yield call(getCountries)
    yield put(ca.fetchCountriesSuccess(countries))
  } catch (e) {
    if (e instanceof Error) {
      yield put(ca.fetchCountriesFailed(e.message))
    }
  }
}

export function* countriesSaga() {
  yield takeLatest(ca.fetchCountriesRequested.toString(), fetchCountries)
}
