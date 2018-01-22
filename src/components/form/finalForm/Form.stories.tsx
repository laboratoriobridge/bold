import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FormRenderProps } from 'react-final-form'

import { withPropTypes, withTheme } from '../../../stories-addons'
import Pre from '../../../stories-addons/withPropTypes/components/markdown/Pre'
import Node from '../../../stories-addons/withPropTypes/components/Node'
import { withStore } from '../../../stories-addons/withStore'
import { Flow } from '../../layout/Flow/Flow'
import { CheckboxField } from '../field/CheckboxField/CheckboxField'
import { RadioField } from '../field/RadioField/RadioField'
import { TextField } from '../field/TextField/TextField'

import { Form } from './Form'
import { SubmitButton } from './SubmitButton'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .addDecorator(withStore())
    .add('Form example', () => {
        const validate = form => {
            const errors: any = {}

            if (!form.nome) {
                errors.nome = 'Preenchimento obrigatório.'
            }

            return errors
        }

        const renderForm = createRenderForm((props: FormRenderProps) => (
            <Flow vSpacing={1} direction='vertical'>
                <TextField name='nome' label='Nome' required />
                <Flow>
                    <RadioField name='radio' label='Option1' value='1' />
                    <RadioField name='radio' label='Option2' value='2' />
                </Flow>
                <CheckboxField name='check' label='Check' />
                <SubmitButton label='Submit' handleSubmit={props.handleSubmit} />
            </Flow>
        ))

        const submit = () => ({ nome: 'test' })

        return (
            <Form
                onSubmit={submit}
                render={renderForm}
                hasSuccessModal={false}
                validate={validate}
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

const createRenderForm = (renderChildren: (props: FormRenderProps) => React.ReactNode) => {
    return (props: FormRenderProps) => {
        const children = renderChildren(props)
        return (
            <>
            {children}
            <Pre>
                {'const renderForm = (props: FormRenderProps) => {'}
                {React.Children.map(children, (root, idx) => renderNode(root, idx))}
                {'}'}
            </Pre>
            </>
        )
    }
}
