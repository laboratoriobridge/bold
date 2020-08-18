// adaptation from https://github.com/text-mask/text-mask/blob/master/addons/src/createAutoCorrectedDatePipe.js

const maxValueMonth = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const formatOrder = ['yyyy', 'yy', 'mm', 'dd', 'HH', 'MM', 'SS']
export default function createAutoCorrectedDatePipe(dateFormat = 'mm dd yyyy', { minYear = 1, maxYear = 9999 } = {}) {
  const dateFormatArray = dateFormat.split(/[^dmyHMS]+/).sort((a, b) => formatOrder.indexOf(a) - formatOrder.indexOf(b))

  return function (conformedValue) {
    const indexesOfPipedChars = []
    const maxValue = { dd: 31, mm: 12, yy: 99, yyyy: maxYear, HH: 23, MM: 59, SS: 59 }
    const minValue = { dd: 1, mm: 1, yy: 0, yyyy: minYear, HH: 0, MM: 0, SS: 0 }
    const conformedValueArr = conformedValue.split('')

    // TODO:
    // console.log(conformedValue)
    // console.log(dateFormatArray)
    // console.log('conformedValueArr:', conformedValueArr)

    // Check first digit
    dateFormatArray.forEach((format) => {
      const position = dateFormat.indexOf(format)
      const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10)

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position]
        conformedValueArr[position] = 0
        indexesOfPipedChars.push(position)
      }
    })

    // TODO: lembrar de testar com coisa preenchida
    // TODO: lembrar de testar outra mask (e.g. 10-10-2010)
    // TODO:
    // se tiver ano e se ambos valores estiverem preenchidos, então compara valor digitado com current year
    // FIXME: verificar que foi digitado dois caracteres para fazer transformação
    if (dateFormatArray.includes('yyyy')) {
      const thousandPosition = dateFormat.indexOf('yyyy')
      const thousandValue: string = conformedValueArr[thousandPosition]
      const hundredValue: string = conformedValueArr[thousandPosition + 1]
      const yearInTwoDigits: number = parseInt(thousandValue + hundredValue, 10)
      if (!Number.isNaN(yearInTwoDigits)) {
        const currentYearInTwoDigits: number = new Date().getFullYear() - 2000 // only works until 2100 :$
        let first: string = '1' // TODO: rename
        let second: string = '9' // TODO: rename
        if (yearInTwoDigits <= currentYearInTwoDigits) {
          first = '2'
          second = '0'
        }
        // TODO: como melhorar essa insanidade
        conformedValueArr[thousandPosition] = first
        conformedValueArr[thousandPosition + 1] = second
        conformedValueArr[thousandPosition + 2] = thousandValue
        conformedValueArr[thousandPosition + 3] = hundredValue

        for (let i = thousandPosition; i < thousandPosition + 4; i++) {
          indexesOfPipedChars.push(i)
        }
      }
    }

    // Check for invalid date
    let month = 0
    const isInvalid = dateFormatArray.some((format) => {
      const position = dateFormat.indexOf(format)
      const length = format.length
      const textValue = conformedValue.substr(position, length).replace(/\D/g, '')
      const value = parseInt(textValue, 10)
      if (format === 'mm') {
        month = value || 0
      }
      const maxValueForFormat = format === 'dd' ? maxValueMonth[month] : maxValue[format]
      if (format === 'yyyy' && (minYear !== 1 || maxYear !== 9999)) {
        const scopedMaxValue = parseInt(maxValue[format].toString().substring(0, textValue.length), 10)
        const scopedMinValue = parseInt(minValue[format].toString().substring(0, textValue.length), 10)
        return value < scopedMinValue || value > scopedMaxValue
      }
      return value > maxValueForFormat || (textValue.length === length && value < minValue[format])
    })

    if (isInvalid) {
      return false
    }

    return {
      value: conformedValueArr.join(''),
      indexesOfPipedChars,
    }
  }
}
