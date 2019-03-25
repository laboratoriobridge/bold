import { FontSizeProperty } from 'csstype'

import { merge } from '../../util'
import { DeepPartial } from '../../util/types'

export type FontSize = FontSizeProperty<string> | number

export interface Typography {
  fontFamily: string
  lineHeight: string
  sizes: {
    html: number
    text: FontSize
    button: FontSize
  }
}

export type TypographyConfig = DeepPartial<Typography>

export const defaultTypographyConfig: Typography = {
  fontFamily: '"IBM Plex Sans", sans-serif',
  lineHeight: '1.5',
  sizes: {
    html: 16,
    text: '0.8125rem',
    button: '0.875rem',
  },
}

export const createTypography = (customConfig?: TypographyConfig): Typography => {
  return merge({}, defaultTypographyConfig, customConfig)
}
