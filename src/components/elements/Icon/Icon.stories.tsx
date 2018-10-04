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
    'secondary': 'secondary',
    'disabled': 'disabled',
    'primary': 'primary',
    'danger': 'danger',
    'info': 'info',
    'alert': 'alert',
    'success': 'success',
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
