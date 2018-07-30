import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { pluralize } from '../../../../util/string'
import { Dropdown } from '../../Dropdown/Dropdown'
import { DropdownItem } from '../../Dropdown/DropdownMenu'
import { Paginator } from '../../Paginator/Paginator'
import { PopperController } from '../../Popper'
import { Number } from '../../textual/Number/Number'

export interface TableFooterProps extends WithStylesProps {
    page: number
    totalPages: number
    totalElements: number
    pageSize: number
    style?: Interpolation
    onPageChange(page: number): void
    onSizeChange(size: number): void
}

@withStyles
export class TableFooter extends React.Component<TableFooterProps> {
    render() {
        const { css, theme, style } = this.props
        const styles: Styles = {
            footer: {
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'stretch',
                border: '1px solid ' + theme.pallete.divider,
            },
            results: {
                fontWeight: 'bold',
                borderRight: '1px solid ' + theme.pallete.divider,
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
            <div className={css(styles.footer, style)}>
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

@withStyles
class SizeDropdown extends React.Component<SizeDropdownProps> {

    static defaultProps: Partial<SizeDropdownProps> = {
        options: [10, 30, 50, 100],
    }

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
                    {ctrl =>
                        options.map((option, idx) => (
                            <DropdownItem key={idx} onClick={this.handleClick(ctrl, option)}>{option}</DropdownItem>
                        ))
                    }
                </Dropdown>
            </span>
        )
    }

    renderDropdownTarget = (controller: PopperController) => {
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
            <a className={css(styles.button)} onClick={controller.toggle}>
                {size} <span className={css(styles.icon)}>▾</span>
            </a>
        )
    }

    handleClick = (ctrl: PopperController, size: number) => (e) => {
        ctrl.hide()
        this.props.onChange(size)
    }

    hide = () => {
        this.setState({ show: false })
    }
}
