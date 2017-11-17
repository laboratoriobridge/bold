import * as React from 'react'
import { TextField } from './TextField'

export const normalize = value => value.replace(/[^A-Za-z\dáéíóúÁÉÍÓÚçÇâêôÂÊÔõãÕÃäöüÄÖÜàÀ ]/g, '')

export interface AlfaNumberFieldProps {
    name: string
}

export class AlfaNumberField extends React.Component<AlfaNumberFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={normalize} />
        )
    }

}
