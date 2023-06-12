import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { ProvidersStore } from './store/providers'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

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
