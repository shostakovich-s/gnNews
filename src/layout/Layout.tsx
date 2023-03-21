import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

export const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
