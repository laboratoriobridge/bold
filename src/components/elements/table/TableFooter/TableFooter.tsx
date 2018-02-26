import * as React from 'react'
import { Overlay } from 'react-overlays'

import { withStyles, WithStylesProps } from '../../../../styles'
import { pluralize } from '../../../../util/string'
import { Paginator } from '../../Paginator/Paginator'
import { Number } from '../../textual/Number/Number'

import { DropdownItem, DropdownMenu } from '../../Dropdown/DropdownMenu'
import { OverlayContent } from '../../Overlay/OverlayContent'

export interface TableFooterProps extends WithStylesProps {
    page: number
    totalPages: number
    totalElements: number
    pageSize: number
    onPageChange(page: number): void
    onSizeChange(size: number): void
}

@withStyles
export class TableFooter extends React.Component<TableFooterProps> {
    render() {
        const { css, theme } = this.props
        const styles = {
            footer: {
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'stretch',
                border: '1px solid ' + theme.color.gray90,
            },
            results: {
                fontWeight: 'bold',
                borderRight: '1px solid ' + theme.color.gray90,
                display: 'flex',
                alignItems: 'center',
                paddingRight: '1rem',
                paddingLeft: '1rem',
            },
            pagination: {
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-between',
                padding: '4px 1rem',
            },
        }
        return (
            <div className={css(styles.footer)}>
                <span className={css(styles.results)}>
                    <Number
                        value={this.props.totalElements}
                        sufix={' ' + pluralize('resultado', this.props.totalElements)}
                        abbrev
                    />
                </span>
                <div className={css(styles.pagination)}>
                    <span>
                        Mostrar:
                        <SizeDropdown size={this.props.pageSize} onChange={this.props.onSizeChange} />
                    </span>
                    <Paginator
                        page={this.props.page}
                        total={this.props.totalPages}
                        onChange={this.props.onPageChange}
                    />
                </div>
            </div>
        )
    }
}

interface SizeDropdownProps extends WithStylesProps {
    size: number
    options?: number[]
    onChange(size: number): any
}

interface SizeDropdownState {
    show: boolean
}

@withStyles
class SizeDropdown extends React.Component<SizeDropdownProps, SizeDropdownState> {

    static defaultProps: Partial<SizeDropdownProps> = {
        options: [10, 30, 50, 100],
    }

    private trigger

    constructor(props: SizeDropdownProps) {
        super(props)
        this.state = {
            show: false,
        }
    }

    render() {
        const { size, options, css } = this.props
        const styles = {
            container: {
                position: 'relative',
                marginLeft: '0.5rem',
            },
            button: {
                fontWeight: 'bold',
            },
            icon: {
                marginLeft: '0.25rem',
            },
        }

        return (
            <span className={css(styles.container)}>
                <a className={css(styles.button)} onClick={this.toggleShow} ref={this.triggerRef}>
                    {size} <span className={css(styles.icon)}>▾</span>
                </a>
                <Overlay
                    show={this.state.show}
                    placement='bottom'
                    container={this}
                    target={this.trigger}
                    rootClose={true}
                    onHide={this.toggleShow}
                >
                    <OverlayContent>
                        <DropdownMenu>
                            {options.map((option, idx) => (
                                <DropdownItem key={idx} onClick={this.handleClick(option)}>{option}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </OverlayContent>
                </Overlay>
            </span>
        )
    }

    handleClick = (size: number) => (e) => {
        this.props.onChange(size)
        this.toggleShow()
    }

    toggleShow = () => {
        this.setState({ show: !this.state.show })
    }

    triggerRef = (elem) => {
        this.trigger = elem
    }
}
