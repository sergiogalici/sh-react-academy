import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDto, CountryDto } from '../../api/type'
import { CountriesState } from './model'

const initialState: CountriesState = { allCountries: [] }

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchCountriesSuccess: (state, { payload }: PayloadAction<CountryDto[]>) => {
      state.allCountries = payload
    },
    fetchCountriesFailed: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    }
  }
})

export const countriesActions = {
  ...countriesSlice.actions,
  fetchCountriesRequested: createAction('COUNTRIES_FETCH_REQUESTED')
}
export const countriesReducer = countriesSlice.reducer
