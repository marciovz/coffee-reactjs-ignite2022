import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { ProvidersStore } from './store/providers'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProvidersStore>
          <Router />
        </ProvidersStore>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
