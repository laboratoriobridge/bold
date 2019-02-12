import * as React from 'react'

import { Button } from '../../../../../components/elements/Button'
import { Styles, withStyles, WithStylesProps } from '../../../../../styles'

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
        const styles: Styles = {
            container: {
                borderTop: '1px solid ' + theme.pallete.divider,
                padding: '1rem 0',
                margin: '2rem 0',
                textAlign: 'right',
                '& > *:not(:last-of-type)': {
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
