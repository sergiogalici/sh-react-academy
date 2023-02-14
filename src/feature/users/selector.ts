import { createSelector } from '@reduxjs/toolkit'
import { UserDto } from '../../api/type'
import { RootState } from '../store'

const selectUsers = (state: RootState) => state.users

export const selectAllUsers = (state: RootState) => state.users.allUsers

export const selectUsersById = createSelector(selectUsers, ({ allUsers }) =>
  allUsers.reduce<Record<string, UserDto>>((acc, user) => {
    return { ...acc, [user.id]: user }
  }, {})
)
