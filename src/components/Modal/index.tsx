import { ReactNode } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { StyledModal, StyledModalHeader } from './styled'

type Props = {
  open: boolean
  title?: string
  onClose?: () => void
  children: ReactNode
}

export const Modal = ({ children, title, open, onClose }: Props) => {
  if (!open) return null

  const renderHeader = () => {
    return (
      <StyledModalHeader>
        <Button size="md" variant="secondary" icon={['fas', 'xmark']} onClick={onClose} />
        {title && <Text size="lg">{title}</Text>}
      </StyledModalHeader>
    )
  }

  return (
    <StyledModal>
      {renderHeader()}
      {children}
    </StyledModal>
  )
}
