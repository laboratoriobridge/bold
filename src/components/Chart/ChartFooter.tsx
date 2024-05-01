import React from 'react'
import { useStyles } from '../../styles'
import { Text } from '../Text'

export interface ChartFooterProps {
  children?: React.ReactNode
}

export function ChartFooter(props: ChartFooterProps) {
  const { children } = props

  const { classes } = useStyles(createStyles)

  return (
    <Text className={classes.footer} component='span' fontSize={0.8}>
      {children}
    </Text>
  )
}

const createStyles = () => ({
  footer: {
    padding: '0 1.5rem 1.5rem 1.5rem',
    display: 'inline-block',
    width: '100%',
  },
})
