import { MaskType } from '../components/form/input/MaskedInput/MaskedInput'

export const onlyNumbers = (value: string) => value.replace(/[^\d]/g, '')

export const masks: { [key: string]: MaskType } = {
    telefone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
}
