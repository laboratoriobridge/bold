export default class NumberUtil {

    public static format(valor: number, casasDecimais: number = 2) {
        return new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: casasDecimais }).format(valor)
    }

    public static formatCurrency(valor: number, casasDecimais: number = 2) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: casasDecimais }).format(valor)
    }

}

