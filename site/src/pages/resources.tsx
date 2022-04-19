import { Cell, Grid, Icon, Link, Text, VFlow } from 'bold-ui'
import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'

import { ButtonLink } from '../components/ButtonLink'
import { ga } from '../components/ga'
import { PageLayout } from '../components/PageLayout'

export default function Resources() {
  const intl = useIntl()

  const handleClickFigma = () => {
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: `Figma`,
    })
  }

  return (
    <PageLayout>
      <VFlow>
        <h1>{intl.formatMessage({ id: 'resources-title' })}</h1>
        <Text component='p' fontSize={1}>
          {intl.formatMessage({ id: 'resources-description' })}
        </Text>

        <Grid>
          <Cell>
            <img width={96} src='/image/figma.svg' alt='Figma icon' />
          </Cell>
          <Cell>
            <VFlow vSpacing={0.5}>
              <div>
                <Text component='p' fontWeight='bold' fontSize={1}>
                  Bold Design Kit
                </Text>
                <Text component='p' fontSize={1}>
                  {intl.formatMessage({ id: 'resources-figma-description' })}
                </Text>
              </div>

              <Link
                href='https://www.figma.com/file/TE9FUDtlgVQ4FWlAPtTagxQU/Bold-Design-System'
                fontSize={1}
                target='_blank'
                onClick={handleClickFigma}
              >
                {intl.formatMessage({ id: 'resources-figma-download' })}
              </Link>
            </VFlow>
          </Cell>
        </Grid>
      </VFlow>
    </PageLayout>
  )
}
