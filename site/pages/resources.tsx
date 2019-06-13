import React from 'react'

import { Button, Cell, Grid, Icon, Link, Text, VFlow } from '../../lib'

function Resources() {
  const renderButtonSketch = (props: any) => <a {...props} href='/static/Bold-1.0.sketch' />

  return (
    <VFlow>
      <h1>Resources</h1>
      <Text component='p' fontSize={1}>
        Here you can download some of the design resources and tools we consider will help you to build products
        experiences.
      </Text>

      <Grid>
        <Cell>
          <img width={96} src='/static/image/diamond.svg' alt='Sketch icon' />
        </Cell>
        <Cell>
          <VFlow vSpacing={0.5}>
            <div>
              <Text component='p' fontWeight='bold' fontSize={1}>
                Bold Design Kit
              </Text>
              <Text component='p' fontSize={1}>
                Sketch symbols, visual styles and patterns.
              </Text>
            </div>

            <Button
              kind='primary'
              skin='outline'
              size='small'
              style={{ textDecoration: 'none' }}
              render={renderButtonSketch}
            >
              <Icon icon='download' style={{ marginRight: '0.5rem' }} />
              Download Sketch file
            </Button>
          </VFlow>
        </Cell>
      </Grid>

      <Grid>
        <Cell>
          <img width={96} src='/static/image/figma.svg' alt='Sketch icon' />
        </Cell>
        <Cell>
          <VFlow vSpacing={0.5}>
            <div>
              <Text component='p' fontWeight='bold' fontSize={1}>
                Bold Design Kit
              </Text>
              <Text component='p' fontSize={1}>
                Figma symbols, visual styles and patterns.
              </Text>
            </div>

            <Link href='https://www.figma.com/file/TE9FUDtlgVQ4FWlAPtTagxQU/Bold-Design-System' fontSize={1}>
              Access Figma file
            </Link>
          </VFlow>
        </Cell>
      </Grid>
    </VFlow>
  )
}

export default Resources
