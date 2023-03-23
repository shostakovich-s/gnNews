import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CountryNewsResponse} from './types'

export const getApiData = createApi({
    reducerPath: 'getApiData',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2' }),
    endpoints: (builder) => ({
    getCountryByName: builder.query<CountryNewsResponse, string>({
        query: (name) => `top-headlines?country=${name}&apiKey=${import.meta.env.VITE_NEWSAPI_APIKEY}`,
    }),
  }),
})

export const { useGetCountryByNameQuery } = getApiData