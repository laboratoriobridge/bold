import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Tooltip } from '../Tooltip/Tooltip'

import { IconMap } from './generated/Icons'
import { Icon, IconColor } from './Icon'

const colors: { [key in IconColor] } = {
    'none': 'none',
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
    .add('Icon', () => (
        <>
            {Object.keys(IconMap).map((key: any) => (
                <Tooltip key={key} text={key}>
                    <Icon
                        icon={key}
                        fill={select('fill', colors, 'normal')}
                        stroke={select('stroke', colors, 'none')}
                    />
                </Tooltip>
            ))}
        </>
    ))
