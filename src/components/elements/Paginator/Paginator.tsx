import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles/withStyles'

export interface PaginatorProps extends WithStylesProps {
    page: number
    total: number
    range?: number
    onChange?: (page: number) => void
}

@withStyles
export class Paginator extends React.Component<PaginatorProps> {

    static defaultProps: Partial<PaginatorProps> = {
        range: 3,
        onChange: (page: number) => false,
    }

    render() {
        const { css, theme, range, total } = this.props
        const page = this.currentPage()
        const styles = {
            paginator: {
                display: 'inline-block',
                background: theme.color.white,
                padding: '0.5rem',
                margin: '0',
                border: `1px solid ` + theme.color.gray90,
                borderRadius: '2px',
                'li': {
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    margin: '0 1px',
                },
            },
            button: {
                transition: '0.2s all',
                borderRadius: '2px',
                padding: '0.25rem 0.5rem',
                '&:hover': {
                    background: theme.color.gray90,
                },
            },
            buttonNumber: {
                fontWeight: 'bold',
            },
            active: {
                background: theme.color.primary,
                color: theme.color.white,
                cursor: 'initial',
                '&:hover': {
                    background: theme.color.primary,
                },
            },
            more: {
                padding: '0.25rem 0.5rem',
            },
        }

        const numbers = Array(range * 2 + 1).fill(0)
            .map((e, i) => i + page - range)
            .filter(n => n > 0 && n <= total)

        return (
            <ul className={css(styles.paginator)}>
                {this.hasLess() &&
                    <li>
                        <a className={css(styles.button)} onClick={this.first} title='Primeira página'>&laquo;</a>
                    </li>
                }

                {!this.isFirstPage() &&
                    <li>
                        <a className={css(styles.button)} onClick={this.previous} title='Página anterior'>&lt;</a>
                    </li>
                }

                {this.hasLess() &&
                    <li className={css(styles.more)}>…</li>}

                {numbers.map((n, idx) => (
                    <li key={idx}>
                        <a
                            className={css(styles.button, styles.buttonNumber, n === page && styles.active)}
                            onClick={page !== n && this.makeSelectPage(n)}
                            title={`Página ${n}`}
                        >
                            {n}
                        </a>
                    </li>
                ))}

                {this.hasMore() &&
                    <li className={css(styles.more)}>…</li>}

                {!this.isLastPage() &&
                    <li>
                        <a className={css(styles.button)} onClick={this.next} title='Próxima página'>&gt;</a>
                    </li>
                }

                {this.hasMore() &&
                    <li>
                        <a className={css(styles.button)} onClick={this.last} title='Última página'>&raquo;</a>
                    </li>
                }
            </ul>
        )
    }

    private currentPage = () => {
        return this.props.page + 1
    }

    private hasMore = () => {
        return this.props.total > this.currentPage() + this.props.range
    }

    private hasLess = () => {
        return this.currentPage() - this.props.range > 1
    }

    private isLastPage = () => {
        return this.currentPage() >= this.props.total
    }

    private isFirstPage = () => {
        return this.currentPage() === 1
    }

    private go = (page: number) => {
        this.props.onChange && this.props.onChange(page - 1)
    }

    private first = () => {
        this.go(1)
    }

    private last = () => {
        this.go(this.props.total)
    }

    private previous = () => {
        this.go(this.currentPage() - 1)
    }

    private next = () => {
        this.go(this.currentPage() + 1)
    }

    private makeSelectPage = (page: number) => {
        return () => this.go(page)
    }
}
