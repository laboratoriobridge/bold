import { Interpolation } from 'emotion'
import * as React from 'react'

import { useTheme } from '../../styles'
import { Omit } from '../../util'
import { composeRefs } from '../../util/react'
import { Button, ButtonProps } from '../Button'
import { DropdownItem, DropdownMenu } from '../Dropdown'
import { Icon } from '../Icon'
import { Popper, PopperController, PopperProps } from '../Popper'
import { Select } from '../Select/Select'
import { SelectSingleProps } from '../Select/SelectSingle'
import { Text } from '../Text'

export interface SelectInlineProps<T> extends SelectSingleProps<T> {
  buttonProps?: ButtonProps
  popperProps?: Omit<PopperProps, 'renderTarget' | 'children'>
  defaultButtonText: string
  search?: boolean
  onChange?(item: T): void
}

export function SelectInline<T>(props: SelectInlineProps<T>) {
  const { onChange, buttonProps, popperProps, itemToString, defaultButtonText, inputRef, ...rest } = props
  const theme = useTheme()

  let { value } = props
  const setValue = (item: T) => {
    value = item
  }

  const targetButtonRef: React.MutableRefObject<any> = React.useRef<HTMLButtonElement>()
  const selectInputRef: React.MutableRefObject<any> = React.useRef<HTMLInputElement>()

  const renderTarget = (ctrl: PopperController) => {
    const { innerRef, ...buttonRest } = buttonProps || ({} as any)
    return (
      <Button
        onClick={ctrl.toggle}
        skin='ghost'
        kind='normal'
        size='small'
        innerRef={composeRefs(targetButtonRef, innerRef)}
        {...buttonRest}
      >
        <Text>{itemToString(value) || defaultButtonText}</Text>
        <Icon style={{ marginLeft: '0.5rem' }} icon={ctrl.isShown() ? 'angleUp' : 'angleDown'} />
      </Button>
    )
  }

  const styles: Interpolation = {
    box: {
      border: `1px solid ${theme.pallete.divider}`,
      backgroundColor: theme.pallete.surface.main,
      '& > div:first-of-type': {
        padding: '0.5rem',
      },
      'ul > li:first-of-type': {
        borderTop: `1px solid ${theme.pallete.divider}`,
      },
      'div > ul': {
        position: 'static',
        boxShadow: 'none',
        border: 'none',
        borderRadius: 0,
      },
    },
    popper: {
      '[data-visible]': {
        boxShadow: theme.shadows.outer['40'],
      },
    },
  }

  const handleVisibilityEvents = (ref: React.MutableRefObject<any>) => (ctrl: PopperController) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.focus()
      }
    })
  }

  const onClick = (item: T, ctrl: PopperController) => {
    if (onChange) {
      onChange(item)
    } else {
      setValue(item)
    }
    ctrl.hide()
  }

  const select = (ctrl: PopperController) => {
    const handleOnChange = (newValue: T) => {
      onClick(newValue, ctrl)
    }
    return (
      <Select<T>
        {...rest}
        itemToString={props.itemToString}
        onChange={handleOnChange}
        style={styles.box}
        inputRef={composeRefs(selectInputRef, inputRef) as any}
        isOpen
      />
    )
  }

  const drowpdown = (ctrl: PopperController) => {
    const handleOnClick = (newValue: T) => () => {
      onClick(newValue, ctrl)
    }
    return (
      <DropdownMenu>
        {props.items.map((item, index) => (
          <DropdownItem key={index} component='li' onClick={handleOnClick(item)} type='normal'>
            {itemToString(item)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    )
  }

  return (
    <Popper
      renderTarget={renderTarget}
      placement='bottom-end'
      style={styles.popper}
      onHide={handleVisibilityEvents(targetButtonRef)}
      onShow={handleVisibilityEvents(selectInputRef)}
      {...popperProps}
    >
      {(props.search !== undefined && props.search === false && drowpdown) || select}
    </Popper>
  )
}
