import * as React from 'react'

interface PreProps {

}

export default class Pre extends React.PureComponent<PreProps> {
    render() {
        const style: React.CSSProperties = {
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            backgroundColor: '#fafafa',
            padding: '.5rem',
            lineHeight: 1.5,
            overflowX: 'auto',
        }
        return <pre style={style}>{this.props.children}</pre>
    }
}
