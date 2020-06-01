import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useState } from 'react'
import { usePopper } from 'react-popper'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { Button, ButtonProps } from '../Button'
import { Icon } from '../Icon'
import { Select } from '../Select/Select'
import { SelectSingleProps } from '../Select/SelectSingle'
import { Text } from '../Text'

export interface SelectInlineProps<T> extends SelectSingleProps<T> {
  buttonProps?: ButtonProps
  popperProps?: PopperOptions
  defaultButtonText: string
  onChange?(item: T): void
}

export function SelectInline<T>(props: SelectInlineProps<T>) {
  const { value, inputRef, onChange, buttonProps, popperProps, itemToString, defaultButtonText, ...rest } = props
  const { innerRef, ...buttonRest } = buttonProps || ({} as any)

  const { classes, css } = useStyles(createStyles)

  const [selectInputRef, setSelectInputRef] = useState<HTMLInputElement>()
  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement>()
  const [popperRef, setPopperRef] = useState<HTMLDivElement>()

  const [open, setOpen] = useState(false)
  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popperRef, popperProps)

  useEffect(() => {
    if (open && selectInputRef) {
      selectInputRef.focus()
    }
  }, [open, selectInputRef])

  const handleButtonClick = () => setOpen((state) => !state)
  const handleChange = () => setOpen(false)

  return (
    <>
      <Button
        innerRef={composeRefs(setAnchorRef, innerRef)}
        onClick={handleButtonClick}
        skin='ghost'
        kind='normal'
        size='small'
        {...buttonRest}
      >
        <Text>{itemToString(value) || defaultButtonText}</Text>
        <Icon style={{ marginLeft: '0.5rem' }} icon={open ? 'angleUp' : 'angleDown'} />
      </Button>

      {open && (
        <div ref={setPopperRef} className={css(classes.box, popperStyle as any)} data-placement={placement}>
          <Select<T>
            inputRef={composeRefs(setSelectInputRef, inputRef)}
            itemToString={itemToString}
            onChange={composeHandlers(handleChange, onChange)}
            isOpen
            icon={null}
            {...rest}
          />
        </div>
      )}
    </>
  )
}

const createStyles = (theme: Theme) => ({
  box: {
    zIndex: theme.zIndex.popper,
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['40'],
    backgroundColor: theme.pallete.surface.main,
    '& [role="combobox"] > div > div': {
      margin: '0.5rem',
    },
    '& ul > li:first-of-type': {
      marginTop: '0.5rem',
      borderTop: `1px solid ${theme.pallete.divider}`,
    },
    '& ul': {
      width: '100%',
      position: 'static',
      top: 'initial',
      left: 'initial',
      transform: 'none',
      boxShadow: 'none',
      border: 'none',
      borderRadius: 0,
    },
  } as React.CSSProperties,
})
