import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { boolean, number, optionsKnob, text } from '@storybook/addon-knobs'
import { AgeRangeField } from './AgeRangeField'
import { AgeRange, AgeRangeUnitEnum } from './model'

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

  const unitsToExclude = optionsKnob('unitOptionsToExclude', optionsAgeRangeUnitEnum, defaultOption, {
    display: 'multi-select',
  })

  return (
    <AgeRangeField
      value={value}
      onChange={handleChange}
      clearable={boolean('clearable', true)}
      required={boolean('required', true)}
      name='ageRange'
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      unitOptionsToExclude={Array.isArray(unitsToExclude) ? unitsToExclude : [unitsToExclude]}
      maxLength={number('maxLength', 3)}
      error={text('error', '')}
      placeholders={{ start: text('startPlacehold', null), end: text('endPlaceholder', null) }}
      onFocus={action('focus')}
      onBlur={action('blur')}
    />
  )
}
