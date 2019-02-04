import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { pluralize } from '../../../../util/string'
import { Dropdown, DropdownRenderProps, DropdownTargetRenderProps } from '../../Dropdown/Dropdown'
import { DropdownItem, DropdownMenu } from '../../Dropdown/DropdownMenu'
import { Paginator } from '../../Paginator/Paginator'
import { Number } from '../../textual/Number/Number'

export interface TableFooterProps extends WithStylesProps {
    page: number
    totalPages: number
    totalElements: number
    pageSize: number
    style?: Interpolation
    sizeOptions?: number[]
    onPageChange(page: number): void
    onSizeChange(size: number): void
}

@withStyles
export class TableFooter extends React.Component<TableFooterProps> {

    static defaultProps: Partial<TableFooterProps> = {
        sizeOptions: [10, 30, 50, 100],
    }

    render() {
        const { css, theme, style } = this.props
        const styles: Styles = {
            footer: {
                display: 'flex',
                alignItems: 'stretch',
                border: '1px solid ' + theme.pallete.divider,
                height: 40,
            },
            results: {
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '1rem',
                paddingLeft: '1rem',
            },
            pagination: {
                borderLeft: '1px solid ' + theme.pallete.divider,
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-between',
                padding: '4px 1rem',
            },
        }
        return (
            <div className={css(styles.footer, style)}>
                <span className={css(styles.results)}>
                    <Number
                        value={this.props.totalElements}
                        sufix={' ' + pluralize('resultado', this.props.totalElements)}
                        abbrev
                    />
                </span>
                {this.showPagination() &&
                    <div className={css(styles.pagination)}>
                        <span>
                            Mostrar:
                            <SizeDropdown
                                options={this.props.sizeOptions}
                                size={this.props.pageSize}
                                onChange={this.props.onSizeChange}
                            />
                        </span>
                        <Paginator
                            page={this.props.page}
                            total={this.props.totalPages}
                            onChange={this.props.onPageChange}
                        />
                    </div>
                }
            </div>
        )
    }

    showPagination() {
        return this.props.totalElements > this.props.pageSize ||
            this.props.totalElements > Math.min(...this.props.sizeOptions)
    }
}

interface SizeDropdownProps extends WithStylesProps {
    size: number
    options: number[]
    onChange(size: number): any
}

@withStyles
class SizeDropdown extends React.Component<SizeDropdownProps> {

    render() {
        const { options, css } = this.props
        const styles: Styles = {
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
                <Dropdown renderTarget={this.renderDropdownTarget}>
                    {(downshift) => (
                        <DropdownMenu highlightedIndex={downshift.highlightedIndex}>
                            {options.map((option, idx) => (
                                <DropdownItem
                                    key={idx}
                                    onClick={this.handleClick(downshift, option)}
                                >
                                    {option}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    )}
                </Dropdown>
            </span>
        )
    }

    renderDropdownTarget = ({ ref, getToggleButtonProps }: DropdownTargetRenderProps) => {
        const { size, css } = this.props
        const styles: Styles = {
            button: {
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'inherit',
            },
            icon: {
                marginLeft: '0.25rem',
            },
        }

        return (
            <a className={css(styles.button)} ref={ref} {...getToggleButtonProps()}>
                {size} <span className={css(styles.icon)}>▾</span>
            </a>
        )
    }

    handleClick = (dropdown: DropdownRenderProps, size: number) => () => {
        dropdown.closeMenu()
        this.props.onChange(size)
    }

    hide = () => {
        this.setState({ show: false })
    }
}
