import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAd } from '../../api'
import { AdDto } from '../../api/type'
import { adModalActions } from '../../feature/adModal/reducers'
import { selectAdModal } from '../../feature/adModal/selector'
import { selectAllCategories } from '../../feature/categories/selectors'
import { selectAllCountries } from '../../feature/countries/selector'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { OptionsType } from '../Select'
import { Text } from '../Text'
import TextInputs from './TextInputs'

const initialState: AdDto = {
  authorId: '',
  categoryIds: [],
  description: '',
  countryId: '',
  created_at: 0,
  hidden: false,
  premium: false,
  id: '',
  images: [],
  price: {
    value: 0,
    currency: 'EUR'
  },
  title: '',
  updated_at: 0
}

function InsertAdModal() {
  // Completely refactor the entire Component to make it just show its view

  const [body, setBody] = useState(initialState)

  // Refactor the states, some of them could be avoided (with selectors?)

  const showModal = useSelector(selectAdModal)
  const categories = useSelector(selectAllCategories)
  const countries = useSelector(selectAllCountries)
  const dispatch = useDispatch()

  const categoriesOptions = categories.reduce((acc, cate) => {
    return [
      ...acc,
      {
        value: cate.id,
        label: cate.title,
        id: cate.id
      }
    ]
  }, [] as OptionsType[])

  const countriesOptions = countries.reduce((acc, country) => {
    return [
      ...acc,
      {
        value: country.id,
        label: country.name,
        id: country.id
      }
    ]
  }, [] as OptionsType[])

  // Move the post request outside the component (in a Saga?)
  // Make a business logic that automatically update the Redux...
  // ... state of the ads to make them render immediately..
  // ... after the post request
  const handleSubmit = () => {
    dispatch(adModalActions.showModal(false))
    const adData: Partial<AdDto> = {
      ...body,
      // TODO correctly post a user instead of hardcoding an already existing ID
      authorId: 'c7fe52f8-1802-471f-a3ce-bf2aa214eb76'
    }
    postAd(adData)
      .then(() => {
        // add a notification for the user
        console.log('POST DONE!')
        setBody(initialState)
      })
      .catch((error) => {
        // add a notification for the user
        console.log('POST ERROR!', error)
      })
    dispatch(adModalActions.showModal(false))
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
      setBody(initialState)
      dispatch(adModalActions.showModal(false))
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
              onClick={() => dispatch(adModalActions.showModal(false))}
            />
            <Text size="lg">Inserisci un nuovo annuncio</Text>
            <form className="input-list">
              <TextInputs
                body={body}
                setBody={setBody}
                categoriesOptions={categoriesOptions}
                countriesOptions={countriesOptions}
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
