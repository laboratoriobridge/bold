import React from 'react'

import { pluralize } from '../../../../util/string'

export class PluralProps {
    word: string
    count: number
    inclusive?: boolean
}

export class Plural extends React.Component<PluralProps> {

    render() {
        const { word, count, inclusive } = this.props
        return <span>{pluralize(word, count, inclusive)}</span>
    }

}
