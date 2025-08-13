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
import { Card, CardVariant } from './Card'

const variants: { [key in CardVariant]: CardVariant } = {
  outline: 'outline',
  float: 'float',
  plain: 'plain',
}

const Content = () => (
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
)

export default {
  title: 'Components/Card',
}

export const Default = () => {
  const variant = select('variant', variants, 'outline')
  const selected = boolean('selected', false)
  const invalid = boolean('invalid', false)
  const disabled = boolean('disabled', false)

  return (
    <VFlow>
      <HeadingSection level={2} vSpace={8} title='Interactive'>
        <Card
          variant={variant}
          selected={selected}
          disabled={disabled}
          error={invalid}
          onClick={action('Card clicked')}
        >
          <Content />
        </Card>
      </HeadingSection>
      <HeadingSection level={2} vSpace={8} title='Non-interactive'>
        <Card variant={variant} selected={selected} disabled={disabled} error={invalid}>
          <Content />
        </Card>
      </HeadingSection>
    </VFlow>
  )
}

export const Variants = () => {
  const invalid = boolean('invalid', false)

  return (
    <VFlow>
      <HeadingSection level={2} vSpace={8} title='Outline card'>
        <Card variant='outline' error={invalid}>
          <Content />
        </Card>
      </HeadingSection>
      <HeadingSection level={2} vSpace={8} title='Float card'>
        <Card variant='float' error={invalid}>
          <Content />
        </Card>
      </HeadingSection>
      <HeadingSection level={2} vSpace={8} title='Plain card'>
        <Card variant='plain' error={invalid}>
          <Content />
        </Card>
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
      <HeadingSection level={2} vSpace={8} title='Outline card'>
        <Card
          variant='outline'
          selected={selected}
          disabled={disabled}
          error={invalid}
          onClick={action('Card clicked')}
        >
          <Content />
        </Card>
      </HeadingSection>
      <HeadingSection level={2} vSpace={8} title='Float card'>
        <Card variant='float' selected={selected} disabled={disabled} error={invalid} onClick={action('Card clicked')}>
          <Content />
        </Card>
      </HeadingSection>
      <HeadingSection level={2} vSpace={8} title='Plain card'>
        <Card variant='plain' selected={selected} disabled={disabled} error={invalid} onClick={action('Card clicked')}>
          <Content />
        </Card>
      </HeadingSection>
    </VFlow>
  )
}
