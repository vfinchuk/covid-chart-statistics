import {CASE_TYPES} from '../constants'
import dateFilter from './date.filter'

export function caseFilter(data, caseType) {
  if (caseType === CASE_TYPES.default) {
    return
  }

  return Object.keys(data)
      .map((item, index) => ({
        date: dateFilter(data[index].date),
        [caseType]: data[index][caseType]
      }))
}
