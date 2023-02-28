import { useDispatch, useSelector } from 'react-redux'
import { appActions } from '../../feature/app/reducers'
import { selectActiveModal } from '../../feature/app/selector'
import { modals } from './modals'

export const ModalManager = () => {
  const { type, opened, data } = useSelector(selectActiveModal)
  const dispatch = useDispatch()

  const onClose = () => dispatch(appActions.hideModal())

  if (typeof type === 'undefined') return null

  const ActiveModal = modals[type]

  return <ActiveModal data={data} open={opened} onClose={onClose} />
}
