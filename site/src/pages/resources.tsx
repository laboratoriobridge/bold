import { Button, Cell, Grid, Icon, Link, Text, VFlow } from 'bold-ui'
import React from 'react'

import { ga } from '../components/ga'
import { PageLayout } from '../components/PageLayout'

function Resources() {
  const renderButtonSketch = (props: any) => <a {...props} href='/Bold-1.0.sketch' />
  const renderButtonSketchData = (props: any) => <a {...props} href='/Sketch-Data-Suplies(PT-BR).zip' />

  const handleClickSketch = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `Sketch`,
    })
  }

  const handleClickFigma = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `Figma`,
    })
  }
  const handleClickSketchData = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `SketchData`,
    })
  }

  return (
    <PageLayout>
      <VFlow>
        <h1>Resources</h1>
        <Text component='p' fontSize={1}>
          Here you can download some of the design resources and tools we consider will help you to build products
          experiences.
        </Text>

        <Grid>
          <Cell>
            <img width={96} src='/image/diamond.svg' alt='Sketch icon' />
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
                onClick={handleClickSketch}
              >
                <Icon icon='download' style={{ marginRight: '0.5rem' }} />
                Download Sketch file
              </Button>
            </VFlow>
          </Cell>
        </Grid>

        <Grid>
          <Cell>
            <img width={96} src='/image/figma.svg' alt='Sketch icon' />
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

              <Link
                href='https://www.figma.com/file/TE9FUDtlgVQ4FWlAPtTagxQU/Bold-Design-System'
                fontSize={1}
                target='_blank'
                onClick={handleClickFigma}
              >
                Access Figma file
              </Link>
            </VFlow>
          </Cell>
        </Grid>
        <Grid>
          <Cell>
            <VFlow vSpacing={0.5}>
              <Text component='p' fontWeight='bold' fontSize={1}>
                Sketch's Data Suplies
              </Text>
              <Text component='p' fontSize={1}>
                With Sketch’s Data feature you can quickly add real text data to your designs and update them, in an
                instant. We’re sharing the text files we use on our prototypes (in PT-BR). They include dates,
                addresses, female names, male names, social security number (CPF), emails, gender, phone numbers, among
                others.
              </Text>
              <Button
                kind='primary'
                skin='outline'
                size='small'
                style={{ textDecoration: 'none' }}
                render={renderButtonSketchData}
                onClick={handleClickSketchData}
              >
                <Icon icon='download' style={{ marginRight: '0.5rem' }} />
                Download Sketch's Data Suplies
              </Button>
            </VFlow>
          </Cell>
        </Grid>
      </VFlow>
    </PageLayout>
  )
}

export default Resources
