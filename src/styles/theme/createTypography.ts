import { FontSizeProperty } from 'csstype'
import { CSSProperties } from 'react'

import { merge } from '../../util'

import { Pallete } from './createPallete'

export type FontSize = FontSizeProperty<string> | number

export type TypographyVariant = 'main' | 'secondary' | 'disabled' | 'link' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface Typography {
  fontFamily: string
  lineHeight: string
  sizes: {
    html: number
    text: FontSize
    button: FontSize
  }
  variant(variant: TypographyVariant): CSSProperties
}

export type TypographyConfig = Partial<typeof defaultTypographyConfig>

export const defaultTypographyConfig = {
  fontFamily: '"IBM Plex Sans", sans-serif',
  lineHeight: '1.5',
  sizes: {
    html: 16,
    text: '0.8125rem',
    button: '0.875rem',
  },
}

export const createTypography = (pallete: Pallete, customConfig?: TypographyConfig): Typography => {
  const config = merge({}, defaultTypographyConfig, customConfig)

  const base = {
    fontFamily: config.fontFamily,
    fontSize: config.sizes.text,
    lineHeight: config.lineHeight,
    color: pallete.text.main,
  }

  const variantMap: { [key in TypographyVariant]: React.CSSProperties } = {
    main: { ...base },
    secondary: { ...base, color: pallete.text.secondary },
    disabled: { ...base, color: pallete.text.disabled },
    h1: { ...base, fontWeight: 'bold', fontSize: '1.5rem' },
    h2: { ...base, fontWeight: 'bold', fontSize: '1.25rem' },
    h3: { ...base, fontWeight: 'bold', fontSize: '1rem' },
    h4: { ...base, fontWeight: 'bold', fontSize: '0.875rem' },
    h5: { ...base, fontWeight: 'bold', fontSize: '0.8125rem' },
    h6: { ...base, fontWeight: 'bold', fontSize: '0.75rem' },
    link: {
      ...base,
      color: pallete.primary.main,
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
  }

  return {
    ...config,
    variant: (variant: TypographyVariant) => variantMap[variant],
  }
}
