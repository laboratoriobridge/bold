import React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'

export type SortDirection = 'ASC' | 'DESC' | ''

export interface SortableLabelProps extends WithStylesProps {
    direction: SortDirection
    onChange(sortDirection: SortDirection, shiftKey?: boolean): any
}

@withStyles
export class SortableLabel extends React.Component<SortableLabelProps> {
    render() {
        const { css, theme, direction } = this.props
        const styles = {
            wrapper: {
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
            },
            icon: {
                marginLeft: '0.25rem',
                fontSize: '1rem',
                fill: theme.pallete.text.disabled,
            },
            asc: {
                fill: direction === 'ASC' && theme.pallete.primary.main,
            },
            desc: {
                fill: direction === 'DESC' && theme.pallete.primary.main,
            },
        }

        return (
            <span className={css(styles.wrapper)} onClick={this.handleClick}>
                {this.props.children}
                <Sort
                    className={css(styles.icon)}
                    classes={{
                        up: css(styles.asc),
                        down: css(styles.desc),
                    }}
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

const Sort = (props: React.SVGAttributes<SVGElement> & { classes: { up: string, down: string } }) => {
    const { classes, ...rest } = props
    return (
        <svg viewBox='0 0 24 24' width='1em' height='1em' {...rest}>
            <polygon
                points='12 4.94 16.95 9.89 18.36 8.47 12 2.11 5.64 8.47 7.05 9.89 12 4.94'
                className={classes.up}
            />
            <polygon
                points='12 19.06 7.05 14.11 5.64 15.53 12 21.89 18.36 15.53 16.95 14.11 12 19.06'
                className={classes.down}
            />
        </svg>
    )
}
