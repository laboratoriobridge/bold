import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import Pre from '../../../stories-addons/withPropTypes/components/markdown/Pre'
import Node from '../../../stories-addons/withPropTypes/components/Node'
import { withStore } from '../../../stories-addons/withStore'
import { Button } from '../../elements/Button/Button'
import { Flow } from '../../layout/Flow/Flow'
import { CheckboxField } from '../field/CheckboxField/CheckboxField'
import { RadioField } from '../field/RadioField/RadioField'
import { TextField } from '../field/TextField/TextField'

import { Form, FormComponentProps } from './Form'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .addDecorator(withStore())
    .add('Form example', () => {
        const renderForm = createRenderForm((props: FormComponentProps) => (
            <Flow vSpacing={1} direction='vertical'>
                <TextField name='nome' label='Nome' />
                <Flow>
                    <RadioField name='radio' label='Option1' value='1' />
                    <RadioField name='radio' label='Option2' value='2' />
                </Flow>
                <CheckboxField name='check' label='Check' />
                <Button label='Submit' onClick={props.handleSubmit} type='primary' />
            </Flow>
        ))

        return (
            <Form
                form='example'
                onSubmit={action('submit')}
                render={renderForm}
                hasSuccessModal={false}
            />
        )
    })

const renderNode = (root, idx) => {
    return (
        <Node
            key={idx}
            node={root}
            depth={0}
            maxPropsIntoLine={3}
            maxPropObjectKeys={3}
            maxPropArrayLength={3}
            maxPropStringLength={50}
        />
    )
}

const createRenderForm = (renderChildren: (props: FormComponentProps) => React.ReactNode) => {
    return (props: FormComponentProps) => {
        const children = renderChildren(props)
        return (
            <>
            {children}
            <Pre>
                {'const renderForm = (props: FormComponentProps) => {'}
                {React.Children.map(children, (root, idx) => renderNode(root, idx))}
                {'}'}
            </Pre>
            </>
        )
    }
}
