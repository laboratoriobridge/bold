import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

export interface DropdownMenuProps extends WithStylesProps {

}

@withStyles
export class DropdownMenu extends React.Component<DropdownMenuProps> {
    render() {
        const { css, theme } = this.props
        const styles = {
            list: {
                fontSize: '0.875rem',
                fontWeight: 'bold',
                color: theme.color.gray40,
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                border: '1px solid ' + theme.color.gray90,
                borderRadius: 3,
                display: 'inline-block',
                width: 'auto',
                minWidth: '150px',
                background: theme.color.white,
            },
        }
        return (
            <ul className={css(styles.list)}>
                {this.props.children}
            </ul>
        )
    }
}

export interface DropdownItemProps extends WithStylesProps {
    onClick?(e): any
}

@withStyles
export class DropdownItem extends React.Component<DropdownItemProps> {
    static defaultProps: Partial<DropdownItemProps> = {
        onClick: () => null,
    }

    render() {
        const { css, theme, onClick } = this.props
        const styles = {
            item: {
                margin: 0,
                '&:not(:last-child)': {
                    borderBottom: '1px solid ' + theme.color.gray90,
                },
            },
            link: {
                padding: '1rem',
                display: 'block',
                '&:hover': {
                    background: theme.color.background,
                },
            },
        }
        return (
            <li className={css(styles.item)}>
                <a onClick={onClick} className={css(styles.link)}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}
