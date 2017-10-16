import * as React from 'react'
import * as classnames from 'classnames'
import { helpersClassnames } from '../../util/Util'

export interface TableProps {
    addRowSpacer?: boolean
    className?: string
    emptyText?: string
    values: any
    name?: string
}

export class Table extends React.Component<TableProps> {

    render() {
        const classes = classnames('table', this.props.className)
        return (
            <table className={classes}>
                <thead>
                    <tr>
                        {this.props.children}
                    </tr>
                </thead>
                <tbody>
                    {
                        (!this.props.values || this.props.values.length === 0 || this.props.values.size === 0) && this.props.emptyText &&
                        <tr data-name={this.props.name}><td className='emptyText' colSpan={(this.props.children as any).length}>{this.props.emptyText}</td></tr>
                    }
                    {
                        this.props.values && this.props.values.map((value, index) => {
                            if (this.props.addRowSpacer) {
                                return ([<tr className='spacer' />, <TableRow name={this.props.name + index} key={index} value={value} index={index}>{this.props.children}</TableRow>])
                            } else {
                                return (<TableRow name={this.props.name + index} key={index} value={value} index={index}>{this.props.children}</TableRow>)
                            }
                        })
                    }
                </tbody>
            </table>
        )
    }
}

class TableRow extends React.Component<any, any> {

    render() {
        return (
            <tr data-name={this.props.name} className='row'>
                {React.Children.map(this.props.children, (child: any) => {
                    if (!child) {
                        return
                    }
                    const { render, title, size, offset, ...cellProps } = child.props
                    return <td {...cellProps}>{child.props.render(this.props.value, this.props.index)}</td>
                })}
            </tr>
        )
    }
}

export interface TableColumnHeaderProps extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
    render: (props: any, idx: number) => JSX.Element
    title: string
    className?: string
    size?: string
    offset?: string
}

export class TableColumnHeader extends React.Component<TableColumnHeaderProps> {
    render() {
        const { render, title, size, offset, ...cellProps } = this.props

        return (
            <th className={resolveColumnClass(this.props)} {...cellProps}>{title}</th>
        )
    }
}

const resolveColumnClass = (props) => {
    return classnames(props.className, helpersClassnames(props), {
        'is-half': props.size && props.size === 'half',

        'is-10': props.size && props.size === '10',
        'is-9': props.size && props.size === '9',
        'is-8': props.size && props.size === '8',
        'is-7': props.size && props.size === '7',
        'is-6': props.size && props.size === '6',
        'is-5': props.size && props.size === '5',
        'is-4': props.size && props.size === '4',
        'is-3': props.size && props.size === '3',
        'is-2': props.size && props.size === '2',
        'is-1': props.size && props.size === '1',

        'is-offset-one-quarter': props.offset && props.offset === 'one-quarter',

        'is-offset-1': props.offset && props.offset === '1',
        'is-offset-2': props.offset && props.offset === '2',
        'is-offset-3': props.offset && props.offset === '3',
        'is-offset-4': props.offset && props.offset === '4',
        'is-offset-5': props.offset && props.offset === '5',
    })
}
