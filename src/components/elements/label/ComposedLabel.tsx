import * as React from 'react'
import * as classnames from 'classnames'

export interface ComposedLabelProps {
    customizeTitle?: (title: string) => React.ReactNode,
    horizontal?: boolean
    italic?: boolean
    name?: string
    placeholder?: string
    size?: string
    title: string
}

export class ComposedLabel extends React.Component<ComposedLabelProps, any> {

    static defaultProps: ComposedLabelProps = {
        title: '',
        placeholder: 'Não informada'
    }

    render() {
        const classes = classnames('composed-label', {
            'is-horizontal': this.props.horizontal,
            'small': this.props.size === 'small'
        })

        const title = this.props.horizontal ? this.props.title + ': ' : this.props.title
        return (
            <div className={classes} data-name={this.props.name}>
                <span className='label-title'>{this.props.customizeTitle ? this.props.customizeTitle(title) : title}</span>
                {this.props.children || this.props.placeholder}
            </div>
        )
    }

}
