import { formatRelative, parse } from 'date-fns'
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
