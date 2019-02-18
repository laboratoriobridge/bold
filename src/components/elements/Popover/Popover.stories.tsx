import { storiesOf } from '@storybook/react'
import React from 'react'

import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'
import { Icon } from '../Icon'

import { Popover } from './Popover'

storiesOf('Components/Popover', module)
    .add('default', () => (
        <HFlow hSpacing={0.5} alignItems='center'>
            <Popover
                title='Title'
                text={`Ullam enim aut ipsum nesciunt maiores iste reiciendis
                cupiditate voluptas aut voluptas excepturi cupidatat cum laboriosam`}
            >
                <Button size='small'>Action</Button>
            </Popover>
            <Popover
                placement='bottom'
                text={`Ducimus velit consectetur est est corporis consectetur a
                reprehenderit voluptas id provident iure incidunt`}
            >
                <Button skin='ghost' size='small'><Icon icon='infoCircleOutline' /></Button>
            </Popover>
        </HFlow>
    ))
