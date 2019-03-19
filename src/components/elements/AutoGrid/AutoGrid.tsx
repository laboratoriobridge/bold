import React from 'react'

import { Cell, CellSize } from '../Cell/Cell'
import { Grid, GridProps } from '../Grid/Grid'

export interface AutoGridProps extends GridProps {
  cellSize?: CellSize
}

export class AutoGrid extends React.PureComponent<AutoGridProps> {
  render() {
    const { children, cellSize, ...rest } = this.props
    return (
      <Grid wrap {...rest}>
        {React.Children.map(children, (child: any, idx) => {
          if (child && child.type === Cell) {
            return child
          } else {
            return (
              <Cell size={cellSize} key={idx}>
                {child}
              </Cell>
            )
          }
        })}
      </Grid>
    )
  }
}
