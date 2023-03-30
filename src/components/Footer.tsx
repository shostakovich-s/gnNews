import { useCurrentTime } from '../hooks'
import { useGetCountryByNameQuery } from '../services/getApiData'
import { useSelector } from 'react-redux'
import { RootState } from '../services/store'

export const Footer = () => {
  const countryViewState = useSelector(
    (state: RootState) => state.countryState.countryViewState,
  )
  const { data, error, isLoading } = useGetCountryByNameQuery(countryViewState)
  const currentTime = useCurrentTime()
  return (
    <div>
      <div>{currentTime}</div>
      <div>Liczba artykułów {data?.articles.length}</div>
    </div>
  )
}
