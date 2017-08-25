import * as moment from 'moment'

export default class DateUtil {
    public static SERVER_FORMAT = 'YYYY-MM-DD'
    public static CLIENT_FORMAT = 'DD/MM/YYYY'

    public static limiteMinimoIdade(): moment.Moment {
        const today: Date = moment().toDate()
        const minAge = new Date(today.getFullYear() - 130, today.getMonth(), today.getDate())
        return moment(minAge)
    }
    public static today(): moment.Moment {
        return moment()
    }

    public static serverMoment(serverDateString: string): moment.Moment {
        return moment(serverDateString, this.SERVER_FORMAT)
    }

    public static asClientFormat(serverDateString: string): string {
        return this.serverMoment(serverDateString).format(this.CLIENT_FORMAT)
    }

    public static asServerFormat(clientDateString: string): string {
        return moment(clientDateString, this.CLIENT_FORMAT).format(this.SERVER_FORMAT)
    }
    /**
     * data no formato YYYY-MM-DD
     * @param data no formato YYYY-MM-DD
     */
    public static getIdadePorExtenso(data: string): string {
        let hoje: Date = this.today().toDate()
        let dataNasc: Date = this.serverMoment(data).toDate()

        let dias: number = hoje.getDate() - dataNasc.getDate()
        let meses: number = hoje.getMonth() - dataNasc.getMonth()
        let anos: number = hoje.getFullYear() - dataNasc.getFullYear()

        if (meses === 0) {
            if (dias < 0) {
                anos--
            }
        } else if (meses < 0) {
            anos--
            meses = 12 + meses
        }

        let idade: string
        if (anos > 1) {
            idade = anos + ' anos'
        } else {
            idade = anos + ' ano'
        }

        return idade
    }

    public static getPeriodBetweenDates(dateStart: string, timeStart, dateEnd: string, timeEnd): string {

        if (dateStart > dateEnd) {
            return ''
        }

        let inicio: Date = moment(dateStart).toDate()
        let final: Date = moment(dateEnd).toDate()

        let timeStartHora = timeStart.split(':')[0]
        let timeStartMin = timeStart.split(':')[1]

        let timeEndHora = timeEnd.split(':')[0]
        let timeEndMin = timeEnd.split(':')[1]

        let dias: number = final.getDate() - inicio.getDate()
        let meses: number = final.getMonth() - inicio.getMonth()
        let anos: number = final.getFullYear() - inicio.getFullYear()

        let horas = timeEndHora - timeStartHora
        let minutos = timeEndMin - timeStartMin


        if (dateStart === dateEnd && (horas < 0 || horas === 0 && minutos <= 0)) {
            return ''
        }

        if (minutos < 0) {
            horas--
            minutos = 60 + minutos
        }

        if (horas < 0) {
            dias--
            horas = 24 + horas
        }

        if (dias < 0) {
            meses--
            dias = 30 + dias
        }
        if (meses < 0) {
            anos--
            meses = 12 + meses
        }

        let idade: string = ''
        if (anos !== 0) {
            if (anos > 1) {
                idade = anos + ' anos '
            } else {
                idade = anos + ' ano '
            }
        }

        if (meses !== 0) {
            if (meses > 1) {
                idade = idade + meses + ' meses '
            } else {
                idade = meses + ' mes '
            }
        }

        if (dias !== 0) {
            if (dias > 1) {
                idade = idade + dias + ' dias '
            } else {
                idade = idade + dias + ' dia '
            }
        }

        if (horas !== 0 && !isNaN(horas)) {
            if (horas > 1) {
                idade = idade + horas + ' horas '
            } else {
                idade = idade + horas + ' hora '
            }
        }

        if (minutos !== 0 && !isNaN(minutos)) {
            if (minutos > 1) {
                idade = idade + minutos + ' minutos'
            } else {
                idade = idade + minutos + ' minuto'
            }
        }
        return idade.trim()
    }
}
