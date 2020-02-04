import { Button, Icon, lightTheme, TextInput, Theme, Tooltip, useStyles } from 'bold-ui'
import { changeLocale, useIntl } from 'gatsby-plugin-intl'
import React, { useEffect } from 'react'

import { BoldLogo } from './BoldLogo'
import { LocaleLink } from './LocaleLink'
import { SIDE_NAV_WIDTH } from './SideNav'

const docsearch = typeof window !== 'undefined' ? require('docsearch.js') : null

interface AppHeaderProps {
  navOpen: boolean
  switchTheme(): void
  onNavChange(open: boolean): void
}

export function AppHeader(props: AppHeaderProps) {
  const { navOpen, onNavChange, switchTheme } = props
  const { css, classes, theme } = useStyles(createStyles)
  const intl = useIntl()

  const changeNavState = (open: boolean) => () => onNavChange(open)

  useEffect(() => {
    if (docsearch) {
      docsearch({
        apiKey: '4bd4039d7ff74e34ef26aff9f4a45f34',
        indexName: 'bold_',
        inputSelector: '#search-input',
        algoliaOptions: { facetFilters: [`language:${intl.locale}`] },
        autocompleteOptions: {
          debug: false,
          hint: false,
          appendTo: '#search-wrapper',
        },
      })
    }
  }, [intl.locale])

  const handleLocaleChange = (lang: string) => () => {
    changeLocale(lang)
  }

  return (
    <header className={classes.header}>
      <div className={classes.menuIcon}>
        <Button
          skin='ghost'
          size='small'
          onClick={changeNavState(!navOpen)}
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
        >
          {!navOpen ? <Icon icon='hamburguerMenu' /> : <Icon icon='timesDefault' />}
        </Button>
      </div>

      <div className={classes.logo}>
        <LocaleLink to='/' style={{ display: 'inline-block' }}>
          <BoldLogo aria-label='Bold Logo' style={{ height: '2.5rem' }} />
        </LocaleLink>
      </div>

      <div className={classes.search} id='search-wrapper'>
        <TextInput
          id='search-input'
          style={classes.searchInput}
          type='search'
          icon='zoomOutline'
          iconPosition='left'
          placeholder={intl.formatMessage({ id: 'search-placeholder' })}
        />
      </div>

      <div className={classes.toolbar}>
        <Tooltip text='English'>
          <Button
            skin='ghost'
            size='small'
            style={css(intl.locale === 'en' && classes.toolbarActive)}
            onClick={handleLocaleChange('en')}
          >
            EN
          </Button>
        </Tooltip>
        <Tooltip text='Português'>
          <Button
            skin='ghost'
            size='small'
            style={css(intl.locale === 'pt' && classes.toolbarActive)}
            onClick={handleLocaleChange('pt')}
          >
            PT
          </Button>
        </Tooltip>
        <div className={classes.toolbarSeparator} />
        <Tooltip
          text={
            theme === lightTheme
              ? intl.formatMessage({ id: 'switch-to-dark' })
              : intl.formatMessage({ id: 'switch-to-light' })
          }
        >
          <Button skin='ghost' size='small' onClick={switchTheme}>
            <Icon icon='lightbulbFilled' />
          </Button>
        </Tooltip>
      </div>
    </header>
  )
}

export const APP_HEADER_HEIGHT = 76

const createStyles = (theme: Theme) => ({
  header: {
    background: theme.pallete.surface.main,
    padding: '1rem 2rem',
    boxShadow: theme.shadows.outer[60],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 20,
    position: 'fixed',
    width: '100%',
  } as React.CSSProperties,
  menuIcon: {
    display: 'none',

    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  logo: {
    borderRight: `1px solid ${theme.pallete.divider}`,
    width: `calc(${SIDE_NAV_WIDTH}px - 2rem)`,
    padding: '0 1rem 0 2.75rem',

    [theme.breakpoints.down('md')]: {
      borderRight: 'none',
      width: 'auto',
      paddingRight: 0,
      paddingLeft: 0,
    },
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: '0 0.25rem',
    },
  },
  toolbarSeparator: {
    background: theme.pallete.divider,
    width: '1px',
    height: '2rem',
  },
  toolbarActive: {
    border: `1px solid ${theme.pallete.divider}`,
    background: theme.pallete.gray.c90,
  },
  search: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    flex: 1,
    padding: '0 1rem',
    position: 'relative',

    '.algolia-autocomplete [class^="ds-dataset"]': {
      background: theme.pallete.surface.main,
      borderColor: theme.pallete.divider,
      '&::before': {
        background: theme.pallete.surface.main,
      },
    },

    '.algolia-autocomplete': {
      left: '1rem !important',
      top: '0.5rem',
    },

    /* Main dropdown wrapper */
    '.algolia-autocomplete .ds-dropdown-menu': {
      fontSize: '1em',
      fontWeight: 'normal',
      '&::before': {
        background: theme.pallete.surface.main,
      },
    },

    /* Link element */
    '.algolia-autocomplete .algolia-docsearch-suggestion': {
      fontWeight: 'normal',
      textDecoration: 'none',
      background: 'transparent',
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
