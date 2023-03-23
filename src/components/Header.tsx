import React from 'react'
import { Link } from 'react-router-dom'
import UserExperience from './modals/UserExperienceModal'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../services/store'
import { toggleDisplayMode } from '../features/articlesViewState'
import { TfiViewListAlt, TfiViewGrid } from 'react-icons/tfi'

export const Header = () => {
  const viewState = useSelector((state: RootState) => state.viewState.displayMode)
  const dispatch = useDispatch()
  return (
    <div>
      <Link to="/">GNNews</Link>
      <UserExperience />
      <button
        onClick={() =>
          dispatch(toggleDisplayMode(viewState === 'list' ? 'grid' : 'list'))
        }
      >
        {viewState === 'list' ? <TfiViewGrid /> : <TfiViewListAlt />}
      </button>
    </div>
  )
}
