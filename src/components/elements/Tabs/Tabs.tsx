import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import { Theme, withStyles, WithStylesProps } from '../../../styles'

const createStyles = (theme: Theme) => {
    const active = {
        color: theme.color.primary,
        borderBottom: '2px solid currentColor',
    }

    return {
        ul: {
            listStyle: 'none',
            padding: '0',
            margin: '0 -1rem',
            fontSize: '0.75rem',
        },
        li: {
            display: 'inline-block',
        },
        a: {
            display: 'inline-block',
            textDecoration: 'none',
            color: theme.color.gray50,
            fontWeight: 'bold',
            padding: '0.5rem 0',
            margin: '0 1rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            lineHeight: '1rem',
            transition: '.2s color',

            '&.active': active,
        },
        active: {
            'a': active,
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
            <ul className={css(styles.ul)}>
                {children}
            </ul>
        )
    }
}

export interface TabLinkProps extends WithStylesProps, Pick<NavLinkProps, 'to' | 'replace' | 'exact'> {
    active?: boolean
}

@withStyles
export class TabLink extends React.Component<TabLinkProps> {
    static defaultProps: Partial<TabLinkProps> = {
        active: false,
    }

    render() {
        const { css, theme, active, children, ...rest } = this.props
        const styles = createStyles(theme)

        return (
            <li className={css(styles.li, active && styles.active)}>
                <NavLink className={css(styles.a)} {...rest}>{children}</NavLink>
            </li>
        )
    }
}
