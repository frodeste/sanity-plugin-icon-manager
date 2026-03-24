import {useTheme} from '@sanity/ui'
import {ReactNode} from 'react'
import {ObjectInputProps} from 'sanity'
import {ThemeProvider} from 'styled-components'

import {AppStoreContextProvider} from '../../store/context'
import IconManagerPluginOptions from '../../types/IconManagerPluginOptions'
import {IconManagerType} from '../../types/IconManagerType'
import IconManagerInputComponent from './App'

export default function IconManagerInputComponentWrapper(
  objectInputProps: ObjectInputProps<IconManagerType>,
  pluginOptions: void | IconManagerPluginOptions,
): ReactNode {
  const theme = useTheme()
  return (
    <AppStoreContextProvider>
      <ThemeProvider theme={theme}>
        <IconManagerInputComponent
          objectInputProps={objectInputProps}
          pluginOptions={pluginOptions}
        />
      </ThemeProvider>
    </AppStoreContextProvider>
  )
}
