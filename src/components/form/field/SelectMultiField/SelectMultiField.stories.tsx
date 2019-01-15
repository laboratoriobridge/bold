import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm, withRouter } from '../../../../stories-addons'
import { DefaultItemType, defaultSelectFilter } from '../../input/Select'
import { SelectMulti } from '../../input/SelectMulti'

import { SelectMultiField } from './SelectMultiField'

const items: DefaultItemType[] = [
    { value: 1, label: 'Apple' },
    { value: 2, label: 'Banana' },
    { value: 3, label: 'Grape' },
    { value: 4, label: 'Orange' },
    { value: 5, label: 'Pear' },
]

const loadItems = (inputValue: string) => {
    return new Promise<any[]>((resolve, reject) => {
        window.setTimeout(() => {
            resolve(defaultSelectFilter(items, inputValue, (item) => item && item.label))
        }, 1000)
    })
}

// tslint:disable jsx-no-lambda
storiesOf('Form/SelectMultiField', module)
    .addDecorator(withRouter())
    .addDecorator(withForm())
    .add('default', () => (
        <SelectMultiField<DefaultItemType>
            name='select'
            label={text('label', 'Component label')}
            items={items}
            itemToString={(item) => item && item.label}
            placeholder='Select a value...'
            onChange={action('changed')}
            onBlur={action('blur')}
            clearable={boolean('clearable', true)}
            disabled={boolean('disabled', false)}
        />
    ))
    .add('async', () => (
        <SelectMultiField<DefaultItemType>
            name='select'
            label={text('label', 'Component label')}
            items={loadItems}
            itemToString={(item) => item && item.label}
            onChange={action('changed')}
            onBlur={action('blur')}
            disabled={boolean('disabled', false)}
        />
    ))
    .add('custom menu item', () => (
        <SelectMultiField<DefaultItemType>
            name='select'
            label={text('label', 'Component label')}
            items={items}
            itemToString={(item) => item && item.label}
            renderItem={(item) => (
                <>
                    <p><strong>{item.label}</strong></p>
                    <p>yummy</p>
                </>
            )}
            onChange={action('changed')}
            onBlur={action('blur')}
            disabled={boolean('disabled', false)}
        />
    ))
    .add('input', () => (
        <SelectMulti<DefaultItemType>
            items={items}
            itemToString={(item) => item && item.label}
            renderItem={(item) => (
                <>
                    <p><strong>{item.label}</strong></p>
                    <p>yummy</p>
                </>
            )}
            onChange={action('changed')}
            onBlur={action('blur')}
            disabled={boolean('disabled', false)}
        />
    ))
