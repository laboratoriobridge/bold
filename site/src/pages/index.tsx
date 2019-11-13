import { keyframes } from '@emotion/core'
import { Cell, Grid, HFlow, Icon, Text, TextProps, Theme, useStyles, VFlow } from 'bold-ui'
import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'

import { ButtonLink } from '../components/ButtonLink'
import { PageLayout } from '../components/PageLayout'

export default () => {
  const { classes } = useStyles(createStyles)
  const intl = useIntl()

  return (
    <PageLayout container={false}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            <AnimatedTitle>bold</AnimatedTitle> <span style={{ display: 'inline-block' }}>design system</span>
          </h1>

          <hr className={classes.divider} />

          <VFlow vSpacing={3}>
            <VFlow>
              <h2 className={classes.subtitle}>{intl.formatMessage({ id: 'home-welcome' })}</h2>

              <ButtonLink
                to='/getting-started'
                kind='primary'
                skin='outline'
                size='medium'
                style={{ textDecoration: 'none' }}
              >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                {intl.formatMessage({ id: 'home-getting-started' })}
              </ButtonLink>
            </VFlow>

            <Grid wrap>
              <Cell xs={12} md={4}>
                <HFlow alignItems='center' hSpacing={0.5}>
                  <Icon icon='arrowRight' fill='primary' />
                  <h3 className={classes.infoTitle}>{intl.formatMessage({ id: 'home-aria-title' })}</h3>
                </HFlow>
                <Text component='p' style={classes.info}>
                  {intl.formatMessage({ id: 'home-aria-description' })}
                </Text>
              </Cell>
              <Cell xs={12} md={4}>
                <HFlow alignItems='center' hSpacing={0.5}>
                  <Icon icon='arrowRight' fill='primary' />
                  <h3 className={classes.infoTitle}>{intl.formatMessage({ id: 'home-opensource-title' })}</h3>
                </HFlow>
                <Text component='p' style={classes.info}>
                  {intl.formatMessage({ id: 'home-opensource-description' })}
                </Text>
              </Cell>
              <Cell xs={12} md={4}>
                <HFlow alignItems='center' hSpacing={0.5}>
                  <Icon icon='arrowRight' fill='primary' />
                  <h3 className={classes.infoTitle}>{intl.formatMessage({ id: 'home-customizable-title' })}</h3>
                </HFlow>
                <Text component='p' style={classes.info}>
                  {intl.formatMessage({ id: 'home-customizable-description' })}
                </Text>
              </Cell>
            </Grid>
          </VFlow>
        </div>
      </div>
    </PageLayout>
  )
}

function AnimatedTitle(props: TextProps) {
  const shine = keyframes({
    to: {
      backgroundPosition: '200% center',
    },
  })
  const { classes } = useStyles(createStyles, shine)

  return <Text style={classes.animatedTitle} {...props} />
}

const createStyles = (theme: Theme, shine = '') => ({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  container: {
    padding: '48px 80px',
    maxWidth: 1056,
    [theme.breakpoints.down('sm')]: {
      padding: 40,
    },
  } as React.CSSProperties,
  title: {
    fontWeight: 'normal',
    fontSize: 56,
    lineHeight: '108px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      lineHeight: '72px',
    },
  } as React.CSSProperties,
  subtitle: {
    fontSize: 24,
  } as React.CSSProperties,
  animatedTitle: {
    fontSize: 132,
    lineHeight: 1,
    fontWeight: 'bold',
    background: 'linear-gradient(80deg, #007AF0 20%, #00B5FF 40%, #00D2F4 60%, #007AF0 80%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundSize: '200% auto',
    animation: `${shine} 2s linear infinite`,
  } as React.CSSProperties,
  divider: {
    width: 100,
    marginBottom: '4rem',
    marginTop: '2rem',
  },
  info: {
    marginLeft: 32,
    marginTop: 8,
    fontSize: '1rem',
  },
  infoTitle: {
    fontSize: '1.5rem',
  },
})
