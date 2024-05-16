import React, { useState } from 'react'

import { AxisDomain, RangeSelectorOptions } from '../model'
import { HFlow } from '../../HFlow'
import { Text } from '../../Text'
import { ExternalStyles } from '../../../styles'
import { SelectInline } from '../../SelectInline'

export interface ChartRangeSelectorProps<XDomain> extends RangeSelectorOptions {
  style?: ExternalStyles
  onChange?: (newValue: Partial<AxisDomain>) => void
}

export function ChartRangeSelector<XDomain>(props: ChartRangeSelectorProps<XDomain>) {
  const { label, options, defaultOption, style, onChange } = props

  const optionsArray = Object.entries(options).map(([key, value]) => ({ label: key, value: value }))

  const [value, setValue] = useState(
    defaultOption && defaultOption in options
      ? { label: defaultOption, value: options[defaultOption] }
      : optionsArray.length && optionsArray[0]
  )

  const handleOnChange = (selectedValue: { label: string; value: Partial<AxisDomain> }) => {
    if (selectedValue) {
      setValue(selectedValue)
      onChange && onChange(selectedValue.value)
    }
  }

  return (
    <HFlow hSpacing={0} alignItems='center' justifyContent='flex-end' style={style}>
      {label && <Text>{label}:</Text>}
      <SelectInline
        defaultButtonText={label}
        value={value}
        itemToString={(i) => i?.label}
        items={optionsArray}
        onChange={handleOnChange}
        openOnFocus
      />
    </HFlow>
  )
}
