import { Cell, Grid } from 'bold-ui'
import * as colors from 'bold-ui/styles/colors'
import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'

import { Pallete } from './Pallete'

export const PalleteList = () => {
  const intl = useIntl()
  return (
    <>
      <Grid justifyContent='flex-start' wrap>
        {Object.entries(colors).map(([name, pallete]) => (
          <Cell key={name}>
            <Pallete title={intl.formatMessage({ id: `color-name-${name}` })} pallete={pallete} />
          </Cell>
        ))}
      </Grid>
    </>
  )
}
