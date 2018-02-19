import * as moment from 'moment'

import 'moment/locale/pt-br'

moment.locale('pt-BR')

export const formats = {
    date: 'DD/MM/YYYY',
    time: 'HH:mm',
    dateTime: 'DD/MM/YYYY HH:mm',
    serverDate: 'YYYY-MM-DD',
}

const hasTime = (value: any) => {
    return typeof value === 'string' && value.indexOf('T') >= 0
}

export const formatDateOrDateTime = (value: string) => {
    if (hasTime(value)) {
        return moment(value).format(formats.dateTime)
    } else {
        return moment(value).format(formats.date)
    }
}
