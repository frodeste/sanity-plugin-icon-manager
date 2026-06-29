import {defineField, defineType} from 'sanity'
import {mediaPreview} from 'sanity-plugin-icon-manager'

export const iconManagerTestDocument = defineType({
  type: 'document',
  name: 'iconManagerTest',
  title: 'Icon Manager Test',
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
    },
    prepare({title, icon}) {
      return {
        title: title || 'Untitled',
        media: mediaPreview(icon),
      }
    },
  },
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'icon.manager',
      name: 'icon',
      title: 'Icon',
      description: 'Primary icon field for smoke testing',
    }),
    defineField({
      type: 'icon.manager',
      name: 'readonlyIcon',
      title: 'Read-only icon',
      readOnly: true,
    }),
    defineField({
      type: 'array',
      name: 'iconArray',
      title: 'Icon array',
      of: [{type: 'icon.manager'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Portable Text',
      of: [
        {
          type: 'block',
          of: [{type: 'icon.manager', title: 'Inline Icon'}],
        },
        {
          type: 'icon.manager',
          title: 'Block Icon',
        },
      ],
    }),
  ],
})
