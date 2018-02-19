import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles/withStyles'
import { TextInput } from '../../form/input/TextInput/TextInput'

export interface PaginatorProps extends WithStylesProps {
    /**
     * Página atual, 0-indexada.
     */
    page: number

    /**
     * Número total de páginas.
     */
    total: number

    /**
     * Chamado quando a página for alterada.
     */
    onChange?(page: number): void
}

export interface PaginatorState {
    inputValue: number
}

@withStyles
export class Paginator extends React.Component<PaginatorProps, PaginatorState> {

    static defaultProps: Partial<PaginatorProps> = {
        onChange: (page: number) => false,
    }

    constructor(props: PaginatorProps) {
        super(props)
        this.state = {
            inputValue: props.page + 1,
        }
    }

    componentWillReceiveProps(nextProps: PaginatorProps, nextContext) {
        if (this.state.inputValue !== nextProps.page + 1) {
            this.setState({ inputValue: nextProps.page + 1 })
        }
    }

    render() {
        const { css, theme, total } = this.props
        const styles = {
            paginator: {
                display: 'inline-flex',
                alignItems: 'center',
                margin: '0',
                fontSize: '0.75rem',
                '& > *:not(:last-child)': {
                    marginRight: '0.25rem',
                },
            },
            disabled: {
                color: theme.color.gray80,
                cursor: 'not-allowed',
                '&:hover': {
                    background: 'transparent',
                },
            },
            input: {
                width: 40 + this.state.inputValue.toString().length * 7,
                textAlign: 'center',
            },
            button: {
                transition: '0.2s all',
                borderRadius: theme.baseRadius,
                padding: '0.25rem 0.5rem',
                '&:hover': {
                    background: theme.color.gray90,
                },
            },
        }

        return (
            <div className={css(styles.paginator)}>
                <span>
                    <a
                        className={css(styles.button, this.isFirstPage() && styles.disabled)}
                        onClick={!this.isFirstPage() ? this.previous : undefined}
                        title='Página anterior'
                    >
                        &lt;
                    </a>
                </span>

                <TextInput
                    styles={styles.input}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                />

                <span>de {total}</span>

                <span>
                    <a
                        className={css(styles.button, this.isLastPage() && styles.disabled)}
                        onClick={!this.isLastPage() ? this.next : undefined}
                        title='Próxima página'
                    >
                        &gt;
                    </a>
                </span>
            </div>
        )
    }

    private handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    private handleInputBlur = (e) => {
        if (this.state.inputValue >= 1 && this.state.inputValue <= this.props.total) {
            this.props.onChange && this.props.onChange(this.state.inputValue - 1)
        } else {
            this.setState({ inputValue: this.props.page + 1 })
        }
    }

    private currentPage = () => {
        return this.props.page + 1
    }

    private isLastPage = () => {
        return this.currentPage() >= this.props.total
    }

    private isFirstPage = () => {
        return this.currentPage() <= 1
    }

    private go = (page: number) => {
        this.props.onChange && this.props.onChange(page - 1)
    }

    private previous = () => {
        this.go(this.currentPage() - 1)
    }

    private next = () => {
        this.go(this.currentPage() + 1)
    }
}
