import { UserDto } from '../../api/type'

export type UsersState = {
  allUsers: UserDto[]
  error?: string
}
