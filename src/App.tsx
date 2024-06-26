import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './style/gobal'
import { defaultTheme } from './style/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Rounter } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Rounter />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
