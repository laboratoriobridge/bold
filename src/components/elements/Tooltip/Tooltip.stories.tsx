import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'

import { Tooltip } from './Tooltip'

storiesOf('Components/Tooltip', module)
    .add('default', () => (
        <HFlow hSpacing={0.5} alignItems='center'>
            <Tooltip text='Action button description'>
                <Button label='Action' size='small' />
            </Tooltip>
            <Tooltip
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In non urna sit amet eros finibus auctor ut vitae magna.
                Donec mollis eu velit nec ullamcorper.'
                placement='bottom-start'
            >
                <Button icon='trashcan' skin='ghost' size='small' />
            </Tooltip>
        </HFlow>
    ))
