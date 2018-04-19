import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Icon } from '../../Icon/Icon'

export type SortDirection = 'ASC' | 'DESC' | ''

export interface SortableLabelProps extends WithStylesProps {
    dir: SortDirection
    onChange(dir: SortDirection): any
}

@withStyles
export class SortableLabel extends React.Component<SortableLabelProps> {
    render() {
        const { css, dir } = this.props
        const styles = {
            wrapper: {
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
            },
        }

        const icon = (dir === 'ASC' && 'angleDown')
            || (dir === 'DESC' && 'angleUp')
            || 'sort'

        return (
            <span className={css(styles.wrapper)} onClick={this.handleClick}>
                {this.props.children}
                <Icon
                    styles={{ marginLeft: '0.25rem' }}
                    color={icon === 'sort' ? 'gray80' : 'primary'}
                    size={1}
                    icon={icon}
                />
            </span>
        )
    }

    private handleClick = () => {
        this.props.onChange(toggleDirection(this.props.dir))
    }
}

export const toggleDirection = (dir: SortDirection): 'ASC' | 'DESC' => {
    return (dir === 'ASC' && 'DESC')
        || (dir === 'DESC' && 'ASC')
        || 'ASC'
}
