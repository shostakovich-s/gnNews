import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CountryState {
  countryViewState: string
}

const initialState: CountryState = {
  countryViewState: 'pl'
}

export const countryState = createSlice({
  name: 'countryState',
  initialState,
  reducers: {
    setCountryState: (state, action: PayloadAction<CountryState['countryViewState']>) => {
      state.countryViewState = action.payload
    },
  },
})

export const { setCountryState } = countryState.actions

export default countryState.reducer