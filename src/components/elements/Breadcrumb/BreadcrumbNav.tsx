import React from 'react'
import { Link } from 'react-router-dom'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Omit } from '../../../util/types'
import { Icon } from '../Icon/Icon'

import { BreadcrumbConsumer } from './BreadcrumbContext'
import { BreadcrumbEntry, BreadcrumbStore, BreadcrumbUnsubscribeFunction } from './BreadcrumbStore'

export interface BreadcrumbNavProps extends WithStylesProps {
    store: BreadcrumbStore
}

export interface BreadcrumbNavState {
    entries?: BreadcrumbEntry[]
}

@withStyles
class BreadcrumbNavCmp extends React.Component<BreadcrumbNavProps, BreadcrumbNavState> {

    private unsubscribe: BreadcrumbUnsubscribeFunction

    constructor(props: BreadcrumbNavProps) {
        super(props)
        this.state = {
            entries: props.store.getEntries(),
        }
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.addChangeListener((entries) => {
            this.setState({ entries })
        })
    }

    componentWillUnmount() {
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
                alignItems: 'center',

                '&:last-of-type a': {
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
                transition: 'all .2s',
                display: 'inline-block',

                '&:hover': {
                    color: theme.pallete.primary.main,
                },
            },
        }
        return (
            <nav aria-label='Breadcrumbs'>
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
}

export const BreadcrumbNav = (props: Omit<BreadcrumbNavProps, 'store'>) => (
    <BreadcrumbConsumer>
        {value => <BreadcrumbNavCmp {...props} store={value} />}
    </BreadcrumbConsumer>
)
