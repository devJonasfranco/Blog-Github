import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './style/gobal'
import { defaultTheme } from './style/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Rounter } from './Router'
import { DadosDaApiProvider } from './contexts/ContextDadosDaApi'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DadosDaApiProvider>
        <BrowserRouter>
          <Rounter />
        </BrowserRouter>
        <GlobalStyle />
      </DadosDaApiProvider>
    </ThemeProvider>
  )
}
