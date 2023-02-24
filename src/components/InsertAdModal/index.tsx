import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adModalActions } from '../../feature/adModal/reducers'
import { selectAdModal } from '../../feature/adModal/selector'
import { selectAllCategories } from '../../feature/categories/selectors'
import { selectAllCountries } from '../../feature/countries/selector'
import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { Text } from '../Text'

function InsertAdModal() {
  const categories = useSelector(selectAllCategories)
  const countries = useSelector(selectAllCountries)
  const optCountries = countries.map((country) => country.name)
  const optCategories = categories.map((cat) => cat.title)
  const [selCountry, setSelCountry] = useState(optCountries[0])
  const [selCategory, setSelCategory] = useState(optCategories[0])

  const showModal = useSelector(selectAdModal)
  const dispatch = useDispatch()

  return (
    <>
      {showModal && (
        <Modal>
          <div className="card-panel">
            <Button
              size="md"
              variant="secondary"
              icon={['fas', 'xmark']}
              onClick={() => dispatch(adModalActions.showModal(false))}
            />
            <Text size="lg">Inserisci un nuovo annuncio</Text>
            <form className="input-list">
              <Input fullWidth borderRadius={1} placeText="Inserisci un titolo" />
              <Input fullWidth borderRadius={1} placeText="Inserisci una descrizione" />
              <Input fullWidth borderRadius={1} placeText="Inserisci il tuo nome" />
              <Select
                fullWidth
                padding="sm"
                borderRadius={1}
                value={selCountry}
                options={optCountries}
                onChange={(value) => setSelCountry(value)}
              />
              <Input fullWidth borderRadius={1} placeText="Inserisci un URL" />
              <Input fullWidth borderRadius={1} placeText="Inserisci il prezzo" />
              <Input fullWidth borderRadius={1} placeText="Seleziona la categoria" />
              <Select
                fullWidth
                padding="sm"
                borderRadius={1}
                value={selCategory}
                options={optCategories}
                onChange={(value) => setSelCategory(value)}
              />
            </form>
            <Button
              fullWidth
              size="md"
              fontSize="lg"
              variant="primary"
              onClick={() => dispatch(adModalActions.showModal(false))}
            >
              Conferma
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default InsertAdModal
