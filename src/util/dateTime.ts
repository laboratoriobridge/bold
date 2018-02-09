import * as moment from 'moment'

export const formats = {
    date: 'DD/MM/YYYY',
    time: 'HH:mm',
    dateTime: 'DD/MM/YYYY HH:mm',
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
