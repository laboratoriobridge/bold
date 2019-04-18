import { Cell, Grid, HFlow, Link, Theme, useStyles } from '../../lib'

import { PageContainer } from './PageContainer'

export function AppFooter() {
  const { classes } = useStyles(createStyles)

  return (
    <footer className={classes.footer}>
      <PageContainer>
        <Grid>
          <Cell xs={6}>
            <HFlow>
              <Link href='https://ufsc.br/' target='_blank' style={{ display: 'inline-block' }}>
                <img src='/static/image/logo-ufsc.svg' />
              </Link>
              <Link href='https://bridge.ufsc.br/' target='_blank' style={{ display: 'inline-block' }}>
                <img src='/static/image/logo-bridge.svg' />
              </Link>
            </HFlow>
          </Cell>
          <Cell xs={6}>
            <HFlow justifyContent='flex-end'>
              <Link
                href='https://www.linkedin.com/company/laborat%C3%B3rio-bridge/'
                target='_blank'
                style={{ display: 'inline-block' }}
              >
                <img src='/static/image/icn-linkedin.svg' />
              </Link>
              <Link
                href='https://www.facebook.com/laboratoriobridge/'
                target='_blank'
                style={{ display: 'inline-block' }}
              >
                <img src='/static/image/icn-facebook.svg' />
              </Link>
              <Link href='https://github.com/laboratoriobridge' target='_blank' style={{ display: 'inline-block' }}>
                <img src='/static/image/icn-github.svg' />
              </Link>
            </HFlow>
          </Cell>
        </Grid>
        <hr />
        <p>Laboratório Bridge. 2019.</p>
      </PageContainer>
    </footer>
  )
}

export const createStyles = (theme: Theme) => ({
  footer: {
    background: theme.pallete.surface.background,
    padding: '1.5rem 3rem',
  },
})
