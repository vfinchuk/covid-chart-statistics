import {
  FETCH_DATA,
  SELECT_CASE,
  SET_DATE_FROM_RANGE,
  SET_DATE_TO_RANGE,
  SELECT_DATE_FROM,
  SELECT_DATE_TO,
  FILTERED_DATA
} from './globalTypes'
import {
  calculateDaysData,
  dateToISOString,
  storageGetItem,
  storageSetItem,
  toTimeStamp
} from '../../utils/helpers.functions'
import {hideLoading, showAlert, showLoading} from '../app/appActions'
import {CASE_TYPES, COVID_API_URL} from '../../constants'

const STORAGE_KEYS = {
  dateRange: 'globalDatesRange',
  dateFrom: 'globalDateFrom',
  dateTo: 'globalDateTo',
  case: 'globalCase'
}

export const fetchGlobalStatistics = () => {
  return async dispatch => {
    dispatch(showLoading())
    let globalData

    try {
      await fetch(`${COVID_API_URL}/world`)
          .then(response => response.json())
          .then((data) => {
            const startDate = calculateDaysData(new Date, data.length, 'sub')

            globalData = data
                .sort((a, b) => {
                  if (a.TotalConfirmed < b.TotalConfirmed) {
                    return -1
                  }
                })
                .map((
                    {
                      TotalRecovered, TotalDeaths, TotalConfirmed,
                      NewConfirmed, NewDeaths, NewRecovered
                    }
                    , index) => ({
                  recovered: TotalRecovered,
                  deaths: TotalDeaths,
                  confirmed: TotalConfirmed,
                  active: (NewConfirmed + NewDeaths + NewRecovered),
                  date: dateToISOString(calculateDaysData(
                      startDate,
                      index,
                      'add'
                  ))
                }))
          })

      dispatch({
        type: FETCH_DATA,
        payload: globalData
      })

      dispatch(filteredGlobalByDate(
          globalData,
          storageGetItem(STORAGE_KEYS.dateFrom),
          storageGetItem(STORAGE_KEYS.dateTo))
      )

      dispatch(hideLoading())
    } catch (e) {
      console.log(e)
      dispatch(showAlert(`Something went wrong with data fetching...`, 8000))
    }
  }
}

export const selectDateFrom = (from) => {
  return dispatch => {
    storageSetItem(STORAGE_KEYS.dateFrom, from)
    dispatch({
      type: SELECT_DATE_FROM,
      payload: from
    })
  }
}

export const selectDateTo = (to) => {
  return dispatch => {
    storageSetItem(STORAGE_KEYS.dateTo, to)
    dispatch({
      type: SELECT_DATE_TO,
      payload: to
    })
  }
}

export const selectCase = (caseType) => {
  return dispatch => {
    storageSetItem(STORAGE_KEYS.case, caseType)
    dispatch({
      type: SELECT_CASE,
      payload: caseType
    })
  }
}

export const filteredGlobalByDate = (data, dateFrom, dateTo) => {
  return dispatch => {
    let filteredData = data

    dispatch(fetchDateFrom(data[0].date))
    dispatch(fetchDateTo(data[data.length - 1].date))

    if (dateFrom && dateTo) {
      storageSetItem(STORAGE_KEYS.dateFrom, dateToISOString(dateFrom))
      storageSetItem(STORAGE_KEYS.dateTo, dateToISOString(dateTo))

      filteredData = data.filter(item => {
        const dateTS = toTimeStamp(item.date)
        return (
          dateTS >= toTimeStamp(dateFrom)
          && dateTS <= toTimeStamp(dateTo)
        )
      })
    }

    const minDate = data[0].date
    const maxDate = data[data.length - 1].date

    dispatch(setDateFromRange(
        minDate,
        filteredData[filteredData.length - 1].date)
    )
    dispatch(setDateToRange(
        filteredData[0].date,
        maxDate)
    )

    dispatch(fetchCase(CASE_TYPES.default))
    dispatch({type: FILTERED_DATA, payload: filteredData})
  }
}

const fetchCase = (caseType) => {
  return dispatch => {
    const savedCase = storageGetItem(STORAGE_KEYS.case)

    dispatch({
      type: SELECT_CASE,
      payload: savedCase ? savedCase : caseType
    })
  }
}

const fetchDateTo = (to) => {
  return dispatch => {
    const savedDateTo = storageGetItem(STORAGE_KEYS.dateTo)

    dispatch({
      type: SELECT_DATE_TO,
      payload: savedDateTo ?? to
    })
  }
}

const fetchDateFrom = (from) => {
  return dispatch => {
    const savedDateFrom = storageGetItem(STORAGE_KEYS.dateFrom)
    dispatch({
      type: SELECT_DATE_FROM,
      payload: savedDateFrom ?? from
    })
  }
}

const setDateFromRange = (minDate, maxDate) => ({
  type: SET_DATE_FROM_RANGE,
  payload: {min: minDate, max: maxDate}
})

const setDateToRange = (minDate, maxDate) => ({
  type: SET_DATE_TO_RANGE,
  payload: {min: minDate, max: maxDate}
})
