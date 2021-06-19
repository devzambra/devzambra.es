import { formatRelative, isAfter, isEqual, parse } from 'date-fns'
import { es } from 'date-fns/locale'

export const convertDate = (value) => {
  let format = 'dd-MM-yyyy'

  if (value.split(' ').length > 1) {
    format = 'dd-MM-yyyy HH:mm:ss'
  }
  return formatRelative(parse(value, format, new Date()), new Date(), { locale: es })
}

export const getReadingTime = (value) => {
  const minutes = Math.ceil(value / 60000)
  const text = minutes > 1 ? 'minutos de lectura' : 'minuto de lectura'
  return `${minutes} ${text}`
}

export const compareDates = (value1, value2) => {
  const date1 = new Date(convertToUSFormat(value1))
  const date2 = new Date(convertToUSFormat(value2))
  return isEqual(date1, date2) ? 0 : isAfter(date2, date1) ? 1 : -1
}

const convertToUSFormat = (date) => {
  const dateArr = date.split(' ')
  let result = dateArr[0].split('-').reverse().join('-')
  if (dateArr.length > 1) {
    result += ` ${dateArr[1]}`
  }
  return result
}
