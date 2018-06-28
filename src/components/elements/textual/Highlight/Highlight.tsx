import * as React from 'react'

export interface HighlightProps {
    text: string
    words: string[]
}

export class Highlight extends React.PureComponent<HighlightProps> {
    render() {
        const { text, words } = this.props

        const validWords = words.filter(w => !!w).map(w => w.trim()).filter(w => !!w)

        if (validWords.length <= 0) {
            return <span>{text}</span>
        }

        const regex = new RegExp(validWords.join('|'), 'gi')

        return (
            <span
                dangerouslySetInnerHTML={{
                    __html: text.replace(regex, (match) => {
                        return `<mark>${match}</mark>`
                    }),
                }}
            />
        )
    }
}
