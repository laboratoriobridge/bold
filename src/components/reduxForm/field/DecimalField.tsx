import * as React from 'react'
import { TextField } from './TextField/TextField'

const isCleared = (value, pre, pos) => {
    const numericValue = parseFloat(value)

    if (numericValue !== 0) {
        return false
    }

    const decimalIndex = value.indexOf('.')
    return decimalIndex === 0 || (decimalIndex >= 0 && value.substring(decimalIndex + 1).length < pos)
}

/**
 * Normaliza um valor decimal para o número informado de casas decimais.
 *
 * @param {string} value Valor a ser formatado
 * @param {number} pre Número de casas decimais antes da vírgula
 * @param {number} pos Número de casas decimais após a vírtula
 */
export const normalize = (value, pre: number, pos: number) => {
    if (!value) { return value }

    // Limpeza do valor caso houve uma deleção de um caracter e o valor numérico é 0
    if (isCleared(value, pre, pos)) {
        return ''
    }

    // Remoção dos caracteres não numéricos
    let normalValue = value.replace(/[^\d]/g, '')

    // Se não for preenchido um caracter numérico, limpa o valor
    if (normalValue === '') {
        return ''
    }

    // Remoção dos zeros à esquerda
    while (normalValue.charAt(0) === '0') {
        normalValue = normalValue.substring(1)
    }

    // Trunca caracteres a mais
    if (normalValue.length > pre + pos) {
        normalValue = normalValue.substring(0, pre + pos)
    }

    // Completa o valor com ao menos `pos` zeros
    while (normalValue.length < pos) {
        normalValue = '0' + normalValue
    }

    // Adiciona o separador decimal após `pos` caracteres (da direita pra esquerda)
    normalValue = normalValue.substring(0, normalValue.length - pos) + '.' + normalValue.substring(normalValue.length - pos, normalValue.length)

    // Adiciona um '0' na esquerda, antes do separador decimal
    if (normalValue.charAt(0) === '.') {
        normalValue = '0' + normalValue
    }

    // Remove o separador decimal, caso não haja números após ele
    if (normalValue.charAt(normalValue.length - 1) === '.') {
        normalValue = normalValue.substring(0, normalValue.length - 1)
    }

    return normalValue
}

export const parse = (value) => {
    if (!value) { return value }
    return value.replace(',', '.')
}

export const format = (value) => {
    if (typeof value !== 'string') { return '' }
    return value.replace('.', ',')
}

export interface DecimalFieldProps {
    name: string

    /**
     * Número de casas decimais antes da vírgula
     */
    pre: number

    /**
     * Número de casas decimais após a vírgula
     */
    pos: number
}

export class DecimalField extends React.Component<DecimalFieldProps> {

    render() {
        return (
            <TextField {...this.props} normalize={this.normalize.bind(this)} format={format} parse={parse} />
        )
    }


    normalize(value) {
        return normalize(value, this.props.pre, this.props.pos)
    }

}
