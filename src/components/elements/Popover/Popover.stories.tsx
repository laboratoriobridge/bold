import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'

import { Popover } from './Popover'

storiesOf('Components/Popover', module)
    .add('default', () => (
        <HFlow hSpacing={0.5} alignItems='center'>
            <Popover
                title='Title'
                text={`Ullam enim aut ipsum nesciunt maiores iste reiciendis
                cupiditate voluptas aut voluptas excepturi cupidatat cum laboriosam`}
            >
                <Button label='Action' size='small' />
            </Popover>
            <Popover
                placement='bottom'
                text={`Ducimus velit consectetur est est corporis consectetur a
                reprehenderit voluptas id provident iure incidunt`}
            >
                <Button icon='infoCircleOutline' skin='ghost' size='small' />
            </Popover>
        </HFlow>
    ))
