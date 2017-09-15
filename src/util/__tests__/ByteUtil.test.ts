import ByteUtil from '../ByteUtil'

describe('ByteUtil', () => {
    it('deve retornar 0 Bytes', function () {
        expect(ByteUtil.formatBytes(0)).toEqual('0 Bytes')
    })
    it('deve formatar sem casas decimais', function () {
        const formated = ByteUtil.formatBytes(10000000)
        expect(formated).toEqual('10 MB')
    })
    it('deve formatar com 2 casas decimais', function () {
        const formated = ByteUtil.formatBytes(10230000)
        expect(formated).toEqual('10.23 MB')
    })
    it('deve formatar com 4 casas decimais', function () {
        const formated = ByteUtil.formatBytes(10235100, 4)
        expect(formated).toEqual('10.2351 MB')
    })
})
