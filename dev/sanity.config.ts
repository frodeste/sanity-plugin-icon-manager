import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {IconManager} from 'sanity-plugin-icon-manager'

import {iconManagerTestDocument} from './schemas/testDocument'

export default defineConfig({
  name: 'default',
  title: 'Icon Manager Dev (Sanity 6)',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'placeholder',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool(),
    IconManager({
      keepItSimpleFor: 'all',
      customPalette: [{hex: '#AB87FF', title: 'Tropical Indigo'}],
    }),
  ],

  schema: {
    types: [iconManagerTestDocument],
  },
})
