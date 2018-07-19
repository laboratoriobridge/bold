import * as React from 'react'

import { ObservableUnsubscribeFn } from '../../../../util/Observable'

import store, { ModalStore, ModalStoreItem, ModalStoreState } from './ModalStore'

export interface ModalMountTargetProps {
    store?: ModalStore
}

export class ModalMountTarget extends React.Component<ModalMountTargetProps, ModalStoreState> {

    static defaultProps = {
        store,
    }

    state = {
        items: [],
    }

    private unsubscribe: ObservableUnsubscribeFn

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe((state: ModalStoreState) => {
            this.setState(state)
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                {this.state.items.map((item: ModalStoreItem) =>
                    <React.Fragment key={item.key}>{item.component}</React.Fragment>
                )}
            </div>
        )
    }
}
