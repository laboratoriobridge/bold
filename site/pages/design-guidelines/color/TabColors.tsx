import { Tabs, TabLink, useStyles, Theme } from '../../../../lib'
import { MemoryRouter, Switch, Route, Redirect } from 'react-router'
import Palletes from './Palletes'
import Usage from './Usage'

function TabColors() {
  const { classes } = useStyles(createStyles)
  return (
    <>
      <MemoryRouter initialEntries={['/Palletes']} initialIndex={1}>
        <Tabs>
          <div className={classes.divider}>
            <TabLink to='/Palletes'>Palletes</TabLink>
            <TabLink to='/Usage'>Usage</TabLink>
          </div>
        </Tabs>

        <Switch>
          <Route path={`/Palletes`} component={Palletes} />
          <Route path={`/Usage`} component={Usage} />
          <Redirect exact from={`/`} to={`/Palletes`} />
        </Switch>
      </MemoryRouter>
    </>
  )
}

export default TabColors

function createStyles(theme: Theme) {
  return {
    divider: {
      borderBottom: `1px solid ${theme.pallete.divider}`,
    },
  }
}
