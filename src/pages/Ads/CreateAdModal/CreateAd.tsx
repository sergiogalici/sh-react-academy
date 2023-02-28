import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Modal } from '../../../components/Modal'
import { ModalComponentProps } from '../../../components/ModalManager/types'
import { Select } from '../../../components/Select'
import { NewAd } from '../../../feature/ads/model'
import { adsActions } from '../../../feature/ads/reducer'
import { selectCategoriesOptions } from '../../../feature/categories/selectors'
import { selectCountriesOptions } from '../../../feature/countries/selector'
import { formConfig } from './config'
import { validateForm } from './utils'

const elementsMap = {
  input: Input,
  select: Select
}

export const CreateAdModal = ({ open, onClose, data }: ModalComponentProps) => {
  const [newAd, setNewAd] = useState<Partial<NewAd>>({})

  const categoriesOptions = useSelector(selectCategoriesOptions)
  const countriesOptions = useSelector(selectCountriesOptions)

  const dispatch = useDispatch()

  const optionsMap = {
    countryId: countriesOptions,
    categoryId: categoriesOptions
  }

  const onSubmit = () => {
    if (!validateForm(newAd)) {
      return window.alert('Errore')
    }
    dispatch(adsActions.postAdRequested(newAd))
  }

  return (
    <Modal
      open={open}
      title="Inserisci annuncio"
      onClose={() => {
        console.log('Logica create ad')
        onClose()
      }}
    >
      {formConfig.map(({ type, id, placeholder }) => {
        const Component = elementsMap[type]
        return (
          <Component
            placeholder={placeholder}
            key={id}
            onChange={(value) => setNewAd({ ...newAd, [id]: value })}
            fullWidth
            value={newAd[id] ?? ''}
            {...(type === 'select' && { options: optionsMap[id] })}
          />
        )
      })}
      <Button fullWidth size="md" fontSize="lg" variant="primary" onClick={onSubmit}>
        Conferma
      </Button>
    </Modal>
  )
}
