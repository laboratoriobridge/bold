import { TextInput, Theme, useStyles } from 'bridge-react/lib'

import { SIDE_NAV_WIDTH } from './SideNav'

export const APP_HEADER_HEIGHT = 77

export const AppHeader = () => {
  const { classes } = useStyles(createStyles)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src='/static/image/bold_.svg' className={classes.image} alt='Bold design system logo' />
      </div>

      <div className={classes.search}>
        <TextInput
          style={classes.searchInput}
          type='search'
          icon='zoomOutline'
          iconPosition='left'
          placeholder='Search in bold design system...'
        />
      </div>
    </header>
  )
}

const createStyles = (theme: Theme) => ({
  header: {
    background: theme.pallete.surface.main,
    padding: '1rem 2rem',
    boxShadow: theme.shadows.outer[60],
    display: 'flex',
    alignItems: 'center',
    zIndex: 20,
    position: 'fixed',
    width: '100%',
  } as React.CSSProperties,
  image: {
    height: '2.5rem',
  } as React.CSSProperties,
  logo: {
    borderRight: `1px solid ${theme.pallete.divider}`,
    width: `calc(${SIDE_NAV_WIDTH}px - 2rem)`,
    textAlign: 'center',
    padding: '0 1rem',
  } as React.CSSProperties,
  search: {
    flex: 1,
    padding: '0 1rem',
  } as React.CSSProperties,
  searchInput: {
    border: 'none',
    '~ span': {
      background: theme.pallete.surface.main,
    },
    '&::-webkit-search-decoration': {
      '-webkit-appearance': 'none',
    },
  } as React.CSSProperties,
})
