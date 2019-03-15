import { Interpolation } from 'emotion'
import * as React from 'react'

import { useTheme } from '../../../styles'
import { DefaultItemType, Select } from '../../form'
import { Button } from '../Button'
import { DropdownItemConfig } from '../Dropdown'
import { Popper, PopperController } from '../Popper'
import { Text } from '../textual'

export type SelectInlineQueryType = (input: string, setItems: (items: DropdownItemConfig[]) => void) => void

export interface SelectInlineProps {
  initialValue?: DropdownItemConfig[]
}

export function SelectInline(props: SelectInlineProps) {
  const theme = useTheme()

  const items: DefaultItemType[] = [
    { label: 'Value #001', value: 1 },
    { label: 'Value #002', value: 2 },
    { label: 'Value #003', value: 3 },
    { label: 'Value #004', value: 4 },
  ]

  const itemToString = (item: DefaultItemType) => item && item.label

  const renderTarget = (ctrl: PopperController) => {
    return (
      <Button onClick={ctrl.toggle} skin='ghost' kind='primary' size='small'>
        <Text>Municipio</Text>
      </Button>
    )
  }

  const styles: Interpolation = {
    border: `1px solid ${theme.pallete.divider}`,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer['40'],
    'div > div': {
      padding: '0.5rem',
      borderBottom: `1px solid ${theme.pallete.divider}`,
    },
    'div > ul': {
      position: 'static',
      boxShadow: 'none',
      border: 'none',
      borderRadius: 0,
    },
  }

  return (
    <Popper renderTarget={renderTarget} placement='bottom-end'>
      {(ctrl: PopperController) => (
        <Select<DefaultItemType> items={items} itemToString={itemToString} style={styles} isOpen />
      )}
    </Popper>
  )
}
