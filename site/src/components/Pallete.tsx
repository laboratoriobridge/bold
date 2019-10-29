import { Theme, useStyles } from 'bold-ui'
import { ColorScale, gray } from 'bold-ui/styles/colors'
import React from 'react'

export interface PalletePros {
  title: string
  pallete: ColorScale
}

export function Pallete(props: PalletePros) {
  const { title, pallete } = props
  const { classes, css } = useStyles(createStyles)

  const keys: number[] = Object.keys(pallete)
    .map(k => parseInt(k.substr(1), 10))
    .sort((a, b) => (a < b ? 1 : -1))

  return (
    <div className={classes.box}>
      <div className={css(classes.item, classes.title)} style={{ background: pallete.c40, color: gray.c100 }}>
        {title}
      </div>
      <div className={classes.item} style={{ background: pallete.c40, color: gray.c100 }}>
        <span className={classes.shade}>40</span>
        <span className={classes.hex}>{pallete.c40}</span>
      </div>
      {keys.map(key => (
        <div
          key={key}
          className={classes.item}
          style={{
            background: (pallete as any)['c' + key],
            color: key <= 60 ? gray.c100 : gray.c20,
          }}
        >
          <span className={classes.shade}>{key}</span>
          <span className={classes.hex}>{(pallete as any)['c' + key]}</span>
        </div>
      ))}
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  box: {
    display: 'inline-block',
    width: 240,
    fontSize: theme.typography.sizes.text,
  } as React.CSSProperties,
  title: {
    fontWeight: 'bold',
  } as React.CSSProperties,
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    '&:first-of-type': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
    },
  } as React.CSSProperties,
  shade: {
    fontWeight: 'bold',
  } as React.CSSProperties,
  hex: {} as React.CSSProperties,
})
