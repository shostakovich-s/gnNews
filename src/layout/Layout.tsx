import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { NewsContainer } from '../components/NewsContainer'

import { Provider } from 'react-redux'
import { store } from '../services/store'

export const Layout = () => {
  return (
    <Provider store={store}>
      <Header />
      <div>
        <Sidebar />
        <NewsContainer />
        <Outlet />
      </div>
      <Footer />
    </Provider>
  )
}
