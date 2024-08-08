import React, { useState } from 'react'

import { AgeRange, AgeRangeUnitEnum } from './AgeRangeInput'
import { AgeRangeField } from './AgeRangeField'

export default {
  title: 'Components/AgeRangeField',
}

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
