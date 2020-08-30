import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Loader from '../components/UI/Loader'
import SelectControl from '../components/UI/SelectControl'
import PercentAreaChart from '../components/PercentAreaChart/PercentAreaChart'
import Grid from '@material-ui/core/Grid'
import DatePickerControl from '../components/UI/DatePickerControl'
import SimpleAreaChart from '../components/SimpleAreaChart/SimpleAreaChart'
import {CASE_TYPES} from '../constants'
import {caseFilter} from '../utils/case.filter'
import {getCaseItems} from '../utils/helpers.functions'
import {
  selectDateFrom,
  selectDateTo,
  selectCase,
  filteredGlobalByDate,
  fetchGlobalStatistics
} from '../redux/global/globalActions'
import dateFilter from '../utils/date.filter'
import {withRouter} from 'react-router-dom'

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

const GlobalStatistics = ({history, match}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const loading = useSelector(({app}) => app.loading)

  const data = useSelector(({global}) => global.data)
  const filteredData = useSelector(({global}) => global.filteredData)

  const dateFromRange = useSelector(({global}) => global.dateFromRange)
  const dateToRange = useSelector(({global}) => global.dateToRange)
  const dateFrom = useSelector(({global}) => global.dateFrom)
  const dateTo = useSelector(({global}) => global.dateTo)

  const caseType = useSelector(({global}) => global.caseType)


  useEffect(() => {
    dispatch(fetchGlobalStatistics())
  }, [])

  useEffect(() => {
    // eslint-disable-next-line
    const queryString = `${match.path}?from=${dateFilter(dateFrom)}&to=${dateFilter(dateTo)}&case=${caseType}`.trim()
    history.push(queryString)
  }, [dateFrom, dateTo, caseType])

  const onDateFromChange = (from) => {
    dispatch(selectDateFrom(from))
    dispatch(filteredGlobalByDate(data, from, dateTo))
  }

  const onDateToChange = (to) => {
    dispatch(selectDateTo(to))
    dispatch(filteredGlobalByDate(data, dateFrom, to))
  }

  const onCaseChange = ({target}) => {
    dispatch(selectCase(target.value))
  }

  return (
    <Box m={1} className={classes.box}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Covid-19 Global World WIP Statistics
      </Typography>

      {loading || !data.length
        ? <Loader/>
        :
        <>
          <Grid container className={classes.controlsPanel}>
            <DatePickerControl
              changeHandle={onDateFromChange}
              value={dateFrom}
              minDate={dateFromRange.min}
              maxDate={dateFromRange.max}
              label={'Date from'}
            />
            <DatePickerControl
              changeHandle={onDateToChange}
              value={dateTo}
              minDate={dateToRange.min}
              maxDate={dateToRange.max}
              label={'Date to'}
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

export default withRouter(GlobalStatistics)
