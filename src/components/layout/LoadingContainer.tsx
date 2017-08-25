import * as React from 'react'
import { LoadingAnimation } from '../elements/LoadingAnimation'

export interface LoadingContainerProps {
    isFetching: boolean
    loadingText?: string
}

export class LoadingContainer extends React.Component<LoadingContainerProps> {

    public static defaultProps: Partial<LoadingContainerProps> = {
        loadingText: 'CARREGANDO'
    }

    render() {
        if (!this.props.isFetching) {
            return (<div>{this.props.children}</div>)
        }
        return (
            <div className='is-full-height loading-container'>
                <div className='loading-indicator'>
                    <LoadingAnimation />
                    {this.props.loadingText}...
                </div>
            </div>
        )
    }

}

export interface LoadingStateContainerProps {
    readyState: 'request' | 'success' | 'failure'
    loadingText?: string
}

export class LoadingStateContainer extends React.Component<LoadingStateContainerProps> {

    public static defaultProps: Partial<LoadingStateContainerProps> = {
        loadingText: LoadingContainer.defaultProps.loadingText
    }

    render() {
        if (this.props.readyState === 'failure') {
            return (
                <div className='is-full-height loading-error-container'>
                    <div className='loading-error'>
                        <p>Ocorreu um erro ao requisitar os dados do servidor.</p>
                        <p>Cheque sua conexão e atualize a página para tentar novamente.</p>
                    </div>
                </div>
            )
        } else {
            return (
                <LoadingContainer isFetching={this.props.readyState === 'request'} loadingText={this.props.loadingText}>
                    {this.props.children}
                </LoadingContainer>
            )
        }

    }
}
