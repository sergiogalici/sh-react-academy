import cn from 'classnames'
import { ReactNode, useEffect, useState } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { StyledModal, StyledModalHeader } from './styled'

type Props = {
  open: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ children, title, open, onClose }: Props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) setVisible(true)
  }, [open])

  if (!open) return null

  const closeModal = () => {
    setVisible(false)
    setTimeout(onClose, 200)
  }

  const renderHeader = () => {
    return (
      <StyledModalHeader>
        {title && <Text size="lg">{title}</Text>}
        <Button
          className="close-button"
          size="md"
          variant="secondary"
          icon={['fas', 'xmark']}
          onClick={closeModal}
        />
      </StyledModalHeader>
    )
  }

  return (
    <StyledModal className={cn({ visible })}>
      <section className="container">
        {renderHeader()}
        {children}
      </section>
    </StyledModal>
  )
}
