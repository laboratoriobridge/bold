import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { HFlow } from '../HFlow'

export interface ModalFooterSlots {
  primarySlot: JSX.Element
  secondarySlot?: JSX.Element
  tertiarySlot?: JSX.Element
  complementarySlot?: JSX.Element
}

export interface ModalFooterProps
  extends ModalFooterSlots,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  style?: ExternalStyles
}

export function ModalFooter(props: ModalFooterProps) {
  const { primarySlot, secondarySlot, tertiarySlot, complementarySlot, style, ...rest } = props

  const { classes, css } = useStyles(createStyles, !!tertiarySlot)

  return (
    <div className={css(classes.footer, style)} {...rest}>
      <HFlow hSpacing={0.5} alignItems='center' justifyContent='space-between' style={classes.inner}>
        {tertiarySlot}
        <HFlow alignItems='center' justifyContent='flex-end'>
          {complementarySlot}
          {secondarySlot}
          {primarySlot}
        </HFlow>
      </HFlow>
    </div>
  )
}

export const createStyles = (theme: Theme, hasTertiarySlot: boolean) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.pallete.surface.background,
    padding: '1rem',
    borderBottomLeftRadius: theme.radius.modal,
    borderBottomRightRadius: theme.radius.modal,
    height: '5rem',
    width: '100%',
    borderTop: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
  inner: {
    width: '100%',
    gridTemplateColumns: hasTertiarySlot ? 'auto 1fr' : '1fr',
  } as CSSProperties,
})
