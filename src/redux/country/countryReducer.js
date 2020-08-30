import {
  FETCH_BY_COUNTRY,
  FETCH_COUNTRIES,
  FILTERED_DATA,
  SELECT_CASE,
  SELECT_COUNTRY,
  SELECT_DATE_FROM,
  SELECT_DATE_FROM_RANGE
} from './countryTypes'

const initialState = {
  currentCountry: '',
  caseType: '',
  countriesList: [],
  data: [],
  filteredData: [],
  dateFrom: null,
  dateFromRange: {
    min: null,
    max: null
  }
}

const handlers = {
  [FETCH_COUNTRIES]: (state, {payload}) => (
    {...state, countriesList: payload}
  ),
  [FETCH_BY_COUNTRY]: (state, {payload}) => (
    {...state, data: payload}
  ),
  [SELECT_DATE_FROM_RANGE]: (state, {payload}) => (
    {...state, dateFromRange: {...payload}}
  ),
  [SELECT_DATE_FROM]: (state, {payload}) => (
    {...state, dateFrom: new Date(payload)}
  ),
  [SELECT_COUNTRY]: (state, {payload}) => (
    {...state, currentCountry: payload}
  ),
  [SELECT_CASE]: (state, {payload}) => (
    {...state, caseType: payload}
  ),
  [FILTERED_DATA]: (state, {payload}) => (
    {...state, filteredData: payload}
  ),
  DEFAULT: state => state
}

const countryReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default countryReducer
