import React from 'react'
import { action } from '@storybook/addon-actions'
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
import { Card, ClickableCard } from '../Card'
import { Cell, Grid } from '../Grid'

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
  component: Card,
}

export const Default = (args) => {
  return (
    <div style={{ paddingBottom: '0.5rem' }}>
      <Card {...args}>
        <CardContent />
      </Card>
    </div>
  )
}

export const Clickable = (args) => {
  return (
    <div style={{ paddingBottom: '0.5rem' }}>
      <ClickableCard {...args} onClick={action('Card clicked')}>
        <ClickableCardContent />
      </ClickableCard>
    </div>
  )
}

Clickable.args = {
  selected: false,
}

export const Variants = (args) => {
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
          <Card variant='outline' invalid={args.invalid} disabled={args.disabled}>
            <CardContent />
          </Card>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Outline'>
          <ClickableCard variant='outline' selected={args.selected} invalid={args.invalid} disabled={args.disabled}>
            <ClickableCardContent />
          </ClickableCard>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Float'>
          <Card variant='float' invalid={args.invalid} disabled={args.disabled}>
            <CardContent />
          </Card>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Float'>
          <ClickableCard variant='float' selected={args.selected} invalid={args.invalid} disabled={args.disabled}>
            <ClickableCardContent />
          </ClickableCard>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Plain'>
          <Card variant='plain' invalid={args.invalid} disabled={args.disabled}>
            <CardContent />
          </Card>
        </HeadingSection>
      </Cell>
      <Cell size={6}>
        <HeadingSection level={4} vSpace={8} title='Plain'>
          <ClickableCard variant='plain' selected={args.selected} invalid={args.invalid} disabled={args.disabled}>
            <ClickableCardContent />
          </ClickableCard>
        </HeadingSection>
      </Cell>
    </Grid>
  )
}

Variants.args = {
  selected: false,
}
