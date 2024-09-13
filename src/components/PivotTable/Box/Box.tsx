import { SerializedStyles } from '@emotion/core'
import React, { CSSProperties, ReactElement } from 'react'
import { Theme, useStyles } from '../../../styles'
import { Icon, IconImage } from '../../Icon'

export interface BoxProps {
  styles?: SerializedStyles
  icon?: IconImage
  rotation?: '0' | '90'
  label: string
  children: ReactElement
}

export function Box(props: BoxProps) {
  const { styles, icon, rotation, label, children } = props

  const { classes, css } = useStyles(createStyles)

  return (
    <div className={classes.wrapper}>
      <div className={classes.panel}>
        <h4 className={classes.header}>
          {icon && (
            <Icon
              icon={icon}
              style={css`
                transform: rotate(${rotation}deg);
              `}
            />
          )}
          {label}
        </h4>
      </div>
      <div className={css(classes.children, styles)}>{children}</div>
    </div>
  )
}

Box.defaultProps = {
  rotation: '0',
} as Partial<BoxProps>

const createStyles = (theme: Theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,

  panel: {
    backgroundColor: theme.pallete.gray.c90,
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,

  wrapper: {
    border: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,

  children: {
    minHeight: '7.18rem',
  } as CSSProperties,
})
