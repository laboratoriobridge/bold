import * as React from 'react'

import Props from './Props'

const stylesheet = {
    containerStyle: {
        lineHeight: 1.45,
    },
    tagStyle: {
        color: '#777',
    },
}

function getData(element) {
    const data = {
        name: null,
        text: null,
        children: null,
    }

    if (element === null) {
        return data
    }

    if (typeof element === 'string') {
        data.text = element
        return data
    }

    if (typeof element === 'number') {
        data.text = element.toString()
        return data
    }

    data.children = element.props.children
    const { type } = element

    if (typeof type === 'string') {
        data.name = type
    } else {
        data.name = type.displayName || type.name || 'Unknown'
    }

    return data
}

interface NodeProps {
    node?: React.ReactChild,
    depth?: number,
    maxPropsIntoLine: number,
    maxPropObjectKeys: number,
    maxPropArrayLength: number,
    maxPropStringLength: number,
}

export default class Node extends React.PureComponent<NodeProps> {
    static defaultProps: Partial<NodeProps> = {
        node: null,
        depth: 0,
    }

    render() {
        const {
            node,
            depth,
            maxPropsIntoLine,
            maxPropObjectKeys,
            maxPropArrayLength,
            maxPropStringLength,
        } = this.props
        const { tagStyle, containerStyle } = stylesheet

        const leftPad = {
            paddingLeft: 3 + (depth + 1) * 15,
            paddingRight: 3,
        }

        // Keep a copy so that further mutations to containerStyle don't impact us:
        const containerStyleCopy = Object.assign({}, containerStyle, leftPad)

        const { name, text, children } = getData(node)

        // Just text
        if (!name) {
            return (
                <div style={containerStyleCopy}>
                    <span style={tagStyle}>{text}</span>
                </div>
            )
        }

        // Single-line tag
        if (!children) {
            return (
                <div style={containerStyleCopy}>
                    <span style={tagStyle}>&lt;{name}</span>
                    <Props
                        node={node}
                        singleLine
                        maxPropsIntoLine={maxPropsIntoLine}
                        maxPropObjectKeys={maxPropObjectKeys}
                        maxPropArrayLength={maxPropArrayLength}
                        maxPropStringLength={maxPropStringLength}
                    />
                    <span style={tagStyle}>/&gt;</span>
                </div>
            )
        }

        const finalName = name !== 'Unknown' && name

        // tag with children
        return (
            <div>
                <div style={containerStyleCopy}>
                    <span style={tagStyle}>&lt;{finalName}</span>
                    <Props
                        node={node}
                        maxPropsIntoLine={maxPropsIntoLine}
                        maxPropObjectKeys={maxPropObjectKeys}
                        maxPropArrayLength={maxPropArrayLength}
                        maxPropStringLength={maxPropStringLength}
                    />
                    <span style={tagStyle}>&gt;</span>
                </div>
                {React.Children.map(children, (childElement, index) => (
                    <Node
                        key={index}
                        node={childElement}
                        depth={depth + 1}
                        maxPropsIntoLine={maxPropsIntoLine}
                        maxPropObjectKeys={maxPropObjectKeys}
                        maxPropArrayLength={maxPropArrayLength}
                        maxPropStringLength={maxPropStringLength}
                    />
                ))}
                <div style={containerStyleCopy}>
                    <span style={tagStyle}>&lt;/{finalName}&gt;</span>
                </div>
            </div>
        )
    }
}
