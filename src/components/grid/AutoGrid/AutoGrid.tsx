import * as React from 'react'

import { Cell, CellSize } from '../Cell/Cell'
import { Grid } from '../Grid/Grid'

export interface AutoGridProps {
    cellSize?: CellSize
}

export class AutoGrid extends React.Component<AutoGridProps> {
    render() {
        const { children, cellSize } = this.props
        return (
            <Grid wrap>
                {React.Children.map(children, (child: any, idx) => {
                    if (child && child.type === Cell) {
                        return child
                    } else {
                        return <Cell size={cellSize} key={idx}>{child}</Cell>
                    }
                })}
            </Grid>
        )
    }
}
