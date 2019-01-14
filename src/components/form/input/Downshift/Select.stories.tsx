import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm, withRouter } from '../../../../stories-addons'

import { defaultSelectFilter, DefaultSelectItem, Select } from './Select'
import { SelectMenu, SelectMenuItem } from './SelectMenu'

const items: DefaultSelectItem[] = [
    { value: 'apple' },
    { value: 'pear' },
    { value: 'orange' },
    { value: 'grape' },
    { value: 'banana' },
]

const loadItems = (inputValue: string) => {
    return new Promise<any[]>((resolve, reject) => {
        window.setTimeout(() => {
            resolve(defaultSelectFilter(items, inputValue, (item) => item && item.value))
        }, 1000)
    })
}

// tslint:disable jsx-no-lambda
storiesOf('Form/Select', module)
    .addDecorator(withRouter())
    .addDecorator(withForm())
    .add('default', () => (
        <Select
            items={items}
            itemToString={(item) => item && item.value}
            onChange={action('changed')}
            onBlur={action('blur')}
            disabled={boolean('disabled', false)}
        />
    ))
    .add('async', () => (
        <Select
            items={loadItems}
            itemToString={(item) => item && item.value}
            onChange={action('changed')}
        />
    ))
    .add('custom menu item', () => (
        <Select<DefaultSelectItem>
            items={items}
            itemToString={(item) => item && item.value}
            renderItem={(item) => (
                <>
                    <p><strong>{item.value}</strong></p>
                    <p>yummy</p>
                </>
            )}
            onChange={action('changed')}
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
