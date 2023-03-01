import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAds, postAd } from '../../api'
import { AdDto } from '../../api/type'
import { createFavouriteNotification } from '../../utils/notificationFactory'
import { appActions } from '../app/reducers'
import { mapAdForPost } from './mappers'
import { adsActions } from './reducer'
import { makeSelectAdsInFavourites } from './selector'

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

function* handleFavouriteNotification({
  payload
}: ReturnType<typeof adsActions.favouritesAction>) {
  const wasAddedInFav: boolean = yield select(makeSelectAdsInFavourites(payload.id))
  if (wasAddedInFav) {
    const notification = createFavouriteNotification(payload.title)
    yield put(appActions.addNotification(notification))
  }
}

export function* adsSaga() {
  yield takeLatest(adsActions.fetchAdsRequested.toString(), fetchAds)
  yield takeLatest(adsActions.postAdRequested.toString(), postAdSaga)
  yield takeEvery(adsActions.favouritesAction.toString(), handleFavouriteNotification)
}
