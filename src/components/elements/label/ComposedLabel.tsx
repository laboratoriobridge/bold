import * as React from 'react'
import * as classnames from 'classnames'

export interface ComposedLabelProps {
    big?: boolean
    customizeTitle?: (title: string) => React.ReactNode,
    horizontal?: boolean
    inverted?: boolean
    italic?: boolean
    className?: string
    labelClassName?: string
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
        const classes = classnames('composed-label', this.props.className, {
            'is-horizontal': this.props.horizontal,
            'small': this.props.size === 'small',
            'is-italic': !this.props.children,
            'is-inverted': this.props.inverted,
            'big': this.props.big,
        })

        const title = this.props.title
        return (
            <div className={classes} data-name={this.props.name}>
                <span className={classnames('label-title', this.props.labelClassName)}>{this.props.customizeTitle ? this.props.customizeTitle(title) : title}</span>
                {this.props.children || this.props.placeholder}
            </div>
        )
    }

}
