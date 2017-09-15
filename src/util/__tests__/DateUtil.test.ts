import DateUtil from '../DateUtil'
import '../../__tests__/test.defaults'

describe('DateUtil', () => {
    it('limiteMinimoIdade', function () {
        expect(DateUtil.limiteMinimoIdade().format(DateUtil.CLIENT_FORMAT)).toEqual('09/08/1887')
    })
    it('asClientFormat', function () {
        expect(DateUtil.asClientFormat('1990-10-10')).toEqual('10/10/1990')
    })
    it('asServerFormat', function () {
        expect(DateUtil.asServerFormat('10/10/1990')).toEqual('1990-10-10')
    })
    it('getIdadePorExtenso', function () {
        expect(DateUtil.getIdadePorExtenso('2016-05-10')).toEqual('1 ano')
        expect(DateUtil.getIdadePorExtenso('2015-08-20')).toEqual('1 ano')
        expect(DateUtil.getIdadePorExtenso('2015-08-9')).toEqual('2 anos')
    })
    it('getIdadePorExtenso mais de um ano', function () {
        expect(DateUtil.getIdadePorExtenso('1990-10-10')).toEqual('26 anos')
    })
    it('getPeriodBetweenDates data de início maior que a data final', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-11-10', '10:01', '1990-10-10', '10:02')).toEqual('')
    })
    it('getPeriodBetweenDates mesma data, porém hora ou minuto menor', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-10-10', '09:01')).toEqual('')
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-10-10', '10:00')).toEqual('')
    })
    it('getPeriodBetweenDates minuto', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-10-10', '10:02')).toEqual('1 minuto')
    })
    it('getPeriodBetweenDates sem diferença em minutos', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:00', '1990-10-11', '09:00')).toEqual('23 horas')
    })
    it('getPeriodBetweenDates hora', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-10-10', '11:02')).toEqual('1 hora 1 minuto')
    })
    it('getPeriodBetweenDates horas e minutos', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-10-11', '09:00')).toEqual('22 horas 59 minutos')
    })
    it('getPeriodBetweenDates dia', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-10-12', '09:03')).toEqual('1 dia 23 horas 2 minutos')
    })
    it('getPeriodBetweenDates mais de um dia', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-11-05', '09:03')).toEqual('24 dias 23 horas 2 minutos')
    })
    it('getPeriodBetweenDates mes', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1990-11-15', '09:03')).toEqual('1 mes 4 dias 23 horas 2 minutos')
    })
    it('getPeriodBetweenDates mais de um mes', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1991-02-15', '09:03')).toEqual('4 meses 4 dias 23 horas 2 minutos')
    })
    it('getPeriodBetweenDates ano', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1991-10-15', '09:03')).toEqual('1 ano 4 dias 23 horas 2 minutos')
    })
    it('getPeriodBetweenDates mais de um ano', function () {
        expect(DateUtil.getPeriodBetweenDates('1990-10-10', '10:01', '1992-10-15', '09:03')).toEqual('2 anos 4 dias 23 horas 2 minutos')
    })
})
