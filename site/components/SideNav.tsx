import { Icon, Icons, Omit, Text, Theme, useStyles } from 'bridge-react/lib'

import ActiveLink from './ActiveLink'

interface PageLink {
  href?: string
  title: React.ReactNode
  icon: Icons
  children?: Array<Omit<PageLink, 'icon' | 'children'>>
}

const pages: PageLink[] = [
  { href: '/about', title: 'About', icon: 'chatFilled' },
  { href: '/getting-started', title: 'Getting Started', icon: 'rocket' },
  {
    title: 'Design Guidelines',
    icon: 'penTool',
    href: '/design-guidelines',
    children: [
      { href: '/design-guidelines/accessibility', title: 'Accessibility' },
      { href: '/design-guidelines/color', title: 'Color' },
      { href: '/design-guidelines/grid', title: 'Grid' },
      { href: '/design-guidelines/iconography', title: 'Iconography' },
      { href: '/design-guidelines/illustrations', title: 'Illustrations' },
      { href: '/design-guidelines/typography', title: 'Typography' },
    ],
  },
  { href: '/components', title: 'Components', icon: 'bricksFilled' },
  { href: '/resources', title: 'Resources', icon: 'archiveFilled' },
]

export const SideNav = () => {
  const { classes } = useStyles(createStyles)

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {pages.map(link => (
          <li key={link.href}>
            <ActiveLink href={link.href} activeClassName='active'>
              <a className={classes.link}>
                <Icon icon={link.icon} className={classes.icon} />
                <Text style={classes.title}>{link.title}</Text>
                {link.children && <Icon icon='angleDown' className={classes.iconDropdown} />}
              </a>
            </ActiveLink>

            {link.children && (
              <ul className={classes.sublist}>
                {link.children.map(sub => (
                  <li key={sub.href}>
                    <ActiveLink href={sub.href} activeClassName='active'>
                      <a className={classes.sublink}>{sub.title}</a>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const createStyles = (theme: Theme) => ({
  nav: {
    background: theme.pallete.surface.main,
    width: 267,
    boxShadow: theme.shadows.outer[40],
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 0',
    position: 'relative',
    zIndex: 1,

    svg: {
      fill: 'currentColor',
    },
  } as React.CSSProperties,
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: theme.pallete.text.main,
    textDecoration: 'none',
    padding: '1rem 0 1rem 2rem',
    transition: 'background 0.2s ease',
    '&:hover': {
      background: theme.pallete.primary.c90,
    },
    '&.active': {
      color: theme.pallete.primary.main,
      borderRight: `4px solid ${theme.pallete.primary.main}`,
    },
  } as React.CSSProperties,
  title: {
    flex: 1,
  },
  icon: {
    fontSize: '24px',
    marginRight: '1.5rem',
  },
  sublist: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  sublink: {
    fontWeight: 'normal',
    fontSize: 13,
    padding: '0.5rem 0 0.5rem 5rem',
    display: 'flex',
    alignItems: 'center',
    color: theme.pallete.text.main,
    textDecoration: 'none',
    transition: 'background 0.2s ease',
    '&:hover': {
      background: theme.pallete.primary.c90,
    },
    '&.active': {
      color: theme.pallete.primary.main,
      fontWeight: 'bold',
    },
  } as React.CSSProperties,
  iconDropdown: {
    fontSize: '24px',
    marginRight: '1rem',
  } as React.CSSProperties,
})
