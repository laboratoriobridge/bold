import NextLink from 'next/link'

import { Button, Icon, Link, TextInput, Theme, Tooltip, useStyles } from '../../lib'

import { BoldLogo } from './BoldLogo'
import { SIDE_NAV_WIDTH } from './SideNav'
import { lightTheme } from './useThemeSwitch'

export interface AppHeaderProps {
  currentTheme: Theme
  onThemeSwitch(): void
}

export function AppHeader(props: AppHeaderProps) {
  const { currentTheme, onThemeSwitch } = props
  const { classes } = useStyles(createStyles)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NextLink href='/'>
          <Link href='/' style={{ display: 'inline-block' }}>
            <BoldLogo aria-label='Bold Logo' style={{ height: '2.5rem' }} />
          </Link>
        </NextLink>
      </div>

      <div className={classes.search} id='search-wrapper'>
        <TextInput
          id='search-input'
          style={classes.searchInput}
          type='search'
          icon='zoomOutline'
          iconPosition='left'
          placeholder='Search in bold design system...'
        />
      </div>

      <div>
        <Tooltip text={currentTheme === lightTheme ? 'Switch to dark mode' : 'Switch to light mode'}>
          <Button skin='ghost' size='small' onClick={onThemeSwitch}>
            <Icon icon='lightbulbFilled' />
          </Button>
        </Tooltip>
      </div>
    </header>
  )
}

export const APP_HEADER_HEIGHT = 77

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
  logo: {
    borderRight: `1px solid ${theme.pallete.divider}`,
    width: `calc(${SIDE_NAV_WIDTH}px - 2rem)`,
    padding: '0 1rem 0 2.75rem',
  } as React.CSSProperties,
  searchInput: {
    border: 'none',
    '~ span': {
      background: theme.pallete.surface.main,
    },
    '&::-webkit-search-decoration': {
      WebkitAppearance: 'none',
    } as React.CSSProperties,
  } as React.CSSProperties,
  search: {
    flex: 1,
    padding: '0 1rem',
    position: 'relative',

    '.algolia-autocomplete': {
      left: '1rem !important',
      top: '0.5rem',
    },

    /* Main dropdown wrapper */
    '.algolia-autocomplete .ds-dropdown-menu': {
      fontSize: '1em',
      fontWeight: 'normal',
    },

    /* Link element */
    '.algolia-autocomplete .algolia-docsearch-suggestion': {
      fontWeight: 'normal',
      textDecoration: 'none',
    },

    /* Main category (eg. Getting Started) */
    '.algolia-autocomplete .algolia-docsearch-suggestion--category-header': {
      fontWeight: 'bold',
      color: theme.pallete.text.main,
    },

    /* Category (eg. Downloads) */
    '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column': {},

    '.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column-text': {
      color: theme.pallete.text.secondary,
      fontSize: theme.typography.sizes.text,
    },

    /* Content */
    '.algolia-autocomplete .algolia-docsearch-suggestion--content': {},

    /* Title (eg. Bootstrap CDN) */
    '.algolia-autocomplete .algolia-docsearch-suggestion--title': {
      color: theme.pallete.text.main,
      fontSize: theme.typography.sizes.text,
    },

    /* Description description (eg. Bootstrap currently works...) */
    '.algolia-autocomplete .algolia-docsearch-suggestion--text': {
      color: theme.pallete.text.main,
      fontSize: theme.typography.sizes.text,
    },

    /* Highlighted text */
    '.algolia-autocomplete .algolia-docsearch-suggestion--highlight': {
      color: 'inherit !important',
      background: `${theme.pallete.highlight} !important`,
      boxShadow: 'none !important',
    },
  } as React.CSSProperties,
})
