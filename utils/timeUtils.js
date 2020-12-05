import { formatRelative, parse } from 'date-fns'
import { es } from 'date-fns/locale'

export const convertDate = (value) => {
  return formatRelative(parse(value, 'dd-MM-yyyy', new Date()), new Date(), { locale: es })
}

export const getReadingTime = (value) => {
  const minutes = Math.ceil(value / 60000)
  const text = minutes > 1 ? 'minutos de lectura' : 'minuto de lectura'
  return `${minutes} ${text}`
}
