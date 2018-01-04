import * as React from 'react'
import PropVal from './PropVal'

const stylesheet = {
    propStyle: {},
    propNameStyle: {},
    propValueStyle: {},
}

interface PropsProps {
    node: React.ReactChild,
    singleLine?: boolean,
    maxPropsIntoLine: number,
    maxPropObjectKeys: number,
    maxPropArrayLength: number,
    maxPropStringLength: number,
}

export default class Props extends React.PureComponent<PropsProps> {
    static defaultProps: Partial<PropsProps> = {
        singleLine: false,
    }

    render() {

        const { maxPropsIntoLine } = this.props
        const nodeProps = (this.props.node as any).props
        const { defaultProps } = (this.props.node as any).type
        if (!nodeProps || typeof nodeProps !== 'object') {
            return <span />
        }

        const { propValueStyle, propNameStyle } = stylesheet

        const names = Object.keys(nodeProps).filter(
            name =>
                name[0] !== '_' &&
                name !== 'children' &&
                (!defaultProps || nodeProps[name] !== defaultProps[name])
        )

        const breakIntoNewLines = names.length > maxPropsIntoLine
        const endingSpace = this.props.singleLine ? ' ' : ''

        const items = []
        names.forEach((name, i) => {
            items.push(
                <span key={name}>
                    {breakIntoNewLines ? (
                        <span>
                            <br />&nbsp;&nbsp;
                        </span>
                    ) : (
                            ' '
                        )}
                    <span style={propNameStyle}>{name}</span>
                    {/* Use implicit true: */}
                    {(!nodeProps[name] || typeof nodeProps[name] !== 'boolean') && (
                        <span>
                            =
                            <span style={propValueStyle}>
                                <PropVal val={nodeProps[name]} />
                            </span>
                        </span>
                    )}

                    {i === names.length - 1 && (breakIntoNewLines ? <br /> : endingSpace)}
                </span>
            )
        })

        return <span>{items}</span>
    }
}
