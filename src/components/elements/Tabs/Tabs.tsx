import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import { Theme, withStyles, WithStylesProps } from '../../../styles'

const createStyles = (theme: Theme) => {
    return {
        ul: {
            listStyle: 'none',
            padding: '0',
            margin: '0 -1rem',
            fontSize: '0.875rem',
        },
        li: {
            display: 'inline-block',
        },
        a: {
            display: 'inline-block',
            textDecoration: 'none',
            color: theme.pallete.gray.c50,
            fontWeight: 'bold',
            padding: '0.5rem 0',
            margin: '0 1rem',
            letterSpacing: '1px',
            lineHeight: '1rem',
            transition: '.2s color',

            '&.active': {
                color: theme.pallete.primary.main,
                borderBottom: '2px solid currentColor',
            },
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
            <li className={css(styles.li)} role='presentation'>
                <NavLink
                    className={css(styles.a)}
                    isActive={this.isActive}
                    role='tab'
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
