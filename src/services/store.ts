import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getApiData } from './getApiData'

export const store = configureStore({
  reducer: {
    [getApiData.reducerPath]: getApiData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApiData.middleware),
})
setupListeners(store.dispatch)