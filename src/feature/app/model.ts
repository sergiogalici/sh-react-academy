export type AppState = {
  modal: ModalState
  notification: Notification | null
}

export type Notification = {
  id: string
  title: string
  message: string
  type: 'info' | 'error' | 'success' | 'warning'
}

export enum ModalType {
  CREATE_AD = 'createAd'
  // CREATE_CATEGORY
}

export type ModalDataByType = {
  [ModalType.CREATE_AD]: { productId: string }
  // [ModalType.CREATE_CATEGORY]: { productId: string }
}

type ModalState = {
  opened: boolean
  type?: ModalType
  data?: ModalDataByType[ModalType]
}
