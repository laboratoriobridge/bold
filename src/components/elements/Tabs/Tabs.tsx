import { cx } from 'emotion'
import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import { Styles, Theme, withStyles, WithStylesProps } from '../../../styles'

const createStyles = (theme: Theme): Styles => {
    return {
        ul: {
            listStyle: 'none',
            padding: '0',
            margin: '0',
            fontSize: theme.typography.sizes.button,
        },
        li: {
            display: 'inline-block',
        },
        a: {
            display: 'inline-block',
            textDecoration: 'none',
            color: theme.pallete.text.main,
            fontWeight: 'bold',
            padding: '0.5rem 0.75rem',
            lineHeight: '1rem',
            borderRadius: 4,
            outline: 0,
            border: '2px solid transparent',
            transition: 'background .15s, border-color .15s',

            '&.active': {
                color: theme.pallete.primary.main,
                borderBottomColor: theme.pallete.primary.main,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
            },

            '&:not(.disabled):hover': {
                background: theme.pallete.gray.c90,
            },

            '&:not(.disabled):focus': {
                borderColor: theme.pallete.primary.main,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
            },

            '&:not(.disabled):active': {
                background: theme.pallete.gray.c90,
                boxShadow: theme.shadows.inner['10'],
            },
        },
        disabled: {
            color: theme.pallete.text.disabled,
            cursor: 'not-allowed',
        },
    }
}

export interface TabsProps extends WithStylesProps {
}

@withStyles
export class Tabs extends React.Component<TabsProps> {
    render() {
        const { css, theme, children } = this.props
        const styles = createStyles(theme)

        return (
            <ul className={css(styles.ul)} role='tablist'>
                {children}
            </ul>
        )
    }
}

export interface TabLinkProps extends WithStylesProps, Pick<NavLinkProps, 'to' | 'replace' | 'exact'> {
    active?: boolean
    disabled?: boolean
}

@withStyles
export class TabLink extends React.Component<TabLinkProps> {
    static defaultProps: Partial<TabLinkProps> = {
        active: false,
        disabled: false,
    }

    render() {
        const { css, theme, active, children, disabled, ...rest } = this.props
        const styles = createStyles(theme)

        return (
            <li className={css(styles.li)} role='presentation'>
                <NavLink
                    className={cx(css(styles.a, disabled && styles.disabled), { disabled })}
                    isActive={this.isActive}
                    role='tab'
                    aria-disabled={disabled === true ? disabled : undefined}
                    tabIndex={disabled ? -1 : undefined}
                    {...rest}
                >
                    {children}
                </NavLink>
            </li>
        )
    }

    private isActive = (match, location) => {
        return this.props.active || match
    }
}
