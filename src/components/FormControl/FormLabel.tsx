import React, { CSSProperties } from 'react'

import { useLocale } from '../../i18n'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util/types'

export interface FormLabelProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'style'> {
  label: React.ReactNode
  required?: boolean
  style?: ExternalStyles
  markerStyle?: ExternalStyles
}

export function FormLabel(props: FormLabelProps) {
  const { label, required, style, markerStyle, ...rest } = props
  const { classes, css } = useStyles(createStyles)
  const locale = useLocale()

  return (
    <label className={css(classes.label, style)} {...rest}>
      {label}

      {required && (
        <span title={locale.formControl.required} className={css(classes.marker, markerStyle)}>
          &#42;
        </span>
      )}
    </label>
  )
}

export const createStyles = (theme: Theme) => ({
  label: {
    fontWeight: 'bold',
  } as CSSProperties,
  marker: {
    color: theme.pallete.status.danger.main,
    marginLeft: '0.25rem',
  } as CSSProperties,
})
