import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout/Layout'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/country/:country', element: <div>placeholder children</div> }],
  },
])
