import { Tag, TagProps, useTheme } from 'bold-ui'
import React from 'react'

export function TagDone(props: TagProps) {
  const theme = useTheme()

  return (
    <Tag
      style={{
        color: theme.pallete.status.success.c40,
        backgroundColor: theme.pallete.status.success.c90,
        fontWeight: 400,
      }}
      {...props}
    />
  )
}

export function TagNormal(props: TagProps) {
  const theme = useTheme()

  return (
    <Tag
      style={{
        color: theme.pallete.gray.c40,
        backgroundColor: theme.pallete.gray.c90,
        fontWeight: 400,
      }}
      {...props}
    />
  )
}
