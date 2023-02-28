import { ModalType } from '../../feature/app/model'
import { CreateAdModal } from '../../pages/Ads/CreateAdModal/CreateAd'
import { ModalComponentProps } from './types'

export const modals: Record<ModalType, (props: ModalComponentProps) => JSX.Element> = {
  [ModalType.CREATE_AD]: CreateAdModal
}
