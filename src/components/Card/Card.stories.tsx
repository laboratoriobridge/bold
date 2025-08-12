import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { VFlow } from '../VFlow'
import { HeadingSection } from '../HeadingSection'
import { HFlow } from '../HFlow'
import { Checkbox } from '../Checkbox'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Tag } from '../Tag'
import { Heading } from '../Heading'
import { Status } from '../Status'
import { Card, CardProps, CardVariant } from './Card'

const variants: { [key in CardVariant]: CardVariant } = {
  elevated: 'elevated',
  flat: 'flat',
  outline: 'outline',
}

export default {
  title: 'Components/Card',
}

const CardDefault = (props: CardProps) => (
  <Card {...props}>
    <HFlow hSpacing={0.5} style={{ gridAutoColumns: 'auto 1fr' }}>
      <Checkbox />
      <HFlow alignItems='center' justifyContent='space-between'>
        <VFlow vSpacing={0.5}>
          <VFlow vSpacing={0.25}>
            <HFlow hSpacing={0.5} alignItems='center'>
              <Heading level={4}>Title</Heading>
              <Tag>Tag label</Tag>
            </HFlow>
            <Text>Description</Text>
          </VFlow>
          <Status type='info' text='Status description' />
        </VFlow>
        <Button skin='ghost' size='small'>
          <Icon icon='adjust' />
        </Button>
      </HFlow>
    </HFlow>
  </Card>
)

export const Default = () => {
  const variant = select('variant', variants, 'outline')
  const selected = boolean('selected', false)
  const invalid = boolean('invalid', false)
  const disabled = boolean('disabled', false)

  return (
    <VFlow>
      <HeadingSection level={2} title='Interactive'>
        <CardDefault
          variant={variant}
          selected={selected}
          disabled={disabled}
          error={invalid}
          onClick={action('Card clicked')}
        />
      </HeadingSection>
      <HeadingSection level={2} title='Non interactive'>
        <CardDefault variant={variant} selected={selected} disabled={disabled} error={invalid} />
      </HeadingSection>
    </VFlow>
  )
}

export const Variants = () => {
  const invalid = boolean('invalid', false)

  return (
    <VFlow>
      <HeadingSection level={2} title='Outline card'>
        <CardDefault variant='outline' error={invalid} />
      </HeadingSection>
      <HeadingSection level={2} title='Elevated card'>
        <CardDefault variant='elevated' error={invalid} />
      </HeadingSection>
      <HeadingSection level={2} title='Flat card'>
        <CardDefault variant='flat' error={invalid} />
      </HeadingSection>
    </VFlow>
  )
}

export const Clickable = () => {
  const selected = boolean('selected', false)
  const invalid = boolean('invalid', false)
  const disabled = boolean('disabled', false)

  return (
    <VFlow>
      <HeadingSection level={2} title='Outline card'>
        <CardDefault
          variant='outline'
          selected={selected}
          disabled={disabled}
          error={invalid}
          onClick={action('Card clicked')}
        />
      </HeadingSection>
      <HeadingSection level={2} title='Elevated card'>
        <CardDefault
          variant='elevated'
          selected={selected}
          disabled={disabled}
          error={invalid}
          onClick={action('Card clicked')}
        />
      </HeadingSection>
      <HeadingSection level={2} title='Flat card'>
        <CardDefault
          variant='flat'
          selected={selected}
          disabled={disabled}
          error={invalid}
          onClick={action('Card clicked')}
        />
      </HeadingSection>
    </VFlow>
  )
}
