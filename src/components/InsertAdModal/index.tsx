import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAd } from '../../api'
import { apiClient } from '../../api/client'
import { AdDto } from '../../api/type'
import { adModalActions } from '../../feature/adModal/reducers'
import { selectAdModal } from '../../feature/adModal/selector'
import {
  makeSelectCategoryIdByTitle,
  selectAllCategories
} from '../../feature/categories/selectors'
import {
  makeSelectCountryIdByName,
  selectAllCountries
} from '../../feature/countries/selector'
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
  const currentCountryId = useSelector(makeSelectCountryIdByName(selCountry))
  const currentCategoryId = useSelector(makeSelectCategoryIdByTitle(selCategory))
  const [body, setBody] = useState<Partial<AdDto>>({})
  const [submit, setSubmit] = useState<boolean>(false)
  const showModal = useSelector(selectAdModal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (submit) {
      postAd(body)
    }
    setSubmit(false)
    setBody({})
    console.log('POST DONE!')
  }, [submit])

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
              <Input
                onChange={(e) => setBody({ ...body, title: e })}
                fullWidth
                borderRadius={1}
                placeText="Inserisci un titolo"
              />
              <Input
                onChange={(e) => setBody({ ...body, description: e })}
                fullWidth
                borderRadius={1}
                placeText="Inserisci una descrizione"
              />
              <Input
                onChange={() => null}
                fullWidth
                borderRadius={1}
                placeText="Inserisci il tuo nome"
              />
              <Select
                fullWidth
                padding="sm"
                borderRadius={1}
                value={selCountry}
                options={optCountries}
                onChange={(value) => {
                  setSelCountry(value)
                }}
              />
              <Input
                onChange={(e) => setBody({ ...body, images: [e] })}
                fullWidth
                borderRadius={1}
                placeText="Inserisci un URL"
              />
              <Input
                onChange={(e) =>
                  setBody({ ...body, price: { value: Number(e), currency: 'EUR' } })
                }
                fullWidth
                borderRadius={1}
                placeText="Inserisci il prezzo"
              />
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
              onClick={() => {
                dispatch(adModalActions.showModal(false))
                setBody({
                  ...body,
                  authorId: 'c7fe52f8-1802-471f-a3ce-bf2aa214eb76',
                  countryId: currentCountryId,
                  categoryIds: [currentCategoryId]
                })
                console.log('body at submit ', body)
                if (Object.values(body).length === 4) {
                  setSubmit(true)
                } else {
                  console.log(
                    'Complete all fields before submitting ',
                    Object.values(body).length,
                    body
                  )
                }
              }}
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
