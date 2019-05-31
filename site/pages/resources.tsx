import React from 'react'

import { Button, Cell, Grid, Icon, Text, VFlow } from '../../lib'

function Resources() {
  const renderButton = (props: any) => <a {...props} href='/static/Bold-1.0.sketch' />

  return (
    <>
      <h1>Resources</h1>
      <p>
        Here you can download some of the design resources and tools we consider will help you to build products
        experiences.
      </p>

      <Grid>
        <Cell>
          <img width={96} src='/static/image/diamond.svg' alt='Sketch icon' />
        </Cell>
        <Cell>
          <VFlow vSpacing={0.5}>
            <div>
              <Text tag='p' fontWeight='bold' fontSize={1}>
                Bold Design Kit
              </Text>
              <Text tag='p' fontSize={1}>
                Sketch symbols, visual styles and patterns.
              </Text>
            </div>

            <Button kind='primary' skin='outline' size='small' style={{ textDecoration: 'none' }} render={renderButton}>
              <Icon icon='download' style={{ marginRight: '0.5rem' }} />
              Download Sketch file
            </Button>
          </VFlow>
        </Cell>
      </Grid>
    </>
  )
}

export default Resources
