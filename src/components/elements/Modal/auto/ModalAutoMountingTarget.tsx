import * as React from 'react'

export interface ModalAutoRenderProps {
    dispose(): void
}

export type ModalAutoRenderFunction = (props: ModalAutoRenderProps) => React.ReactNode

interface ModalAutoItem {
    key: string
    component: React.ReactNode
}

export interface ConfirmMountingTargetState {
    components: ModalAutoItem[]
}

export class ModalAutoMountingTarget extends React.Component<any, ConfirmMountingTargetState> {
    public static append: (render: ModalAutoRenderFunction) => void = null

    state = {
        components: [],
    }

    componentDidMount() {
        if (ModalAutoMountingTarget.append) {
            throw new Error(`There must be a single <${ModalAutoMountingTarget.name} /> in your application.`)
        }

        ModalAutoMountingTarget.append = this.append
    }

    componentWillUnmount() {
        ModalAutoMountingTarget.append = null
    }

    append = (render: ModalAutoRenderFunction) => {
        const key = Math.random().toString(36).substring(2)

        const component = render({
            dispose: this.dispose(key),
        })

        this.setState({
            components: [...this.state.components, { key, component }],
        })

        return key
    }

    dispose = (key: ModalAutoItem['key']) => () => {
        this.setState((state) => ({
            components: state.components.filter(c => c.key !== key),
        }))
    }

    render() {
        return (
            <div>
                {this.state.components.map((item: ModalAutoItem) =>
                    <React.Fragment key={item.key}>{item.component}</React.Fragment>)}
            </div>
        )
    }
}
