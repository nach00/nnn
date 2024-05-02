import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import config from './tamagui.config'

import './index.css'
import Root from './Root'
import { TamaguiProvider } from 'tamagui'
import { config } from './tamagui.config'
type Conf = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TamaguiProvider config={config} defaultTheme="dark">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </TamaguiProvider>
  </React.StrictMode>
)
