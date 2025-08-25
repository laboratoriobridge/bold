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
import { Card, ClickableCard, CardVariant } from '../Card'
import { Cell, Grid } from '../Grid'

const variants: { [key in CardVariant]: CardVariant } = {
  outline: 'outline',
  float: 'float',
  plain: 'plain',
}

const CardContent = () => (
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

const ClickableCardContent = () => (
  <HFlow hSpacing={0.5} style={{ gridAutoColumns: 'auto 1fr' }}>
    <Checkbox />
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
  </HFlow>
)

export default {
  title: 'Components/Card',
}

export const Default = () => {
  const variant = select('variant', variants, 'outline')
  const invalid = boolean('invalid', false)
  const disabled = boolean('disabled', false)

  return (
    <div style={{ paddingBottom: '0.5rem' }}>
      <Card variant={variant} disabled={disabled} error={invalid}>
        <CardContent />
      </Card>
    </div>
  )
}

export const Clickable = () => {
  const variant = select('variant', variants, 'outline')
  const selected = boolean('selected', false)
  const invalid = boolean('invalid', false)
  const disabled = boolean('disabled', false)

  return (
    <div style={{ paddingBottom: '0.5rem' }}>
      <ClickableCard
        variant={variant}
        selected={selected}
        disabled={disabled}
        error={invalid}
        onClick={action('Card clicked')}
      >
        <ClickableCardContent />
      </ClickableCard>
    </div>
  )
}

export const Variants = () => {
  const invalid = boolean('invalid', false)
  const disabled = boolean('disabled', false)
  const selected = boolean('selected (clickable only)', false)

  return (
    <Grid>
      <Cell size={6}>
        <Heading level={2}>Default</Heading>
      </Cell>
      <Cell size={6}>
        <Heading level={2}>Clickable</Heading>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Outline'>
          <Card variant='outline' error={invalid} disabled={disabled}>
            <CardContent />
          </Card>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Outline'>
          <ClickableCard variant='outline' selected={selected} error={invalid} disabled={disabled}>
            <ClickableCardContent />
          </ClickableCard>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Float'>
          <Card variant='float' error={invalid} disabled={disabled}>
            <CardContent />
          </Card>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Float'>
          <ClickableCard variant='float' selected={selected} error={invalid} disabled={disabled}>
            <ClickableCardContent />
          </ClickableCard>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Plain'>
          <Card variant='plain' error={invalid} disabled={disabled}>
            <CardContent />
          </Card>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Plain'>
          <ClickableCard variant='plain' selected={selected} error={invalid} disabled={disabled}>
            <ClickableCardContent />
          </ClickableCard>
        </HeadingSection>
      </Cell>
    </Grid>
  )
}
