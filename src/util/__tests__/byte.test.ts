import { format } from '../byte'

describe('byte utils', () => {
    describe('format', () => {
        it('deve retornar 0 Bytes', () => {
            expect(format(0)).toEqual('0 Bytes')
        })
        it('deve formatar sem casas decimais', () => {
            const formated = format(10000000)
            expect(formated).toEqual('10 MB')
        })
        it('deve formatar com 2 casas decimais', () => {
            const formated = format(10230000)
            expect(formated).toEqual('10.23 MB')
        })
        it('deve formatar com 4 casas decimais', () => {
            const formated = format(10235100, 4)
            expect(formated).toEqual('10.2351 MB')
        })
    })
})
