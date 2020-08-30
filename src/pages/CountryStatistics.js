import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {
  filteredCountryByDate,
  updateCountry,
  updateCountryDateFrom,
  updateCountryCase,
  fetchCurrentCountry
} from '../redux/country/countryActions'

import Loader from '../components/UI/Loader'
import SelectControl from '../components/UI/SelectControl'
import PercentAreaChart from '../components/PercentAreaChart/PercentAreaChart'
import Grid from '@material-ui/core/Grid'
import DatePickerControl from '../components/UI/DatePickerControl'
import SimpleAreaChart from '../components/SimpleAreaChart/SimpleAreaChart'
import {CASE_TYPES, DEFAULT_COUNTRY} from '../constants'
import {caseFilter} from '../utils/case.filter'
import {withRouter} from 'react-router-dom'
import dateFilter from '../utils/date.filter'
import {getCaseItems} from '../utils/helpers.functions'

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  controlsPanel: {
    margin: '1rem auto',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    margin: '1.5rem auto 0',
    textAlign: 'center'
  }
}))

const CountryStatistics = ({history, match}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const loading = useSelector(({app}) => app.loading)

  const dateFromRange = useSelector(({country}) => country.dateFromRange)
  const dateFrom = useSelector(({country}) => country.dateFrom)

  const countriesList = useSelector(({country}) => country.countriesList)
  const currentCountry = useSelector(({country}) => country.currentCountry)
  const countryData = useSelector(({country}) => country.data)
  const filteredData = useSelector(({country}) => country.filteredData)

  const caseType = useSelector(({country}) => country.caseType)

  useEffect(() => {
    dispatch(fetchCurrentCountry(DEFAULT_COUNTRY))
  }, [])

  useEffect(() => {
    // eslint-disable-next-line
    const queryString = `${match.path}?from=${dateFilter(dateFrom)}&country=${currentCountry}&case=${caseType}`.trim()
    history.push(queryString)
  }, [dateFrom, currentCountry, caseType])

  const onCountryChange = ({target}) => {
    dispatch(updateCountry(target.value))
  }

  const onDateFromChange = (date) => {
    dispatch(filteredCountryByDate(countryData, date))
    dispatch(updateCountryDateFrom(date))
  }

  const onCaseChange = ({target}) => {
    dispatch(updateCountryCase(target.value))
  }

  return (
    <Box m={1} className={classes.box}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Covid-19 Statistics By Country And Status After Date
      </Typography>

      {loading || !countryData.length
        ? <Loader/>
        :
        <>
          <Grid container className={classes.controlsPanel}>
            <SelectControl
              value={currentCountry}
              items={countriesList}
              label={'Countries'}
              handleChange={onCountryChange}
            />
            <DatePickerControl
              changeHandle={onDateFromChange}
              value={dateFrom}
              minDate={dateFromRange.min}
              maxDate={dateFromRange.max}
              label={'Date from'}
            />
            <SelectControl
              value={caseType}
              items={getCaseItems()}
              label={'Cases'}
              handleChange={onCaseChange}
            />
          </Grid>
          {
            caseType !== CASE_TYPES.default
            ? <SimpleAreaChart
              data={caseFilter(filteredData, caseType)}
              caseType={caseType}
            />
            : <PercentAreaChart data={filteredData}/>
          }
        </>
      }
    </Box>
  )
}

export default withRouter(CountryStatistics)
