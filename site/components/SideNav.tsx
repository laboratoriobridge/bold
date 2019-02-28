import { Icon, Theme, useStyles } from 'bridge-react/lib'

export const SideNav = () => {
  const { classes } = useStyles(createStyles)
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <a>
            <Icon icon='chatFilled' /> About
          </a>
        </li>
        <li className={classes.li}>
          <a>
            <Icon icon='rocket' /> Getting Started
          </a>
        </li>
        <li className={classes.li}>
          <a>
            <Icon icon='penTool' /> Design Guidelines
          </a>
        </li>
        <li className={classes.li}>
          <a>
            <Icon icon='bricksFilled' /> Components
          </a>
        </li>
        <li className={classes.li}>
          <a>
            <Icon icon='archiveFilled' /> Resources
          </a>
        </li>
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
  } as React.CSSProperties,
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  li: {
    a: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      color: theme.pallete.text.main,
      textDecoration: 'none',
      padding: '1rem 0 1rem 2rem',
      transition: 'all 0.2s ease',

      '&:hover': {
        background: theme.pallete.primary.c90,
      },
    },

    svg: {
      marginRight: '1.5rem',
    },
  } as React.CSSProperties,
})
