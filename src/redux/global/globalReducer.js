import {
  FETCH_DATA,
  SELECT_CASE,
  SET_DATE_FROM_RANGE,
  SET_DATE_TO_RANGE,
  SELECT_DATE_FROM,
  SELECT_DATE_TO,
  FILTERED_DATA
} from './globalTypes'

const initialState = {
  caseType: '',
  data: [],
  filteredData: [],
  dateFrom: null,
  dateTo: null,
  dateFromRange: {
    min: null,
    max: null
  },
  dateToRange: {
    min: null,
    max: null
  }
}

const handlers = {
  [FETCH_DATA]: (state, {payload}) => (
    {...state, data: payload}
  ),
  [FILTERED_DATA]: (state, {payload}) => (
    {...state, filteredData: payload}
  ),
  [SELECT_CASE]: (state, {payload}) => (
    {...state, caseType: payload}
  ),
  [SELECT_DATE_FROM]: (state, {payload}) => (
    {...state, dateFrom: payload}
  ),
  [SELECT_DATE_TO]: (state, {payload}) => (
    {...state, dateTo: payload}
  ),
  [SET_DATE_FROM_RANGE]: (state, {payload}) => (
    {...state, dateFromRange: {...payload}}
  ),
  [SET_DATE_TO_RANGE]: (state, {payload}) => (
    {...state, dateToRange: {...payload}}
  ),
  DEFAULT: state => state
}

const globalReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default globalReducer
