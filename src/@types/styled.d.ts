import { defaultTheme } from '../style/themes/default'
import 'styled-components'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
