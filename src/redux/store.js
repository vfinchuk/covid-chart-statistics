import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './rootReducer'
// import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk,
            // logger
        )
    )
)

export default store
