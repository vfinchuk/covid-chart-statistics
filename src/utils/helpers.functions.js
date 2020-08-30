import {CASE_TYPES} from '../constants'

export function toTimeStamp(value) {
  return new Date(value).getTime()
}

export function storageSetItem(key, value) {
  window.sessionStorage.setItem(key, value)
}

export function storageGetItem(key) {
  return window.sessionStorage.getItem(key)
}

export function storageRemoveItem(key) {
  return window.sessionStorage.removeItem(key)
}

export function getCaseItems() {
  return Object.keys(CASE_TYPES).map(c => ({
    value: CASE_TYPES[c],
    title: CASE_TYPES[c][0].toUpperCase() + CASE_TYPES[c].substring(1)
  }))
}

export function dateToISOString(date) {
  const d = new Date(date)
  d.setUTCHours(0, 0, 0, 0)
  return d.toISOString()
}

export function calculateDaysData(date, daysAmount, operation = 'add') {
  date = new Date(date)
  const copy = new Date(Number(date))
  if (operation === 'add') {
    copy.setDate(date.getDate() + daysAmount)
  } else if (operation === 'sub') {
    copy.setDate(date.getDate() - daysAmount)
  }
  return copy
}
