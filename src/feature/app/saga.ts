import { delay, put, select, race, call, take, takeLatest } from 'redux-saga/effects'
import { appActions } from './reducers'
import { selectNotificationDuration } from './selector'

function* hideNotification() {
  const duration: number = yield select(selectNotificationDuration)
  yield delay(duration)
  yield put(appActions.removeNotification())
}

function* handleNotifications() {
  yield race({
    hide: call(hideNotification),
    nextNotification: take(appActions.addNotification.toString())
  })
}

export function* appSaga() {
  yield takeLatest(appActions.addNotification.toString(), hideNotification)
}
