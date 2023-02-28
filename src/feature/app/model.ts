export type AppState = {
  modal: ModalState
  showNotification: boolean
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
