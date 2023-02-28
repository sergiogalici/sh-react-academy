import { ModalDataByType, ModalType } from '../../feature/app/model'

export type ModalComponentProps = {
  open: boolean
  onClose: () => void
  data?: ModalDataByType[ModalType]
}
