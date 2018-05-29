import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../stories-addons/withPropTypes'
import { withTheme } from '../../../stories-addons/withTheme'
import { TextColor } from '../../../styles'

import { IconMap } from './generated/Icons'
import { Icon } from './Icon'

const colors: { [key in TextColor] } = {
    'normal': 'normal',
    'primary': 'primary',
    'danger': 'danger',
    'info': 'info',
    'alert': 'alert',
    'success': 'success',
    'gray90': 'gray90',
    'gray80': 'gray80',
    'gray70': 'gray70',
    'gray60': 'gray60',
    'gray50': 'gray50',
    'gray40': 'gray40',
    'gray30': 'gray30',
    'gray20': 'gray20',
    'gray10': 'gray10',
}

storiesOf('Components', module)
    .addDecorator(withPropTypes(``))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Icon', () => (
        <>
            {Object.keys(IconMap).map((key: any) =>
                <Icon key={key} icon={key} color={select('color', colors, 'normal')} title={key} />)
            }
        </>
    ))
