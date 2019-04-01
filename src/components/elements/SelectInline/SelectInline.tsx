import { Interpolation } from 'emotion'
import * as React from 'react'

import { useTheme } from '../../../styles'
import { Omit } from '../../../util'
import { composeRefs } from '../../../util/react'
import { Select, SelectSingleProps } from '../../form/input/Select'
import { Button, ButtonProps } from '../Button'
import { Icon } from '../Icon'
import { Popper, PopperController, PopperProps } from '../Popper'
import { Text } from '../textual/Text/Text'

export interface SelectInlineProps<T> extends Omit<SelectSingleProps<T>, 'value'> {
  initialValue: T
  buttonProps?: ButtonProps
  popperProps?: Omit<PopperProps, 'renderTarget' | 'children'>
  onChange?(item: T): void
}

export function SelectInline<T>(props: SelectInlineProps<T>) {
  const { initialValue: value, onChange, itemToString, buttonProps, popperProps, ...rest } = props
  const theme = useTheme()

  const [currentValue, setCurrentValue] = React.useState(itemToString(value))

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
        <Text>{currentValue}</Text>
        <Icon style={{ marginLeft: '0.5rem' }} icon={ctrl.isShown() ? 'angleUp' : 'angleDown'} />
      </Button>
    )
  }

  const styles: Interpolation = {
    box: {
      border: `1px solid ${theme.pallete.divider}`,
      backgroundColor: theme.pallete.surface.main,
      '& > div:first-child': {
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

  return (
    <Popper
      renderTarget={renderTarget}
      placement='bottom-end'
      style={styles.popper}
      onHide={handleVisibilityEvents(targetButtonRef)}
      onShow={handleVisibilityEvents(selectInputRef)}
      {...popperProps}
    >
      {(ctrl: PopperController) => {
        const handleOnChange = (newValue: T) => {
          onChange && onChange(newValue)
          setCurrentValue(itemToString(newValue))
          ctrl.hide()
        }
        return (
          <Select<T>
            {...rest}
            itemToString={itemToString}
            onChange={handleOnChange}
            style={styles.box}
            inputRef={selectInputRef}
            isOpen
          />
        )
      }}
    </Popper>
  )
}
