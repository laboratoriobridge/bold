import { Interpolation } from 'emotion'
import * as React from 'react'

import { HFlow } from '../../../layout'
import { DropdownButton, DropdownItemConfig } from '../../Dropdown'
import { Icon } from '../../Icon'
import { Text } from '../../textual'

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
        padding: '0 0.25rem',
    }

    return (
        <DropdownButton
            items={items}
            size='small'
            skin='ghost'
            style={style}
        >
            <HFlow alignItems='center' hSpacing={0.25}>
                <Text>{size}</Text>
                <Icon icon='angleDown' />
            </HFlow>
        </DropdownButton>
    )

}
