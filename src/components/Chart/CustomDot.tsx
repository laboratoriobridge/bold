import React from 'react'

import { CustomDotProps } from './model'
import { Circle, Cross, Diamond, Happy, Rectangle, Square, Star, Triangle } from './shapes'

export function CustomDot(props: CustomDotProps) {
  return props.cx && props.cy && <Shape {...props} />
}

const Shape = (props: CustomDotProps) => {
  const { shape, ...rest } = props

  switch (shape) {
    case 'square': {
      return <Square {...rest} />
    }
    case 'rect': {
      return <Rectangle {...rest} />
    }
    case 'triangle': {
      return <Triangle {...rest} />
    }
    case 'diamond': {
      return <Diamond {...rest} />
    }
    case 'cross': {
      return <Cross {...rest} />
    }
    case 'star': {
      return <Star {...rest} />
    }
    case 'happy': {
      return <Happy {...rest} />
    }
    default: {
      return <Circle {...rest} />
    }
  }
}
