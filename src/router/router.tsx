import { createBrowserRouter } from 'react-router-dom'
import { NewsContainer } from '../components/NewsContainer'
import { Layout } from '../layout/Layout'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/country/:country', element: <NewsContainer /> }],
  },
])
