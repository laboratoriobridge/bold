import { number } from '@storybook/addon-knobs'
import React from 'react'

import { Spinner } from './Spinner'

export default {
  title: 'Components/Spinner',
}

export const Default = () => <Spinner size={number('size', 1)} borderWidth={number('borderWidth', 2)} />
