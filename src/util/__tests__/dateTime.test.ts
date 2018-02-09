import * as moment from 'moment'

import { formatDateOrDateTime } from '../dateTime'

describe('dateTime utils', () => {
    describe('formatDateOrDateTime', () => {
        it('deve formatar Dates e DateTimes de acordo com a presença do Time', () => {
            expect(formatDateOrDateTime('2010-11-01')).toEqual('01/11/2010')
            expect(formatDateOrDateTime('2004-02-12T23:57:23.046')).toEqual('12/02/2004 23:57')
        })
    })
})
