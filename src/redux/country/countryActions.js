import {
  FETCH_BY_COUNTRY,
  FETCH_COUNTRIES,
  FILTERED_DATA,
  SELECT_CASE,
  SELECT_COUNTRY,
  SELECT_DATE_FROM,
  SELECT_DATE_FROM_RANGE
} from './countryTypes'
import {hideLoading, showAlert, showLoading} from '../app/appActions'
import {CASE_TYPES, COVID_API_URL, DEFAULT_COUNTRY} from '../../constants'
import {
  storageGetItem, storageRemoveItem,
  storageSetItem,
  toTimeStamp
} from '../../utils/helpers.functions'

const STORAGE_KEYS = {
  countries: 'countries',
  country: 'currentCountry',
  dateFrom: 'countryDateFrom',
  case: 'countryCase'
}

export const fetchCountries = () => {
  return async dispatch => {
    try {
      let countries
      const savedCountries = window.sessionStorage.getItem(
          STORAGE_KEYS.countries
      )

      if (savedCountries) {
        countries = JSON.parse(savedCountries)
        dispatch({type: FETCH_COUNTRIES, payload: countries})
        return
      }

      await fetch(`${COVID_API_URL}/countries`)
          .then(response => {
            return response.json()
          })
          .then((data) => {
            countries = data
                .map(country => ({
                  title: country.Country,
                  value: country.Slug
                }))
                .sort((a, b) => a.value.localeCompare(b.value))
          })

      window.sessionStorage.setItem(
          STORAGE_KEYS.countries, JSON.stringify(countries)
      )

      dispatch({type: FETCH_COUNTRIES, payload: countries})
    } catch (e) {
      dispatch(showAlert('Something went wrong...'))
    }
  }
}

export const fetchCurrentCountry = (country) => {
  return dispatch => {
    const savedCountry = storageGetItem(STORAGE_KEYS.country)
    const currentCountry = savedCountry ?? country

    dispatch({
      type: SELECT_COUNTRY,
      payload: currentCountry
    })

    storageSetItem(STORAGE_KEYS.country, currentCountry)
    dispatch(fetchCountryCase(CASE_TYPES.default))
    dispatch(fetchCountryData(currentCountry))
  }
}

export const filteredCountryByDate = (data, dateFrom) => {
  return dispatch => {
    const filteredData = data.filter(item => {
      const dateTS = toTimeStamp(item.date)
      return (
        dateTS >= toTimeStamp(dateFrom)
        && dateTS <= toTimeStamp(data[data.length - 1].date)
      )
    })

    dispatch({type: FILTERED_DATA, payload: filteredData})

    dispatch({
      type: SELECT_DATE_FROM_RANGE, payload: {
        min: data[0].date,
        max: filteredData[filteredData.length - 1].date
      }
    })
  }
}

export const updateCountryDateFrom = (dateFrom) => {
  return dispatch => {
    storageSetItem(STORAGE_KEYS.dateFrom, dateFrom)
    dispatch({
      type: SELECT_DATE_FROM,
      payload: dateFrom
    })
  }
}

export const updateCountry = (country) => {
  return dispatch => {
    storageSetItem(STORAGE_KEYS.country, country)
    dispatch({
      type: SELECT_COUNTRY,
      payload: country
    })
    storageRemoveItem(STORAGE_KEYS.dateFrom)

    dispatch(fetchCurrentCountry(country))
  }
}

export const updateCountryCase = (caseValue) => {
  return dispatch => {
    storageSetItem(STORAGE_KEYS.case, caseValue)
    dispatch({
      type: SELECT_CASE,
      payload: caseValue
    })
  }
}

const fetchCountryData = (country) => {
  return async dispatch => {
    dispatch(showLoading())
    let byCountry
    try {
      await fetch(`${COVID_API_URL}/dayone/country/${country}`)
          .then(response => {
            return response.json()
          })
          .then((data) => {
            byCountry = data.map(item => ({
              active: item.Active,
              recovered: item.Recovered,
              deaths: item.Deaths,
              confirmed: item.Confirmed,
              date: item.Date
            }))
          })

      dispatch({type: FETCH_BY_COUNTRY, payload: byCountry})
      dispatch({type: FILTERED_DATA, payload: byCountry})

      dispatch(fetchCountries())
      dispatch(setRangeDate(byCountry))
      dispatch(fetchCountryDateFrom(byCountry[0].date))
      dispatch(hideLoading())
    } catch (e) {
      dispatch(
          showAlert(`Something went wrong with [${country}] data...`, 8000)
      )
      dispatch(byCountryErrorHandler())
    }
  }
}

const fetchCountryCase = (caseType) => {
  return dispatch => {
    const savedCase = storageGetItem(STORAGE_KEYS.case)

    dispatch({
      type: SELECT_CASE,
      payload: savedCase ?? caseType
    })
  }
}

const fetchCountryDateFrom = (dateFrom) => {
  return dispatch => {
    const savedDateFrom = storageGetItem(STORAGE_KEYS.dateFrom)

    dispatch({
      type: SELECT_DATE_FROM,
      payload: savedDateFrom ?? dateFrom
    })
  }
}

const setRangeDate = (data) => {
  return dispatch => {
    const minDate = data[0].date
    const maxDate = data[data.length - 1].date

    dispatch({
      type: SELECT_DATE_FROM_RANGE,
      payload: {min: minDate, max: maxDate}})
  }
}

const byCountryErrorHandler = () => {
  return dispatch => {
    dispatch(updateCountry(DEFAULT_COUNTRY))
    dispatch(fetchCountryData(DEFAULT_COUNTRY))
  }
}
