import 'styled-components'

import type {Theme} from '@sanity/ui/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
