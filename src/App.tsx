import { ThemeProvider } from 'styled-components'

import { MainContainer } from './pages/main'
import { GlobalStyle } from './style/gobal'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <MainContainer />
    </ThemeProvider>
  )
}
