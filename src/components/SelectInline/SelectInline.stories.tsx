import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DefaultItemType } from '../Select/SelectSingle'

import { SelectInline } from './SelectInline'

const items: DefaultItemType[] = [
  { label: 'Value #001', value: 1 },
  { label: 'Value #002', value: 2 },
  { label: 'Value #003', value: 3 },
  { label: 'Value #004', value: 4 },
]

const itemToString = (item: DefaultItemType) => item && item.label

storiesOf('Components/SelectInline', module)
  .add('default', () => (
    <SelectInline<DefaultItemType>
      items={items}
      itemToString={itemToString}
      onChange={action('changed')}
      placeholder='Search for a value'
      defaultButtonText='SelectInline'
    />
  ))

  .add('without search', () => (
    <SelectInline<DefaultItemType>
      items={items}
      itemToString={itemToString}
      onChange={action('changed')}
      placeholder='Search for a value'
      defaultButtonText='SelectInline'
      search={false}
    />
  ))
