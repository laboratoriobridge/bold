/**
 * Formata um valor numérico para sua representação utilizando o número de casas decimais informadas.
 *
 * @param value Valor a ser formatado
 * @param minimumFractionDigits Número mínimo de casas decimais.
 * @param maximumFractionDigits Número máximo de casas decimais.
 * @return O valor numérico formatado utilizando o separador decimal do locale especificado.
 */
export function format(value: number, minimumFractionDigits: number = 0, maximumFractionDigits: number = 2) {
    if (minimumFractionDigits > maximumFractionDigits) {
        maximumFractionDigits = minimumFractionDigits
    }

    return new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(value)
}

/**
 * Abrevia um número para sua representação compacta. Ex.: 1.000.000 é abreviado para '1m'.
 *
 * @param value Valor a ser abreviado.
 * @param minimumFractionDigits Número mínimo de casas decimais utilizado no valor abreviado.
 * @param maximumFractionDigits Número máximo de casas decimais utilizado no valor abreviado.
 * @return O valor abreviado.
 */
export function abbrev(value: number, minimumFractionDigits: number = 0, maximumFractionDigits: number = 1) {
    if (!value) {
        return value
    }

    if (value >= 1e12) {
        return format(value / 1e12, minimumFractionDigits, maximumFractionDigits) + 't'
    }

    if (value >= 1e9) {
        return format(value / 1e9, minimumFractionDigits, maximumFractionDigits) + 'b'
    }

    if (value >= 1e6) {
        return format(value / 1e6, minimumFractionDigits, maximumFractionDigits) + 'm'
    }

    if (value >= 1e3) {
        return format(value / 1e3, minimumFractionDigits, maximumFractionDigits) + 'k'
    }

    return format(value, minimumFractionDigits, maximumFractionDigits)
}
