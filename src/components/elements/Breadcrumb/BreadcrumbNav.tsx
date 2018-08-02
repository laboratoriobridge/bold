import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Icon } from '../Icon/Icon'

import { BreadcrumbEntry, BreadcrumbStore, BreadcrumbUnsubscribeFunction } from './BreadcrumbStore'

export interface BreadcrumbNavProps extends WithStylesProps {
}

export interface BreadcrumbNavState {
    entries?: BreadcrumbEntry[]
}

@withStyles
export class BreadcrumbNav extends React.Component<BreadcrumbNavProps, BreadcrumbNavState> {

    static contextTypes = {
        breadcrumbs: PropTypes.object,
    }

    private unsubscribe: BreadcrumbUnsubscribeFunction

    constructor(props: BreadcrumbNavProps, context) {
        super(props)
        this.state = {
            entries: context.breadcrumbs ? context.breadcrumbs.getEntries() : [],
        }
    }

    public componentDidMount() {
        this.unsubscribe = this.store().addChangeListener((entries) => {
            this.setState({ entries })
        })
    }

    public componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { css, theme } = this.props
        const { entries } = this.state
        const styles: Styles = {
            list: {
                listStyle: 'none',
                padding: 0,
                margin: 0,
            },
            item: {
                display: 'inline-flex',

                '&:last-child a': {
                    pointerEvents: 'none',
                    color: theme.pallete.primary.main,
                },
            },
            separator: {
                color: theme.pallete.text.disabled,
                margin: '0 .5rem',
                fontSize: '1rem',
            },
            link: {
                color: theme.pallete.text.main,
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                transition: 'all .2s',
                display: 'inline-block',

                '&:hover': {
                    color: theme.pallete.primary.main,
                },
            },
        }
        return (
            <nav role='navigation' aria-label='Breadcrumbs'>
                <ol className={css(styles.list)}>
                    {entries.map(({ title, to }, idx) => (
                        <li key={idx} className={css(styles.item)}>
                            <Link className={css(styles.link)} to={to}>{title}</Link>
                            {idx !== entries.length - 1 &&
                                <Icon style={styles.separator} size={1} icon='angleRight' />
                            }
                        </li>
                    ))}
                </ol>
            </nav>
        )
    }

    private store(): BreadcrumbStore {
        if (!this.context.breadcrumbs) {
            throw new Error('No <BreadcrumbProvider> specified.')
        }

        return this.context.breadcrumbs
    }
}
