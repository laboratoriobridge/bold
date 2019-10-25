import { keyframes } from '@emotion/core'
import { Button, Cell, Grid, HFlow, Icon, Text, TextProps, Theme, useStyles, VFlow } from 'bold-ui'
import GatsbyLink from 'gatsby-link'
import React from 'react'

import { PageLayout } from '../components/PageLayout'

export default () => {
  const { classes } = useStyles(createStyles)
  const renderButtonGettingStarted = (props: any) => <GatsbyLink {...props} to='/getting-started' />

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
              <h2 className={classes.subtitle}>Bem vindo ao Bold, o design system open source do bridge</h2>

              <Button
                render={renderButtonGettingStarted}
                kind='primary'
                skin='outline'
                size='medium'
                style={{ textDecoration: 'none' }}
              >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                Começando
              </Button>
            </VFlow>

            <Grid wrap>
              <Cell xs={12} md={4}>
                <HFlow alignItems='center' hSpacing={0.5}>
                  <Icon icon='arrowRight' fill='primary' />
                  <h3 className={classes.infoTitle}>Acessível</h3>
                </HFlow>
                <Text component='p' style={classes.info}>
                  Os componentes do Bold foram construídos seguindo as especificações da WCAG no nível AA, para que você
                  possa construir produtos inclusivos para aprimorar a experiência do usuário.
                </Text>
              </Cell>
              <Cell xs={12} md={4}>
                <HFlow alignItems='center' hSpacing={0.5}>
                  <Icon icon='arrowRight' fill='primary' />
                  <h3 className={classes.infoTitle}>Open source</h3>
                </HFlow>
                <Text component='p' style={classes.info}>
                  O Bold é um projeto open source, portanto se sinta livre para contribuir, abrir issues se você
                  encontrar problemas ou implementar novas funcionalidades. Encontre mais informações no GitHub.
                </Text>
              </Cell>
              <Cell xs={12} md={4}>
                <HFlow alignItems='center' hSpacing={0.5}>
                  <Icon icon='arrowRight' fill='primary' />
                  <h3 className={classes.infoTitle}>Customizável</h3>
                </HFlow>
                <Text component='p' style={classes.info}>
                  Por default, o Bold exporta os temas Light e Dark, mas você pode criar um tema customizável e usar
                  qualquer paleta que se adequar ao seu projeto.
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
