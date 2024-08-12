import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { boolean, text, array, select, optionsKnob, number } from '@storybook/addon-knobs'
import { isEmpty } from 'lodash'
import { AgeRange, AgeRangeUnitEnum } from './AgeRangeInput'
import { AgeRangeField } from './AgeRangeField'

export default {
  title: 'Components/AgeRangeField',
}

const ageRangeUnitOptions: AgeRangeUnitEnum[] = [AgeRangeUnitEnum.DAYS, AgeRangeUnitEnum.MONTHS, AgeRangeUnitEnum.YEARS]

export const Default = () => {
  const [value, setValue] = useState<AgeRange>({ unit: AgeRangeUnitEnum.DAYS })

  const handleChange = (selectedAgeRange: AgeRange) => {
    setValue(selectedAgeRange)
  }

  return <AgeRangeField value={value} clearable onChange={handleChange} />
}

export const MinMax = () => {
  const [value, setValue] = useState<AgeRange>({ unit: AgeRangeUnitEnum.DAYS })

  const handleChange = (selectedAgeRange: AgeRange) => {
    setValue(selectedAgeRange)
  }

  return <AgeRangeField value={value} clearable onChange={handleChange} min={2} max={10} />
}

export const RemovingUnitOptions = () => {
  const error = text('error', '')

  return (
    <AgeRangeField
      value={{ unit: AgeRangeUnitEnum.YEARS }}
      onChange={action('changed')}
      clearable={boolean('clearable', true)}
      required={boolean('required', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={error}
      invalid={isEmpty(error) ? false : true}
      // maxLength={number('maxLength', 2)}
      unitOptionsToExclude={[AgeRangeUnitEnum.DAYS]}
    />
  )
}
