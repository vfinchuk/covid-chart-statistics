export const COVID_API_URL = 'https://api.covid19api.com'

export const DEFAULT_COUNTRY = 'ukraine'

export const CASE_TYPES = {
  default: 'all',
  confirmed: 'confirmed',
  deaths: 'deaths',
  recovered: 'recovered',
  active: 'active'
}

export const CASE_TYPES_COLORS = {
  confirmed: '#8884d8',
  deaths: '#d32f2f',
  recovered: '#82ca9d',
  active: '#ffc658'
}

export const CHART_OPTIONS = {
  width: 800,
  height: 400,
  offsets: {
    left: 0,
    right: 30,
    top: 30,
    bottom: 0
  },
  tooltip: {
    backgroundColor: '#f1f1f1',
    padding: '0.5rem'
  },
  dataKey: 'date'
}
