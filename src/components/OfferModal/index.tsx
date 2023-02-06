import React from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Select } from '../Select'
import { Text } from '../Text'
import { StyledOfferModal } from './styled'

type SelectAndInputs = {
  placeText?: string
  isSelect: boolean
  id: string | number
  options?: string[]
}

type OfferModalProps = {
  title: string
  items: SelectAndInputs[]
}

export const OfferModal = ({ title, items }: OfferModalProps) => {
  return (
    <StyledOfferModal>
      <Button icon={'x'} variant="secondary" />
      <Text variant="h2">{title}</Text>
      {items.map((item) => {
        return item.isSelect ? (
          <Select fullWidth options={item.options} />
        ) : (
          <Input placeText={item.placeText} fullWidth />
        )
      })}
      <Button fullWidth variant="primary">
        Conferma
      </Button>
    </StyledOfferModal>
  )
}
