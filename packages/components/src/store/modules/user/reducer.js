import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from './constants'
const initialState = {
  loggedIn: false,
  userId: 'sepivotak',
  fullName: ''
}

export default handleActions(
  {
    [LOGIN]: (state = initialState, action) => {
      const p = action.payload
      return {
        loggedIn: true,
        userId: p.userId,
        fullName: p.fullName
      }
    },

    [LOGOUT]: () => {
      return {
        loggedIn: false,
        fullName: ''
      }
    }
  },
  initialState
)