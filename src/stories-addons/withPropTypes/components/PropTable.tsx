import * as React from 'react'

import propsTypes from '../../../propTypes'

import PropVal from './PropVal'

const stylesheet = {
    propTable: {
        marginLeft: -10,
        borderSpacing: '10px 5px',
        borderCollapse: 'separate',
    },
}

interface PropTableProps {
    type: string
}

export default class PropTable extends React.PureComponent<PropTableProps> {

    render() {
        const typeProps = propsTypes[this.props.type]
        if (!typeProps) {
            return <small>No propTypes defined!</small>
        }

        return (
            <table style={stylesheet.propTable}>
                <thead>
                    <tr>
                        <th>property</th>
                        <th>propType</th>
                        <th>required</th>
                        <th>default</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(typeProps.props).map(row => (
                        <tr key={row}>
                            <td>{row}</td>
                            <td>{typeProps.props[row].type.name}</td>
                            <td>{`${typeProps.props[row].required}`}</td>
                            <td>
                                {typeProps.props[row].defaultValue === 'null' ? (
                                    '-'
                                ) : (
                                        <PropVal val={typeProps.props[row].defaultValue} />
                                    )}
                            </td>
                            <td>{typeProps.props[row].description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

}
