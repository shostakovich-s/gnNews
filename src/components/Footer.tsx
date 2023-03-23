import { useCurrentTime } from '../hooks'
import { useGetCountryByNameQuery } from '../services/getApiData'

export const Footer = () => {
  const { data, error, isLoading } = useGetCountryByNameQuery('gb')
  const currentTime = useCurrentTime()
  return (
    <div>
      <div>{currentTime}</div>
      <div>Liczba artykułów {data?.articles.length}</div>
    </div>
  )
}
