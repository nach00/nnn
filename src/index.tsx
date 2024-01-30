import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import config from './tamagui.config'

import './index.css'
import Root from './Root'
import { TamaguiProvider } from 'tamagui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TamaguiProvider config={config} defaultTheme="dark">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </TamaguiProvider>
  </React.StrictMode>
)
