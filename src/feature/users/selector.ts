import { UserDto } from '../../api/type'
import { RootState } from '../store'

export const selectAllUsers = (state: RootState) => state.users.allUsers
export const getUsersById = (state: RootState) =>
  state.users.allUsers.reduce<Record<string, UserDto>>((acc, user) => {
    return { ...acc, [user.id]: user }
  }, {})
