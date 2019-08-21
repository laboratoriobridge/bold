import React from 'react'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

import { useLocale } from '../../i18n'
import { Omit } from '../../util/types'
import { MaskedInput, MaskedInputProps } from '../MaskedInput/MaskedInput'

export interface DateInputProps extends Omit<MaskedInputProps, 'onChange' | 'value'> {
  value?: Date
  onInputChange?: MaskedInputProps['onChange']
  onChange?(date: Date | null): void
}

const formatter = new Intl.DateTimeFormat('pt-br', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export function DateInput(props: DateInputProps) {
  const { value, onInputChange, ...rest } = props
  const locale = useLocale()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e || !e.target || !e.target.value) {
      props.onChange(null)
      return
    }

    const targetValue = e.target.value
    const match: RegExpMatchArray = targetValue.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
    if (match) {
      const date = new Date(parseInt(match[3], 10), parseInt(match[2], 10) - 1, parseInt(match[1], 10))
      props.onChange(date)
    }

    if (onInputChange) {
      return onInputChange(e)
    }
  }

  return (
    <MaskedInput
      value={value ? formatter.format(value) : undefined}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      placeholder={locale.dateInput.placeholder}
      pipe={createAutoCorrectedDatePipe('dd/mm/yyyy')}
      autoComplete='off'
      {...rest}
      onChange={handleChange}
    />
  )
}

DateInput.defaultProps = {} as Partial<DateInputProps>
