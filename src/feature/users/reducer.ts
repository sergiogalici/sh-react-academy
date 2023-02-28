import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDto } from '../../api/type'
import { UsersState } from './model'

const initialState: UsersState = { allUsers: [] }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersSuccess: (state, { payload }: PayloadAction<UserDto[]>) => {
      state.allUsers = payload
    },
    fetchUsersFailed: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    }
  }
})

export const usersActions = {
  ...usersSlice.actions,
  fetchUsersRequested: createAction('users/fetchUsersRequested')
}
export const usersReducer = usersSlice.reducer
