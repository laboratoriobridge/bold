import { mount } from 'enzyme'
import React from 'react'

import { Number } from './Number'

describe('Number', () => {
    it('deve renderizar números inteiros com "." como separador de milhar e sem casas decimais', () => {
        expect(mount(<Number value={1234} />).text()).toEqual('1.234')
        expect(mount(<Number value={1234} minDecimalPlaces={1} />).text()).toEqual('1.234,0')
        expect(mount(<Number value={1234} maxDecimalPlaces={1} />).text()).toEqual('1.234')
        expect(mount(<Number value={0} />).text()).toEqual('0')
    })
    it('deve renderizar números decimais com "." como separador de milhar e "," para separador decimal', () => {
        expect(mount(<Number value={1234.567} />).text()).toEqual('1.234,57')
        expect(mount(<Number value={1234.56789} minDecimalPlaces={5} />).text()).toEqual('1.234,56789')
        expect(mount(<Number value={1234.567} maxDecimalPlaces={5} />).text()).toEqual('1.234,567')
        expect(mount(<Number value={1234.56789} maxDecimalPlaces={1} />).text()).toEqual('1.234,6')
    })
    it('deve tratar falsy values', () => {
        expect(mount(<Number value={null} />).text()).toEqual('')
        expect(mount(<Number value={undefined} />).text()).toEqual('')

        expect(mount(<Number value={null} placeholder='-' />).text()).toEqual('-')
        expect(mount(<Number value={undefined} placeholder='-' />).text()).toEqual('-')
    })
    it('deve abreviar números caso a prop "abbrev" seja passada', () => {
        expect(mount(<Number value={1000} abbrev />).text()).toEqual('1k')
        expect(mount(<Number value={1000000} abbrev />).text()).toEqual('1m')
        expect(mount(<Number value={1300} abbrev />).text()).toEqual('1,3k')
        expect(mount(<Number value={1000} minDecimalPlaces={1} abbrev />).text()).toEqual('1,0k')
        expect(mount(<Number value={1000.23} minDecimalPlaces={1} abbrev />).text()).toEqual('1,0k')
    })
    it('deve trazer o número completo como "title" ao especificar "abbrev"', () => {
        expect(mount(<Number value={1000} abbrev />).find('span').prop('title')).toEqual('1.000')
        expect(mount(<Number value={1000000} abbrev />).find('span').prop('title')).toEqual('1.000.000')
        expect(mount(<Number value={1000.23} abbrev />).find('span').prop('title')).toEqual('1.000,23')
    })
    it('deve permitir prefixos e sufixos', () => {
        expect(mount(<Number value={10.987} prefix='R$ ' />).text()).toEqual('R$ 10,99')
        expect(mount(<Number value={10.987} sufix='!!' />).text()).toEqual('10,99!!')
        expect(mount(<Number value={10.987} prefix='R$ ' sufix='!!' />).text()).toEqual('R$ 10,99!!')

        expect(mount(<Number abbrev value={10.93} prefix='R$ ' sufix='!!' />).text()).toEqual('R$ 10,9!!')
    })
})
