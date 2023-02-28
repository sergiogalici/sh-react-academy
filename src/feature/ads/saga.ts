import { call, put, takeLatest } from 'redux-saga/effects'
import { getAds, postAd } from '../../api'
import { AdDto } from '../../api/type'
import { appActions } from '../app/reducers'
import { mapAdForPost } from './mappers'
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

export function* postAdSaga(action: ReturnType<typeof adsActions.postAdRequested>) {
  try {
    yield call(postAd, mapAdForPost(action.payload))
    yield put(appActions.hideModal())
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
}

export function* adsSaga() {
  yield takeLatest(adsActions.fetchAdsRequested.toString(), fetchAds)
  yield takeLatest(adsActions.postAdRequested.toString(), postAdSaga)
}
