import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Combobox } from './Combobox'

const fruits = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Avocado' },
  { value: 3, label: 'Banana' },
  { value: 4, label: 'Blueberry' },
  { value: 5, label: 'Coconut' },
  { value: 6, label: 'Grape' },
  { value: 7, label: 'Lemon' },
  { value: 8, label: 'Mango' },
  { value: 9, label: 'Melon' },
  { value: 10, label: 'Orange' },
  { value: 11, label: 'Peach' },
  { value: 12, label: 'Pear' },
]

storiesOf('Components|Combobox', module).add('default', () => (
  <Combobox<typeof fruits[0]>
    label='Fruit'
    name='fruit'
    items={fruits}
    error={text('error', '')}
    menuMinWidth={number('menuMinWidth (px)', undefined)}
    itemToString={(item) => item?.label}
    //   itemIsEqual={(a, b) => a.value === b.value}
    placeholder={text('placeholder', 'Select a value...')}
    //   multiple={boolean('multiple', false)}
    clearable={boolean('clearable', true)}
    disabled={boolean('disabled', false)}
    openOnFocus={boolean('openOnFocus', true)}
    //   loading={boolean('loading', false)}
    //   onChange={action('changed')}
    //   onBlur={action('blur')}
    //   onFocus={action('focus')}
  />
))
