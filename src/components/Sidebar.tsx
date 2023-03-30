import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCountryState } from '../features/countryState'
import Drawer from '@mui/material/Drawer'

export const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <>
      {countriesToDisplay.map((element) => {
        return (
          <div
            key={element.country}
            onClick={() => dispatch(setCountryState(element.country))}
          >
            <Link to={`/country/${element.country}`}>{element.name}</Link>
          </div>
        )
      })}
    </>
  )
}

const countriesToDisplay = [
  { country: 'pl', name: 'Polska', flag: 'Holder' },
  { country: 'gb', name: 'Wielka Brytania', flag: 'Holder' },
  { country: 'de', name: 'Niemcy', flag: 'Holder' },
  { country: 'fr', name: 'Francja', flag: 'Holder' },
  { country: 'it', name: 'Włochy', flag: 'Holder' },
]
