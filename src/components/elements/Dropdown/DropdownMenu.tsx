import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export interface DropdownMenuProps extends WithStylesProps {

}

@withStyles
export class DropdownMenu extends React.Component<DropdownMenuProps> {
    render() {
        const { css, theme } = this.props
        const styles: Styles = {
            list: {
                fontSize: '0.875rem',
                fontWeight: 'bold',
                color: theme.pallete.text.main,
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                border: '1px solid ' + theme.pallete.divider,
                borderRadius: 3,
                display: 'inline-block',
                width: 'auto',
                minWidth: '150px',
                background: theme.pallete.surface.main,
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
        const styles: Styles = {
            item: {
                margin: 0,
                '&:not(:last-child)': {
                    borderBottom: '1px solid ' + theme.pallete.divider,
                },
            },
            link: {
                padding: '1rem',
                display: 'block',
                '&:hover': {
                    background: theme.pallete.surface.background,
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
