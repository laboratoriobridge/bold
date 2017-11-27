import * as React from 'react'
import * as classnames from 'classnames'

export interface PaginatorProps {
    first: boolean
    last: boolean
    pageNumber: number
    totalPages: number
    onChange?: (page: number) => void
}

export class Paginator extends React.Component<PaginatorProps> {

    render() {
        const paginatorClasses = {
            first: classnames({ 'is-disabled': this.props.first }),
            last: classnames({ 'is-disabled': this.props.last })
        }
        return (
            <div className='paginator has-text-centered'>
                <span className='botoes'>
                    <a className={paginatorClasses.first} onClick={!this.props.first && this.previous}>&laquo;</a>
                    {this.props.pageNumber - 2 >= 0 && <a onClick={this.makeSelectPage(this.props.pageNumber - 2)}>{this.props.pageNumber - 1}</a>}
                    {this.props.pageNumber - 1 >= 0 && <a onClick={this.makeSelectPage(this.props.pageNumber - 1)}>{this.props.pageNumber}</a>}
                    <a className='active'>{this.props.pageNumber + 1}</a>
                    {this.props.pageNumber + 1 < this.props.totalPages && <a onClick={this.makeSelectPage(this.props.pageNumber + 1)}>{this.props.pageNumber + 2}</a>}
                    {this.props.pageNumber + 2 < this.props.totalPages && <a onClick={this.makeSelectPage(this.props.pageNumber + 2)}>{this.props.pageNumber + 3}</a>}
                    <a className={paginatorClasses.last} onClick={!this.props.last && this.next}>&raquo;</a>
                </span>
                <span className='page-indicator is-pulled-right'>Página {this.props.pageNumber + 1} de {this.props.totalPages}</span>
            </div>
        )
    }

    private previous = () => {
        this.props.onChange(this.props.pageNumber - 1)
    }

    private next = () => {
        this.props.onChange(this.props.pageNumber + 1)
    }

    private makeSelectPage(page: number) {
        return () => this.props.onChange(page)
    }
}
