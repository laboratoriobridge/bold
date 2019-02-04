import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Tooltip } from '../Tooltip/Tooltip'

export interface DropdownMenuProps extends WithStylesProps {
    highlightedIndex?: number
}

@withStyles
export class DropdownMenu extends React.Component<DropdownMenuProps> {
    render() {
        const { css, theme } = this.props
        const styles: Styles = {
            list: {
                fontWeight: 'bold',
                color: theme.pallete.text.main,
                whiteSpace: 'nowrap',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                border: '1px solid ' + theme.pallete.divider,
                borderRadius: theme.radius.popper,
                display: 'inline-block',
                width: 'auto',
                minWidth: '150px',
                background: theme.pallete.surface.main,
                textAlign: 'left',
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
    hint?: string
    disabled?: boolean
    type?: 'normal' | 'danger'
    highlighted?: boolean
    onClick?(): any
}

@withStyles
export class DropdownItem extends React.Component<DropdownItemProps> {
    static defaultProps: DropdownItemProps = {
        disabled: false,
        type: 'normal',
        onClick: () => null,
    }

    render() {
        const { css, theme, onClick, type, disabled, hint, highlighted } = this.props
        const styles: Styles = {
            item: {
                margin: 0,
                'div': {
                    display: 'block', // override inline-block defined by tooltip wrapper
                },
                '&:first-child a': {
                    borderTopLeftRadius: theme.radius.popper,
                    borderTopRightRadius: theme.radius.popper,
                },
                '&:last-child a': {
                    borderBottomLeftRadius: theme.radius.popper,
                    borderBottomRightRadius: theme.radius.popper,
                },
            },
            link: {
                display: 'block',
                padding: '0.5rem 1rem',
                fontSize: theme.typography.sizes.button,
                color: theme.pallete.text.main,
                textDecoration: 'none',
                '&:hover': {
                    background: theme.pallete.surface.background,
                },
            },
            disabled: {
                color: theme.pallete.gray.c70,
                '&:hover': {
                    background: 'transparent',
                    cursor: 'not-allowed',
                },
            },
            danger: {
                color: theme.pallete.status.danger.main,
                '&:hover': {
                    color: theme.pallete.surface.main,
                    background: theme.pallete.status.danger.main,
                },
            },
            highlighted: {
                normal: {
                    background: theme.pallete.surface.background,
                },
                danger: {
                    color: theme.pallete.surface.main,
                    background: theme.pallete.status.danger.main,
                },
            },
        }
        const classes = css(styles.link,
            type === 'danger' && styles.danger,
            disabled && styles.disabled,
            highlighted && styles.highlighted[type]
        )

        const link = (
            <a onClick={disabled ? null : onClick} className={classes}>
                {this.props.children}
            </a>
        )

        return (
            <li className={css(styles.item)}>
                {hint ? <Tooltip text={hint}>{link}</Tooltip> : link}
            </li>
        )
    }
}
