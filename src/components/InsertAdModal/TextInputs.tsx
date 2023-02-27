import React, { SetStateAction } from 'react'
import { AdDto } from '../../api/type'
import { Input } from '../Input'
import { OptionsType, Select } from '../Select'

type TextInputsProps = {
  body: AdDto
  setBody: SetStateAction<any>
  categoriesTitles: OptionsType[]
  countriesNames: OptionsType[]
}

const TextInputs = ({
  body,
  setBody,
  categoriesOptions,
  countriesOptions
}: TextInputsProps) => {
  return (
    <>
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
        value={body.countryId}
        options={countriesOptions}
        onChange={(value) => {
          setBody({ ...body, value })
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
    </>
  )
}

export default TextInputs
