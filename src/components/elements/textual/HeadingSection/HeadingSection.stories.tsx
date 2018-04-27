import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'
import { VFlow } from '../../../layout/Flow/VFlow'

import { HeadingSection } from './HeadingSection'

const levelOptions = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
}

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .addDecorator(withKnobs)
    .add('HeadingSection', () => (
        <VFlow>
            <HeadingSection level={select('level', levelOptions, 1)} title={text('title', 'Heading section title')}>
                {text('content', 'Section content')}
            </HeadingSection>
            <HeadingSection level={select('level', levelOptions, 1)} title={text('title', 'Heading section title')}>
                {text('content', 'Section content')}
            </HeadingSection>
        </VFlow>
    ))
