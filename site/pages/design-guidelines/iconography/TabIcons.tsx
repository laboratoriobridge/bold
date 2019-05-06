import { Tabs, TabLink, useStyles, Theme } from '../../../../lib'
import { MemoryRouter, Switch, Route, Redirect } from 'react-router'
import Library from './Library'
import Usage from './Usage'

function TabIcons() {
  const { classes } = useStyles(createStyles)
  return (
    <>
      <MemoryRouter initialEntries={['/Library']} initialIndex={1}>
        <Tabs>
          <div className={classes.divider}>
            <TabLink to='/Library'>Library</TabLink>
            <TabLink to='/Usage'>Usage</TabLink>
          </div>
        </Tabs>

        <Switch>
          <Route path={`/Library`} component={Library} />
          <Route path={`/Usage`} component={Usage} />
          <Redirect exact from={`/`} to={`/Library`} />
        </Switch>
      </MemoryRouter>
    </>
  )
}

export default TabIcons

function createStyles(theme: Theme) {
  return {
    divider: {
      borderBottom: `1px solid ${theme.pallete.divider}`,
    },
  }
}
