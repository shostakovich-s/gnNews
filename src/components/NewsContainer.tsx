import { useGetCountryByNameQuery } from '../services/getApiData'
import { useSelector } from 'react-redux'
import { RootState } from '../services/store'
import { News } from './News'

export const NewsContainer = () => {
  const countryViewState = useSelector(
    (state: RootState) => state.countryState.countryViewState,
  )
  const { data, error, isLoading } = useGetCountryByNameQuery(countryViewState)

  return (
    <div>
      {data?.articles.map((elem, index) => {
        return <News articleObject={elem} key={index} />
      })}
    </div>
  )
}
