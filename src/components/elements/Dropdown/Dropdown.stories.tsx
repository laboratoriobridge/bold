import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'

import { Dropdown } from './Dropdown'
import { DropdownButton } from './DropdownButton'
import { DropdownItem, DropdownMenu } from './DropdownMenu'

storiesOf('Components/Dropdown', module)
    .add('button', () => (
        <DropdownButton
            icon='dots'
            size='small'
            skin='ghost'
            items={[
                { content: 'Item #1', onClick: action('item 1 clicked') },
                { content: 'Item #2', onClick: action('item 2 clicked'), type: 'danger' },
                { content: 'Item #3', onClick: action('item 3 clicked'), disabled: true, hint: 'This is disabled' },
            ]}
        />
    ))
    .add('custom trigger', () => (
        // tslint:disable jsx-no-lambda
        <HFlow hSpacing={0.5} alignItems='center'>
            <Dropdown
                renderTarget={({ ref, getRootProps, getToggleButtonProps }) => (
                    <Button label='Menu' size='small' innerRef={ref} {...getRootProps()} {...getToggleButtonProps()} />
                )}
            >
                {({ highlightedIndex, getMenuProps, getItemProps }) => (
                    <DropdownMenu highlightedIndex={highlightedIndex} {...getMenuProps()}>
                        <DropdownItem
                            onClick={action('clicked item 1')}
                            highlighted={highlightedIndex === 0}
                            {...getItemProps({ item: 0 })}
                        >
                            Item 1
                        </DropdownItem>
                        <DropdownItem
                            onClick={action('clicked item 2')}
                            highlighted={highlightedIndex === 1}
                            {...getItemProps({ item: 1 })}
                        >
                            Item 2
                        </DropdownItem>
                        <DropdownItem
                            onClick={action('clicked item 3')}
                            highlighted={highlightedIndex === 2}
                            {...getItemProps({ item: 2 })}
                        >
                            Item 3
                        </DropdownItem>
                    </DropdownMenu>
                )}
            </Dropdown>
            <Dropdown
                renderTarget={({ ref, getToggleButtonProps }) => (
                    <Button icon='dots' skin='ghost' size='small' innerRef={ref} {...getToggleButtonProps()} />
                )}
            >
                {({ highlightedIndex }) => (
                    <DropdownMenu highlightedIndex={highlightedIndex}>
                        <DropdownItem onClick={action('clicked item 1')}>Item 1</DropdownItem>
                        <DropdownItem onClick={action('clicked item 2')}>Item 2</DropdownItem>
                        <DropdownItem onClick={action('clicked item 3')}>Item 3</DropdownItem>
                    </DropdownMenu>
                )}
            </Dropdown>
        </HFlow>
    ))
    .add('menu', () => (
        <DropdownMenu highlightedIndex={2}>
            <DropdownItem onClick={action('clicked item 1')}>Item 1</DropdownItem>
            <DropdownItem onClick={action('clicked item 2')} disabled hint='Disabled just because'>Item 2</DropdownItem>
            <DropdownItem onClick={action('clicked item 3')} type='danger' hint='Some danger option' highlighted>
                Item 3
            </DropdownItem>
        </DropdownMenu>
    ))
