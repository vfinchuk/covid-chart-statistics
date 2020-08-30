export default function dateFilter(value) {
  const options = {}

  options.month = 'numeric'
  options.day = 'numeric'
  options.year = '2-digit'

  return new Intl.DateTimeFormat('ua-EN', options).format(new Date(value))
}
