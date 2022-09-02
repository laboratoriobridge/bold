import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { Button, ButtonProps } from '../Button'
import { FormError } from '../FormControl'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ComboboxSingleselect, ComboboxSingleselectProps } from './ComboboxSingleselect'

export interface ComboboxInlineProps<T>
  extends Omit<ComboboxSingleselectProps<T>, 'label' | 'alwaysOpen' | 'clearable' | 'placeholder'> {
  buttonProps?: ButtonProps
  popperProps?: PopperOptions
  defaultButtonText: string
  searchInputPlaceholder?: string
}

export function ComboboxInline<T>(props: ComboboxInlineProps<T>) {
  const {
    value,
    inputRef,
    openOnFocus,
    onFocus,
    onChange,
    buttonProps,
    popperProps,
    itemToString,
    disabled,
    defaultButtonText,
    searchInputPlaceholder,
    error,
    ...rest
  } = props
  const { innerRef, ...buttonRest } = buttonProps || ({} as ButtonProps)

  const { classes, css } = useStyles(createStyles)

  const [selectInputRef, setSelectInputRef] = useState<HTMLInputElement>()
  const anchorRef = useRef<HTMLButtonElement>()
  const [popperRef, setPopperRef] = useState<HTMLDivElement>()

  const [open, setOpen] = useState(false)
  const [currentValue, setCurrentValue] = useState<T>()
  const {
    styles: { popper: popperStyle },
    attributes: { popper: popperAttributes },
  } = usePopper(anchorRef.current, popperRef, { ...defaultPopperProps, ...popperProps })

  useEffect(() => {
    if (open && selectInputRef) {
      selectInputRef.focus()
    }
  }, [open, selectInputRef])

  const handleButtonClick = () => setOpen((state) => !state)
  const handleChange = (newValue: T) => {
    setCurrentValue(newValue)
    setOpen(false)
  }
  const handleFocus = () => {
    openOnFocus && setOpen(true)
  }

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
    <>
      <Button
        innerRef={composeRefs(anchorRef, innerRef)}
        onClick={handleButtonClick}
        onFocus={composeHandlers(handleFocus, onFocus)}
        skin='ghost'
        kind={error ? 'danger' : 'normal'}
        size='small'
        disabled={disabled}
        {...buttonRest}
      >
        <Text color={error ? 'danger' : 'normal'}>{itemToString(currentValue) || defaultButtonText}</Text>
        <Icon style={{ marginLeft: '0.5rem' }} icon={open ? 'angleUp' : 'angleDown'} />
      </Button>

      {error && <FormError role='alert'>{error}</FormError>}

      {open && (
        <div className={css(classes.box, popperStyle as any)} {...popperAttributes} ref={setPopperRef}>
          <ComboboxSingleselect<T>
            placeholder={searchInputPlaceholder}
            inputRef={composeRefs(setSelectInputRef, inputRef)}
            itemToString={itemToString}
            popperMenu={false}
            onChange={composeHandlers(handleChange, onChange)}
            icon='zoomOutline'
            iconPosition='left'
            onIconClick={undefined}
            clearable={false}
            alwaysOpen
            openOnFocus
            {...rest}
          />
        </div>
      )}
    </>
  )
}

const defaultPopperProps: Partial<PopperOptions> = {
  placement: 'bottom-start',
}

const createStyles = (theme: Theme) => ({
  box: {
    zIndex: theme.zIndex.popper,
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['40'],
    backgroundColor: theme.pallete.surface.main,
    padding: '0.5rem',
    paddingBottom: 0,

    '& [role=listbox]': {
      width: 'calc(100% + 1rem)',
      marginLeft: '-0.5rem',
      marginTop: '0.5rem',
      '& > div': {
        borderWidth: '1px 0 0 0',
        boxShadow: 'none',
      },
    },
  } as React.CSSProperties,
})
