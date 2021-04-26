import { css, SerializedStyles } from '@emotion/core'
import React, { CSSProperties, ReactElement } from 'react'
import { Theme, useStyles } from '../../styles'
import { Icon, Icons } from '../Icon'

export interface BoxProps {
  styles?: SerializedStyles
  icon?: Icons
  rotation?: '0' | '90'
  label: string
  children: ReactElement
}

export function Box(props: BoxProps) {
  const { styles, icon, rotation, label, children } = props

  const { classes } = useStyles(createStyles)

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
      <div
        css={css`
          min-height: 7.18rem;
          ${styles}
        `}
      >
        {children}
      </div>
    </div>
  )
}

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
})
