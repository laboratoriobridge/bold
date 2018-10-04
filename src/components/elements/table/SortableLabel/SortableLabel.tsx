import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Icon } from '../../Icon/Icon'

export type SortDirection = 'ASC' | 'DESC' | ''

export interface SortableLabelProps extends WithStylesProps {
    direction: SortDirection
    onChange(sortDirection: SortDirection, shiftKey?: boolean): any
}

@withStyles
export class SortableLabel extends React.Component<SortableLabelProps> {
    render() {
        const { css, direction } = this.props
        const styles = {
            wrapper: {
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
            },
        }

        const icon = (direction === 'ASC' && 'angleDown')
            || (direction === 'DESC' && 'angleUp')
            || 'sort'

        return (
            <span className={css(styles.wrapper)} onClick={this.handleClick}>
                {this.props.children}
                <Icon
                    style={{ marginLeft: '0.25rem' }}
                    color={icon === 'sort' ? 'disabled' : 'primary'}
                    size={1}
                    icon={icon}
                />
            </span>
        )
    }

    private handleClick = (event: React.MouseEvent<any>) => {
        this.props.onChange(toggleDirection(this.props.direction), event.shiftKey)
    }
}

export const toggleDirection = (dir: SortDirection): 'ASC' | 'DESC' => {
    return (dir === 'ASC' && 'DESC')
        || (dir === 'DESC' && 'ASC')
        || 'ASC'
}
