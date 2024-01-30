import { createRoot } from 'react-dom/client'

import { Root } from './Root'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Resume } from './pages/Resume'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Tamagui } from './pages/projects/Tamagui'
import ErrorPage from './pages/Error'
import config from './tamagui.config'

import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

import { TamaguiProvider } from 'tamagui'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/projects/tamagui',
    element: <Tamagui />,
  },
])

createRoot(document.querySelector('#root')!).render(
  <TamaguiProvider config={config} defaultTheme="dark">
    <RouterProvider router={router} />
  </TamaguiProvider>
)
