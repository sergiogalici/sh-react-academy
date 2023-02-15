import { createSelector } from '@reduxjs/toolkit'
import { CountryDto } from '../../api/type'
import { RootState } from '../store'

const selectCountries = (state: RootState) => state.countries

export const selectAllCountries = createSelector(
  selectCountries,
  ({ allCountries }) => allCountries
)

export const selectCountryById = createSelector([selectCountries], ({ allCountries }) =>
  allCountries.reduce<Record<string, CountryDto>>((acc, country) => {
    return { ...acc, [country.id]: country }
  }, {})
)
