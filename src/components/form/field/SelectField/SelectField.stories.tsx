import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm, withRouter } from '../../../../stories-addons'
import { DefaultItemType, defaultSelectFilter, SelectMenu, SelectMenuItem } from '../../input/Select'

import { SelectField } from './SelectField'

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
            resolve(defaultSelectFilter(items, inputValue, (item) => item && item.value))
        }, 1000)
    })
}

// tslint:disable jsx-no-lambda
storiesOf('Form/SelectField', module)
    .addDecorator(withRouter())
    .addDecorator(withForm())
    .add('default', () => (
        <SelectField<DefaultItemType>
            name='select'
            label={text('label', 'Component label')}
            items={items}
            itemToString={(item) => item && item.label}
            placeholder='Select a value...'
            onChange={action('changed')}
            onBlur={action('blur')}
            disabled={boolean('disabled', false)}
        />
    ))
    .add('async', () => (
        <SelectField<DefaultItemType>
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
        <SelectField<DefaultItemType>
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
    .add('select menu', () => (
        <SelectMenu>
            <SelectMenuItem>Item 1</SelectMenuItem>
            <SelectMenuItem selected>Item 2 (selected)</SelectMenuItem>
            <SelectMenuItem>Item 3</SelectMenuItem>
            <SelectMenuItem>Item 4</SelectMenuItem>
            <SelectMenuItem>Item 5</SelectMenuItem>
        </SelectMenu>
    ))
