import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles/withStyles'
import { TextInput } from '../../form/input/TextInput/TextInput'
import { Button } from '../Button'

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
export class Paginator extends React.PureComponent<PaginatorProps, PaginatorState> {

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
        const styles: Styles = {
            paginator: {
                display: 'inline-flex',
                alignItems: 'center',
                margin: 0,
            },
            disabled: {
                color: theme.pallete.text.disabled,
                cursor: 'not-allowed',
                '&:hover': {
                    background: 'transparent',
                },
            },
            input: {
                width: 40 + this.state.inputValue.toString().length * 7,
                textAlign: 'center',
                margin: '0 0.5rem 0 0.25rem',
            },
            leftButton: {},
            rightButton: { marginLeft: '0.25rem' },
        }

        return (
            <div className={css(styles.paginator)}>
                <Button
                    style={styles.leftButton}
                    size='small'
                    skin='ghost'
                    icon='angleLeft'
                    disabled={this.isFirstPage()}
                    title='Página anterior'
                    onClick={!this.isFirstPage() ? this.previous : undefined}
                />

                <TextInput
                    style={styles.input}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                    onKeyPress={this.handleInputKeyPress}
                    clearable={false}
                />

                <span>de {total}</span>

                <Button
                    style={styles.rightButton}
                    size='small'
                    skin='ghost'
                    icon='angleRight'
                    disabled={this.isLastPage()}
                    title='Próxima página'
                    onClick={!this.isLastPage() ? this.next : undefined}
                />
            </div>
        )
    }

    private handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    private handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.applyInputValue()
        }
    }

    private handleInputBlur = (e) => {
        this.applyInputValue()
    }

    private applyInputValue = () => {
        if (this.state.inputValue !== this.currentPage()) {
            if (this.state.inputValue >= 1 && this.state.inputValue <= this.props.total) {
                this.props.onChange && this.props.onChange(this.state.inputValue - 1)
            } else {
                this.setState({ inputValue: this.props.page + 1 })
            }
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
