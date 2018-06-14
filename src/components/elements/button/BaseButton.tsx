import * as React from 'react'

export type OnClickWithPromise = (event: React.MouseEvent<any>) => any

export interface BaseButtonProps {
    /**
     * css className
     */
    className?: string
    disabled?: boolean
    name?: string
    onClick?: React.MouseEventHandler<any> | OnClickWithPromise
    onMouseEnter?: React.MouseEventHandler<any>
    onMouseLeave?: React.MouseEventHandler<any>
    tabIndex?: number
    title?: string
    onLoadingChange?(loading: boolean): void
    render?(props: any): React.ReactNode
}

export class BaseButton extends React.Component<BaseButtonProps> {

    static defaultProps = {
        render: (props: any) => {
            return (
                <button type='button' {...props} />
            )
        },
    }

    private timeout: number

    componentWillUnmount() {
        clearTimeout(this.timeout)
        this.timeout = -1
    }

    render() {
        const { onLoadingChange, render, ...rest } = this.props

        return render({
            ...rest,
            onClick: this.onClick,
            onKeyPress: this.handleOnKeyPress,
        })
    }

    private handleOnKeyPress = (event) => {
        event.preventDefault()
        if (!event) { event = window.event } // cross-browser shenanigans
        if (event.charCode === 32 || event.charCode === 13 && this.props.onClick) { // this is the spacebar
            this.onClick(event)
        }
        return true // treat all other keys normally;
    }

    private onClick = (event: React.MouseEvent<any>) => {
        if (this.props.onClick) {

            const promise = this.props.onClick(event)
            if (promise && promise.then) {
                this.startLoading()
                promise
                    .then(() => this.stopLoading())
                    .catch((error) => {
                        this.stopLoading()
                        throw new Error(error)
                    })
            }
        }
    }

    private startLoading = () => {
        this.props.onLoadingChange && this.props.onLoadingChange(true)
    }

    private stopLoading() {
        if (!this.timeout) {
            this.timeout = window.setTimeout(() => {
                this.props.onLoadingChange && this.props.onLoadingChange(false)
                this.timeout = null
            }, 10)
        }
    }

}
