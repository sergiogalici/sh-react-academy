import { call, put, takeLatest } from 'redux-saga/effects'
import { getUsers } from '../../api'
import { UserDto } from '../../api/type'
import { usersActions } from './reducer'

export function* fetchUsers() {
  try {
    const users: UserDto[] = yield call(getUsers)
    yield put(usersActions.fetchUsersSuccess(users))
  } catch (e) {
    if (e instanceof Error) {
      yield put(usersActions.fetchUsersFailed(e.message))
    }
  }
}

export function* usersSaga() {
  yield takeLatest(usersActions.fetchUsersRequested.toString(), fetchUsers)
}
