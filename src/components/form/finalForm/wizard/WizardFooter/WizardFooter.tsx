import React, { CSSProperties } from 'react'

import { Button } from '../../../../../components/elements/Button'
import { Theme, useStyles } from '../../../../../styles'

export interface WizardFooterProps {
  isFirstStep: boolean
  isLastStep: boolean
  onSubmit(): any
  onPrevious(): any
}

export function WizardFooter(props: WizardFooterProps) {
  const { isFirstStep, isLastStep, onPrevious, onSubmit } = props
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.container}>
      {!isFirstStep && <Button onClick={onPrevious}>Voltar</Button>}
      {!isLastStep && (
        <Button kind='primary' onClick={onSubmit}>
          Avançar
        </Button>
      )}
      {isLastStep && (
        <Button kind='primary' onClick={onSubmit}>
          Salvar
        </Button>
      )}
    </div>
  )
}

export const createStyles = (theme: Theme) => ({
  container: {
    borderTop: '1px solid ' + theme.pallete.divider,
    padding: '1rem 0',
    margin: '2rem 0',
    textAlign: 'right',
    '& > *:not(:last-of-type)': {
      marginRight: '1rem',
    },
  } as CSSProperties,
})
