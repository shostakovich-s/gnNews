import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getApiData } from './getApiData'
import ViewStateReducer from '../features/articlesViewState'
import CountryStateReducer from '../features/countryState'

export const store = configureStore({
  reducer: {
    [getApiData.reducerPath]: getApiData.reducer,
    viewState: ViewStateReducer,
    countryState: CountryStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiData.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch