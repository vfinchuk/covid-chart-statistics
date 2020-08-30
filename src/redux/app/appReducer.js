import {
  HIDE_ALERT,
  HIDE_LOADING,
  SHOW_ALERT,
  SHOW_LOADING,
  TOGGLE_NAVIGATION
} from './appTypes'

const initialState = {
  navTrigger: false,
  navLinks: [
    {name: 'World', url: '/'},
    {name: 'By country', url: '/country'},
    {name: 'About', url: '/about'}
  ],
  loading: false,
  alert: null
}

const handlers = {
  [TOGGLE_NAVIGATION]: state => ({...state, navTrigger: !state.navTrigger}),
  [SHOW_LOADING]: state => ({...state, loading: true}),
  [HIDE_LOADING]: state => ({...state, loading: false}),
  [SHOW_ALERT]: (state, {payload}) => ({...state, alert: payload}),
  [HIDE_ALERT]: state => ({...state, alert: null}),
  DEFAULT: state => state
}

const appReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

export default appReducer
