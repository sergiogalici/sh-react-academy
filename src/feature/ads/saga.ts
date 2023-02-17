import { call, put, takeLatest } from 'redux-saga/effects'
import { getAds } from '../../api'
import { AdDto } from '../../api/type'
import { adsActions } from './reducer'

export function* fetchAds() {
  try {
    const ads: AdDto[] = yield call(getAds)
    yield put(adsActions.fetchAdsSuccess(ads))
  } catch (e) {
    if (e instanceof Error) {
      yield put(adsActions.fetchAdsFailed(e.message))
    }
  }
}

export function* adsSaga() {
  yield takeLatest(adsActions.fetchAdsRequested.toString(), fetchAds)
}
