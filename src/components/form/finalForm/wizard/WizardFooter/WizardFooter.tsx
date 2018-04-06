import * as React from 'react'

import { Button } from '../../../../../components/elements/button/Button/Button'
import { withStyles, WithStylesProps } from '../../../../../styles'

export interface WizardFooterProps extends WithStylesProps {
    isFirstStep: boolean
    isLastStep: boolean
    onSubmit(): any
    onPrevious(): any
}

@withStyles
export class WizardFooter extends React.Component<WizardFooterProps> {
    render() {
        const { css, theme, isFirstStep, isLastStep, onPrevious, onSubmit } = this.props
        const styles = {
            container: {
                borderTop: '1px solid ' + theme.color.gray90,
                padding: '1rem 0',
                margin: '2rem 0',
                textAlign: 'right',
                '& > *:not(:last-child)': {
                    marginRight: '1rem',
                },
            },
        }

        return (
            <div className={css(styles.container)}>
                {!isFirstStep &&
                    <Button label='Voltar' onClick={onPrevious} />
                }
                {!isLastStep &&
                    <Button type='primary' label='Avançar' onClick={onSubmit} />
                }
                {isLastStep &&
                    <Button type='primary' label='Salvar' onClick={onSubmit} />
                }
            </div>
        )
    }
}
