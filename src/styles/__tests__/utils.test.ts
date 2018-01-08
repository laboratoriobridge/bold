import { makeOptionClasses } from '../utils'

describe(`${makeOptionClasses.name}`, () => {
    it('deve criar um objeto contendo sufix + opt como chave e { prop: opt } como valor', () => {
        const r = makeOptionClasses('weight__', 'fontWeight', [400, 600, 'bold'])

        expect(r).toEqual({
            'weight__400': {
                fontWeight: 400,
            },
            'weight__600': {
                fontWeight: 600,
            },
            'weight__bold': {
                fontWeight: 'bold',
            },
        })
    })
})
