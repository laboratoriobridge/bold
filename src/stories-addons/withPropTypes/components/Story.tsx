import marksy from 'marksy'
import * as React from 'react'

import Pre from './markdown/Pre'
import Node from './Node'
import PropTable from './PropTable'

const baseFonts = {
    fontFamily: ['-apple-system', '".SFNSText-Regular"', '"San Francisco"', 'BlinkMacSystemFont',
        '"Segoe UI"', '"Roboto"', '"Oxygen"', '"Ubuntu"', '"Cantarell"', '"Fira Sans"', '"Droid Sans"',
        '"Helvetica Neue"', '"Lucida Grande"', '"Arial"', 'sans-serif'],
    color: '#444',
    WebkitFontSmoothing: 'antialiased',
}

const stylesheet: {[key in string]: React.CSSProperties} = {
    button: {
        base: {
            fontFamily: 'sans-serif',
            fontSize: '12px',
            display: 'block',
            position: 'fixed',
            border: 'none',
            background: '#28c',
            color: '#fff',
            padding: '5px 15px',
            cursor: 'pointer',
        },
        topRight: {
            top: 0,
            right: 0,
            borderRadius: '0 0 0 5px',
        },
    },
    info: {
        position: 'fixed',
        background: 'white',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: '0 40px',
        overflow: 'auto',
        zIndex: 99999,
    },
    children: {
        position: 'relative',
        zIndex: 0,
    },
    infoBody: {
        ...baseFonts,
        fontWeight: 300,
        lineHeight: 1.45,
        fontSize: '15px',
        padding: '20px 40px 40px',
        borderRadius: '2px',
        backgroundColor: '#fff',
    },
    infoContent: {
        marginBottom: 0,
    },
    infoStory: {},
    jsxInfoContent: {
        borderTop: '1px solid #eee',
        margin: '20px 0 0 0',
    },
    header: {
        h1: {
            marginTop: '10px',
            padding: 0,
            fontSize: '35px',
        },
        h2: {
            margin: '0 0 10px 0',
            padding: 0,
            fontWeight: 400,
            fontSize: '22px',
        },
        body: {
            borderBottom: '1px solid #eee',
            marginBottom: '10px',
        },
    },
    source: {
        h1: {
            margin: '20px 0 0 0',
            padding: '0 0 5px 0',
            fontSize: '25px',
            borderBottom: '1px solid #EEE',
        },
    },
    propTableHead: {
        margin: '20px 0 0 0',
    },
}

interface StoryProps {
    context: { kind: string, story: string }
    info?: string
    maxPropsIntoLine: number,
    maxPropObjectKeys: number,
    maxPropArrayLength: number,
    maxPropStringLength: number,
}

export default class Story extends React.PureComponent<StoryProps> {
    private marksy: (content: any, ...args: any[]) => { [x: string]: any; tree: any; toc: any; }

    constructor(props, context) {
        super(props, context)

        this.marksy = marksy({ createElement: React.createElement })
    }

    render() {
        return (
            <div style={stylesheet.infoBody}>
                {this.renderInlineHeader()}
                {this.renderStory()}
                {this.renderInfoContent()}
                {this.renderSourceCode()}
                {this.renderPropTables()}
            </div>
        )
    }

    private renderInlineHeader() {
        if (!this.props.context) {
            return null
        }

        return (
            <div style={stylesheet.header.body}>
                <h1 style={stylesheet.header.h1}>{this.props.context.kind}</h1>
                <h2 style={stylesheet.header.h2}>{this.props.context.story}</h2>
            </div>
        )
    }

    private renderStory() {
        return <div style={stylesheet.infoStory}>{this.props.children}</div>
    }

    private renderInfoContent() {
        if (!this.props.info) {
            return ''
        }

        const lines = this.props.info.split('\n')
        while (lines[0].trim() === '') {
            lines.shift()
        }
        let padding = 0
        const matches = lines[0].match(/^ */)
        if (matches) {
            padding = matches[0].length
        }
        const source = lines.map(s => s.slice(padding)).join('\n')
        return <div style={stylesheet.infoContent}>{this.marksy(source).tree}</div>
    }

    private renderSourceCode() {
        return (
            <div>
                <h1 style={stylesheet.source.h1}>Story Source</h1>
                <Pre>
                    {React.Children.map(this.props.children, (root, idx) => this.renderNode(root, idx))}
                </Pre>
            </div>
        )
    }

    private renderNode = (root, idx) => {
        const {
            maxPropsIntoLine,
            maxPropObjectKeys,
            maxPropArrayLength,
            maxPropStringLength,
        } = this.props

        return (
            <Node
                key={idx}
                node={root}
                depth={0}
                maxPropsIntoLine={maxPropsIntoLine}
                maxPropObjectKeys={maxPropObjectKeys}
                maxPropArrayLength={maxPropArrayLength}
                maxPropStringLength={maxPropStringLength}
            />
        )
    }

    private renderPropTables() {
        const types = new Map()
        const extract = children => {
            if (!children) {
                return
            }
            if (Array.isArray(children)) {
                children.forEach(extract)
                return
            }
            if (children.props && children.props.children) {
                extract(children.props.children)
            }
            if (children.type && !types.has(children.type)) {
                types.set(children.type, true)
            }
        }

        extract(this.props.children)

        const propTables = Array.from(types.keys()).map(type => {
            if (!type.displayName && !type.name) {
                return null
            }
            return (
                <div key={type.displayName || type.name}>
                    <h2 style={stylesheet.propTableHead}>"{type.displayName || type.name}" Component</h2>
                    <PropTable key={type.displayName || type.name} type={type.displayName || type.name} />
                </div>
            )
        })

        if (!propTables || propTables.length === 0) {
            return null
        }

        return (
            <div>
                <h1 style={stylesheet.source.h1}>Prop Types</h1>
                {propTables}
            </div>
        )
    }
}
