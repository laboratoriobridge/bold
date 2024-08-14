import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { boolean, text, optionsKnob, number } from '@storybook/addon-knobs'
import { isEmpty } from 'lodash'
import { AgeRange, AgeRangeUnitEnum } from './AgeRangeInput'
import { AgeRangeField } from './AgeRangeField'

export default {
  title: 'Components/AgeRangeField',
}

const optionsAgeRangeUnitEnum = {
  Days: AgeRangeUnitEnum.DAYS,
  Months: AgeRangeUnitEnum.MONTHS,
  Years: AgeRangeUnitEnum.YEARS,
}

const defaultOption = []

export const Default = () => {
  const [value, setValue] = useState<AgeRange>({ unit: AgeRangeUnitEnum.YEARS })

  const handleChange = (selectedAgeRange: AgeRange) => {
    setValue(selectedAgeRange)
    action('changed')(selectedAgeRange)
  }

  const error = text('error', '')

  const unitsToExclude = optionsKnob('unitOptionsToExclude', optionsAgeRangeUnitEnum, defaultOption, {
    display: 'multi-select',
  })

  return (
    <AgeRangeField
      value={value}
      onChange={handleChange}
      clearable={boolean('clearable', true)}
      required={boolean('required', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      unitOptionsToExclude={Array.isArray(unitsToExclude) ? unitsToExclude : [unitsToExclude]}
      maxLength={number('maxLength', 3)}
      error={error}
      invalid={isEmpty(error) ? false : true}
      firstValuePlaceholder={text('firstValuePlaceholder', null)}
      secondValuePlaceholder={text('secondValuePlaceholder', null)}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
  )
}
