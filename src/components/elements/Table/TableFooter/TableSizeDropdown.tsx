import { Interpolation } from 'emotion'
import * as React from 'react'

import { DropdownButton, DropdownItemConfig } from '../../Dropdown'

interface TableSizeDropdownProps {
    size: number
    options: number[]
    onChange(size: number): any
}

export const TableSizeDropdown = (props: TableSizeDropdownProps) => {
    const { options, size, onChange } = props

    const items: DropdownItemConfig[] = options.map(op => ({
        content: op, onClick: () => onChange(op),
    }))

    const style: Interpolation = {
        padding: 0,
    }

    return (
        <DropdownButton
            items={items}
            icon='angleDown'
            label={`${size}`}
            size='small'
            skin='ghost'
            style={style}
        />
    )

}
