import React from 'react'
import { Link } from 'react-router-dom'
import UserExperience from './modals/UserExperienceModal'

export const Header = () => {
  return (
    <div>
      <Link to="/">GNNews</Link>
      <UserExperience />
    </div>
  )
}
