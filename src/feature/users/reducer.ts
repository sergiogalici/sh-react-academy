import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDto } from '../../api/type'
import { UsersState } from './model'

const initialState: UsersState = { allUsers: [] }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersSuccess: (state, { payload }: PayloadAction<UserDto[]>) => {
      state.allUsers = payload
    }
  }
})

export const usersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer
