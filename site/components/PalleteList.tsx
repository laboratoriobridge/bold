import { Cell, Grid } from '../../lib'
import * as colors from '../../lib/styles/colors'

import { Pallete } from './Pallete'

export const PalleteList = () => {
  return (
    <>
      <Grid justifyContent='flex-start' wrap>
        {Object.entries(colors).map(([name, pallete]) => (
          <Cell key={name}>
            <Pallete title={capitalize(name)} pallete={pallete} />
          </Cell>
        ))}
      </Grid>
    </>
  )
}

const capitalize = (str: string) => str.charAt(0).toLocaleUpperCase() + str.substr(1)
