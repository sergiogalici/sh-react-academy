import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryDto, CountryDto } from '../../api/type'
import { CountriesState } from './model'

const initialState: CountriesState = { allCountries: [] }

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchCountriesSuccess: (state, { payload }: PayloadAction<CountryDto[]>) => {
      state.allCountries = payload
    }
  }
})

export const countriesActions = countriesSlice.actions
export const countriesReducer = countriesSlice.reducer
