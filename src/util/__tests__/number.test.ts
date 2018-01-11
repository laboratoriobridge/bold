import { abbrev, format } from '../number'

describe('number utils', () => {
    it('deve formatar inteiros', () => {
        expect(format(1234)).toEqual('1.234')
        expect(format(1234567)).toEqual('1.234.567')
        expect(format(1234567, 2)).toEqual('1.234.567,00')
    })

    it('deve formatar decimais', () => {
        expect(format(1234.567)).toEqual('1.234,57')
        expect(format(1234.56789, 5)).toEqual('1.234,56789')
        expect(format(1234, 3)).toEqual('1.234,000')
    })

    it('abbrev', () => {
        expect(abbrev(999)).toEqual('999')
        expect(abbrev(1000)).toEqual('1k')
        expect(abbrev(1001)).toEqual('1k')
        expect(abbrev(1011)).toEqual('1k')
        expect(abbrev(1111)).toEqual('1,1k')
        expect(abbrev(10900)).toEqual('10,9k')
        expect(abbrev(100400)).toEqual('100,4k')
        expect(abbrev(1000.23)).toEqual('1k')
        expect(abbrev(100000, 1)).toEqual('100,0k')
        expect(abbrev(100450, 0, 2)).toEqual('100,45k')

        expect(abbrev(1000000)).toEqual('1m')
        expect(abbrev(1000010)).toEqual('1m')
        expect(abbrev(1000100)).toEqual('1m')
        expect(abbrev(1001000)).toEqual('1m')
        expect(abbrev(1010000)).toEqual('1m')
        expect(abbrev(1010000.42)).toEqual('1m')
        expect(abbrev(1100000)).toEqual('1,1m')
        expect(abbrev(1000000, 3)).toEqual('1,000m')
        expect(abbrev(1110000, 0, 2)).toEqual('1,11m')

        expect(abbrev(1000000000)).toEqual('1b')
        expect(abbrev(1100000000)).toEqual('1,1b')
        expect(abbrev(1100000000, 3)).toEqual('1,100b')
        expect(abbrev(1111000000, 0, 2)).toEqual('1,11b')

        expect(abbrev(1000000000000)).toEqual('1t')
        expect(abbrev(1100000000000)).toEqual('1,1t')
        expect(abbrev(1100000000000, 3)).toEqual('1,100t')
        expect(abbrev(1111110000000, 0, 2)).toEqual('1,11t')

        expect(abbrev(1.23)).toEqual('1,2')
        expect(abbrev(1000.5673)).toEqual('1k')
        expect(abbrev(1000000.123213)).toEqual('1m')
    })
})
