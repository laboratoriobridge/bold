import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { createRef } from 'react'

import { Tooltip } from '../Tooltip'

import { Dropdown } from './Dropdown'
import { DropdownButton } from './DropdownButton'
import { DropdownDivider } from './DropdownDivider'
import { DropdownItem } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'

storiesOf('Components|Dropdown', module)
  .add('button', () => (
    <DropdownButton
      size='small'
      items={[
        { content: 'Item #1', onClick: action('item 1 clicked') },
        { content: 'Item #2', onClick: action('item 2 clicked'), type: 'danger' },
        {
          content: 'Item #3',
          onClick: action('item 3 clicked'),
          disabled: true,
          tooltip: 'This is disabled',
        },
      ]}
    >
      Options
    </DropdownButton>
  ))
  .add('custom anchor', () => {
    const anchorRef = createRef<HTMLButtonElement>()

    return (
      <>
        <span ref={anchorRef}>Anchor element</span>
        <Dropdown
          anchorRef={anchorRef}
          open={boolean('open', true)}
          onClose={action('onClose')}
          autoclose={boolean('autoclose', true)}
        >
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem component='a' href='/'>
            Link item
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem>Item #3</DropdownItem>
        </Dropdown>
      </>
    )
  })
  .add('menu', () => (
    <DropdownMenu>
      <DropdownItem onClick={action('clicked item 1')}>Item 1</DropdownItem>
      <DropdownItem onClick={action('clicked item 2')} disabled>
        Item 2
      </DropdownItem>
      <DropdownItem onClick={action('clicked item 3')}>Item 3</DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={action('clicked item 4')} type='danger'>
        <Tooltip text='Some danger option'>
          <div>Item 4</div>
        </Tooltip>
      </DropdownItem>
    </DropdownMenu>
  ))
