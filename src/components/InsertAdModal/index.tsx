import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAd } from '../../api'
import { AdDto } from '../../api/type'
import { appActions } from '../../feature/app/reducers'
import { selectAdModal } from '../../feature/app/selector'
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
  // Completely refactor the entire Component to make it just show its view
  const [body, setBody] = useState<Partial<AdDto>>({})
  const [selCountry, setSelCountry] = useState<string>('')
  const [selCategory, setSelCategory] = useState<string>('')

  // Refactor the states, some of them could be avoided (with selectors?)

  const showModal = useSelector(selectAdModal)
  const categoriesTitles = useSelector(selectCategoriesTitles)
  const countriesNames = useSelector(selectCountriesNames)
  const currentCountryId = useSelector(makeSelectCountryIdByName(selCountry))
  const currentCategoryId = useSelector(makeSelectCategoryIdByTitle(selCategory))
  const dispatch = useDispatch()

  useEffect(() => {
    if (categoriesTitles.length > 0 && countriesNames.length > 0) {
      setSelCountry(countriesNames[0])
      setSelCategory(categoriesTitles[0])
    }
  }, [categoriesTitles, countriesNames])

  // Move the post request outside the component (in a Saga?)
  // Make a business logic that automatically update the Redux...
  // ... state of the ads to make them render immediately..
  // ... after the post request
  const handleSubmit = () => {
    dispatch(appActions.showModal(false))
    const adData: Partial<AdDto> = {
      ...body,
      // TODO correctly post a user instead of hardcoding an already existing ID
      authorId: 'c7fe52f8-1802-471f-a3ce-bf2aa214eb76',
      countryId: currentCountryId,
      categoryIds: [currentCategoryId]
    }
    postAd(adData)
      .then(() => {
        // add a notification for the user
        console.log('POST DONE!')
        setBody({})
      })
      .catch((error) => {
        // add a notification for the user
        console.log('POST ERROR!', error)
      })
    dispatch(appActions.showModal(false))
  }

  // Move the business logic outside the component
  const checkBeforePost = () => {
    if (
      body.title &&
      body.description &&
      body.images &&
      body.price &&
      !Number.isNaN(body.price.value)
    ) {
      handleSubmit()
    } else {
      setBody({})
      dispatch(appActions.showModal(false))
      // TODO add a notification that says to complete all fields before submitting
      Number.isNaN(body.price?.value) && console.log('Insert a valid price please')
      console.log('Complete all fields before submitting ', body)
    }
  }

  return (
    // Component not easy to read, make it more readable
    <>
      {showModal && (
        <Modal>
          <div className="card-panel">
            <Button
              size="md"
              variant="secondary"
              icon={['fas', 'xmark']}
              onClick={() => dispatch(appActions.showModal(false))}
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
                onChange={(e) =>
                  setBody({ ...body, images: [...e.replaceAll(' ', '').split(',')] })
                }
                fullWidth
                borderRadius={1}
                placeText="Inserisci uno o più URL separati da una virgola"
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
