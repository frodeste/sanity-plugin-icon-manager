import {addAPIProvider} from '@iconify/react'

import IconManagerPluginOptions from '../types/IconManagerPluginOptions'

const iconManagerSetup = (config: void | IconManagerPluginOptions): void => {
  try {
    if (config?.customEndpoint && new URL(config.customEndpoint)) {
      addAPIProvider('', {
        resources: [config.customEndpoint],
      })
    }
  } catch (e: unknown) {
    console.error('Icon Manager Plugin', e)
  }
}

export default iconManagerSetup
