import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm, withRouter } from '../../../../stories-addons'
import { DefaultItemType, defaultSelectFilter, Select, SelectMenu, SelectMenuItem } from '../../input/Select'

import { SelectField } from './SelectField'

const items: DefaultItemType[] = [
    { value: 1, label: 'Apple' },
    { value: 2, label: 'Avocado' },
    { value: 3, label: 'Banana' },
    { value: 4, label: 'Blueberry' },
    { value: 5, label: 'Coconut' },
    { value: 6, label: 'Grape' },
    { value: 7, label: 'Lemon' },
    { value: 8, label: 'Mango' },
    { value: 9, label: 'Melon' },
    { value: 10, label: 'Orange' },
    { value: 11, label: 'Peach' },
    { value: 12, label: 'Pear' },
]

const loadItems = (inputValue: string, populate) => {
    window.setTimeout(() => {
        populate(defaultSelectFilter(items, inputValue, (item) => item && item.label))
    }, 1000)
}

// tslint:disable jsx-no-lambda
storiesOf('Form/SelectField', module)
    .addDecorator(withRouter())
    .addDecorator(withForm())
    .add('default', () => (
        <SelectField<DefaultItemType>
            name='fruit'
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
        <SelectField<DefaultItemType>
            name='fruit'
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
            name='fruit'
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
        <Select<DefaultItemType>
            items={items}
            itemToString={(item) => item && item.label}
            placeholder='Select a value...'
            onChange={action('changed')}
            onBlur={action('blur')}
            clearable={boolean('clearable', true)}
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
