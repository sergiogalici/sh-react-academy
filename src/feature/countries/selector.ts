import { createSelector } from '@reduxjs/toolkit'
import { CountryDto } from '../../api/type'
import { RootState } from '../store'

const selectCountries = (state: RootState) => state.countries

export const selectAllCountries = createSelector(
  selectCountries,
  ({ allCountries }) => allCountries
)

export const selectCountriesNames = createSelector(selectAllCountries, (allCountries) => {
  return allCountries.map((country) => country.name)
})

export const makeSelectCountryIdByName = (name: string) =>
  createSelector(selectAllCountries, (allCountries) => {
    return allCountries
      .filter((country) => country.name === name)
      .map((country) => country.id)[0]
  })

export const selectCountryById = createSelector([selectCountries], ({ allCountries }) =>
  allCountries.reduce<Record<string, CountryDto>>((acc, country) => {
    return { ...acc, [country.id]: country }
  }, {})
)
