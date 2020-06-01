import { Options as PopperOptions } from '@popperjs/core'
import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
import { useStyles } from '../../styles/hooks/useStyles'
import { Theme } from '../../styles/theme/createTheme'
import { Omit } from '../../util'
import { composeHandlers, composeRefs } from '../../util/react'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { MaskedTextField, MaskedTextFieldProps } from '../MaskedTextField'
import { MonthPicker, ReferenceMonth } from '../MonthPicker'

export interface MonthFieldProps extends Omit<MaskedTextFieldProps, 'value' | 'onChange'> {
  value?: ReferenceMonth
  popperProps?: PopperOptions
  onChange?(referenceMonth: ReferenceMonth): void
}

export function MonthField(props: MonthFieldProps) {
  const { value, popperProps, inputRef, onChange, onIconClick, ...rest } = props

  const { classes, css } = useStyles(createStyles)

  const [open, setOpen] = useState(false)

  const [anchorRef, setAnchorRef] = useState<HTMLInputElement>()
  const [popperRef, setPopperRef] = useState<HTMLDivElement>()

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popperRef, { ...popperProps, placement: 'bottom-start' })

  const handlePickerChange = (referenceMonth: ReferenceMonth) => {
    setOpen(false)
    onChange(referenceMonth)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.value) {
      const val = e.target.value

      if (isValidInput(val)) {
        onChange({ month: +val.substr(0, 2) - 1, year: +val.substr(3) })
      }
    } else {
      onChange(null)
    }
  }

  const handleInputIconClick = () => setOpen(true)
  const handleFocusIn = () => setOpen(true)
  const handleFocusOut = () => setOpen(false)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <MonthInput
        inputRef={composeRefs(setAnchorRef, inputRef)}
        value={format(value)}
        icon='calendarOutline'
        onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
        onChange={handleInputChange}
        {...rest}
      />

      {open && (
        <div
          ref={setPopperRef}
          className={css(classes.popup, popperStyle as any)}
          data-placement={placement}
          data-testid='MonthField.popup'
        >
          <MonthPicker month={value && value.month} year={value && value.year} onChange={handlePickerChange} />
        </div>
      )}
    </FocusManagerContainer>
  )
}

export type MonthInputProps = Omit<MaskedTextFieldProps, 'mask'>

export function MonthInput(props: MonthInputProps) {
  return (
    <MaskedTextField
      mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      pipe={createAutoCorrectedDatePipe('mm/yyyy')}
      placeholder='mm/yyyy'
      {...props}
    />
  )
}

export const format = (value: ReferenceMonth) => {
  if (!value || !value.year || value.month == null) {
    return null
  }

  if (value.month < 9) {
    return `0${value.month + 1}/${value.year}`
  } else {
    return `${value.month + 1}/${value.year}`
  }
}

export const isValidInput = (value: string) => {
  return /\d\d\/\d\d\d\d/.test(value)
}

const createStyles = (theme: Theme) => ({
  popup: {
    zIndex: theme.zIndex.popper,
  },
})
