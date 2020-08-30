import {combineReducers} from 'redux'
import appReducer from './app/appReducer'
import countryReducer from './country/countryReducer'
import globalReducer from './global/globalReducer'

const rootReducer = combineReducers({
  app: appReducer,
  country: countryReducer,
  global: globalReducer
})

export default rootReducer
