import {
  HIDE_ALERT,
  HIDE_LOADING,
  SHOW_ALERT,
  SHOW_LOADING,
  TOGGLE_NAVIGATION
} from './appTypes'

export const showLoading = () => ({type: SHOW_LOADING})
export const hideLoading = () => ({type: HIDE_LOADING})

export const toggleNavigation = () => ({type: TOGGLE_NAVIGATION})

export const showAlert = (text, timeout = 3000) => {
  return dispatch => {
    dispatch({type: SHOW_ALERT, payload: text})

    setTimeout(() => {
      dispatch({type: HIDE_ALERT})
    }, timeout)
  }
}
