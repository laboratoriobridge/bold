import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'
import { Icon } from '../Icon'

import { ButtonGroup } from './ButtonGroup'

storiesOf('Components/ButtonGroup', module)
    .add('default', () => (
        <HFlow>
            <ButtonGroup>
                <Button size='small' kind='primary'>First</Button>
                <Button size='small'>Second</Button>
                <Button size='small' disabled>Third</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button size='small'><Icon icon='trashOutline' /></Button>
                <Button size='small'><Icon icon='zoomOutline' /></Button>
            </ButtonGroup>
        </HFlow>
    ))
