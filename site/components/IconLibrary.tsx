import matchSorter from 'match-sorter'
import { useState } from 'react'

import { Cell, Grid, Icon, Text, TextInput, Theme, useStyles, VFlow } from '../../lib'
import { IconMap } from '../../lib/components/elements/Icon/generated/Icons'

export const IconLibrary = () => {
  const { classes } = useStyles(createStyles)
  const [filter, setFilter] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.value) {
      setFilter(e.target.value)
    } else {
      setFilter('')
    }
  }

  const icons = matchSorter(Object.keys(IconMap), filter)

  return (
    <VFlow>
      <div className={classes.searchWrapper}>
        <TextInput icon='zoomOutline' placeholder='Search icons...' value={filter} onChange={handleSearchChange} />
      </div>

      <Grid wrap>
        {icons.map((key: any) => (
          <Cell key={key} style={classes.cell}>
            <div className={classes.iconBox}>
              <Icon icon={key} />
            </div>
            <Text style={{ wordBreak: 'break-word' }}>{key}</Text>
          </Cell>
        ))}
      </Grid>
    </VFlow>
  )
}

const createStyles = (theme: Theme) => ({
  searchWrapper: {
    width: 320,
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.pallete.surface.background,
    padding: '1rem',
    height: 80,
    width: 80,
    margin: '0 auto 0.5rem auto',
    border: `1px solid ${theme.pallete.divider}`,
  } as React.CSSProperties,
  cell: {
    flexBasis: 100,
    textAlign: 'center',
    fontSize: theme.typography.sizes.text,
  } as React.CSSProperties,
})
