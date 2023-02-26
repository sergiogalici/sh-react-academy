import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAd } from '../../api'
import { AdDto } from '../../api/type'
import { adModalActions } from '../../feature/adModal/reducers'
import { selectAdModal } from '../../feature/adModal/selector'
import {
  makeSelectCategoryIdByTitle,
  selectCategoriesTitles
} from '../../feature/categories/selectors'
import {
  makeSelectCountryIdByName,
  selectCountriesNames
} from '../../feature/countries/selector'
import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { Text } from '../Text'

function InsertAdModal() {
  const categoriesTitles = useSelector(selectCategoriesTitles)
  const countriesNames = useSelector(selectCountriesNames)
  const [selCountry, setSelCountry] = useState(countriesNames[0])
  const [selCategory, setSelCategory] = useState(categoriesTitles[0])
  const currentCountryId = useSelector(makeSelectCountryIdByName(selCountry))
  const currentCategoryId = useSelector(makeSelectCategoryIdByTitle(selCategory))
  const [body, setBody] = useState<Partial<AdDto>>({})
  const showModal = useSelector(selectAdModal)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(adModalActions.showModal(false))
    const adData: Partial<AdDto> = {
      ...body,
      // TODO correctly post a user instead of hardcoding a random ID
      authorId: 'c7fe52f8-1802-471f-a3ce-bf2aa214eb76',
      countryId: currentCountryId,
      categoryIds: [currentCategoryId]
    }
    postAd(adData)
      .then(() => {
        console.log('POST DONE!')
        setBody({})
      })
      .catch((error) => {
        console.log('POST ERROR!', error)
      })
    dispatch(adModalActions.showModal(false))
  }

  const checkBeforePost = () => {
    if (body.title && body.description && body.images && body.price) {
      handleSubmit()
    } else {
      setBody({})
      dispatch(adModalActions.showModal(false))
      // TODO add a notification that says to complete all fields before submitting
      console.log('Complete all fields before submitting ', body)
    }
  }

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
                options={countriesNames}
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
                options={categoriesTitles}
                onChange={(value) => setSelCategory(value)}
              />
            </form>
            <Button
              fullWidth
              size="md"
              fontSize="lg"
              variant="primary"
              onClick={checkBeforePost}
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
