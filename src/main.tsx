import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Form } from './form.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'sucess',
    element: <Form />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
