import {Flex, Text, Tooltip} from '@sanity/ui'
import {ReactNode, useMemo} from 'react'
import {BlockProps} from 'sanity'

import {IconManagerType} from '../../types/IconManagerType'
import IconPreview from '../IconPreview'

export type IconManagerInlineBlockComponentProps = BlockProps & IconManagerType

function IconInlinePreviewView({value}: {value: IconManagerType}): ReactNode {
  return (
    <Tooltip
      portal
      placement='top'
      content={
        <Flex padding={2} direction='column' gap={2}>
          <Text size={1} weight='bold'>
            {value.metadata.iconName || value.icon}
          </Text>
          {value.metadata.collectionName && (
            <Text size={1} muted>
              {value.metadata.collectionName}
            </Text>
          )}
        </Flex>
      }
    >
      <div style={{padding: '0 10px'}}>
        <IconPreview
          value={{icon: value.icon, metadata: value.metadata}}
          width='1rem'
          height='1rem'
          hideText
        />
      </div>
    </Tooltip>
  )
}

export default function IconManagerInlineBlockComponent(props: BlockProps): ReactNode {
  const value = props.value as unknown as IconManagerType
  const hasValidIcon = Boolean(value.icon && value.metadata)
  const renderPreview = useMemo(() => {
    if (!hasValidIcon) return props.renderPreview
    return function IconInlinePreview() {
      return <IconInlinePreviewView value={value} />
    }
  }, [hasValidIcon, value, props.renderPreview])

  return props.renderDefault({
    ...props,
    renderPreview,
  })
}
