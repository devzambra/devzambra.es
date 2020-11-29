export const convertDate = (value) => {
  return new Date(value).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const getReadingTime = (value) => {
  const minutes = Math.ceil(value / 60000)
  const text = minutes > 1 ? 'minutos de lectura' : 'minuto de lectura'
  return `${minutes} ${text}`
}
