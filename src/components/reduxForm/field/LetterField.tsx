import * as React from 'react'
import { TextField } from './TextField/TextField'

export const normalize = value => value.replace(/[^A-Za-záéíóúÁÉÍÓÚçÇâêôÂÊÔõãÕÃäöüÄÖÜàÀ' ]/g, '')

export interface LetterFieldProps {
    name: string
}

export class LetterField extends React.Component<LetterFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={normalize} />
        )
    }

}
