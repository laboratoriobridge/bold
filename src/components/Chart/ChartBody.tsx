import React, { ReactElement } from 'react'
import { ResponsiveContainer } from 'recharts'
import { Text } from '../Text'

export interface ChartBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactElement
  height?: number
  width?: number | '100%'
  caption?: string
}

export function ChartBody(props: ChartBodyProps) {
  const { children, width, height, caption, ...rest } = props

  return (
    <div style={{ padding: '0.5rem 1rem' }} {...rest}>
      {caption && (
        <Text component='p' style={{ width: width, padding: '0 0.5rem' }}>
          {caption}
        </Text>
      )}
      <ResponsiveContainer width={width} height={height}>
        {children}
      </ResponsiveContainer>
    </div>
  )
}

ChartBody.defaultProps = {
  height: 700,
  width: '100%',
} as ChartBodyProps
