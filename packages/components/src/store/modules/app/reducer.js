import { handleActions } from 'redux-actions'
import { SET_LOADING } from './constants'

const initialState = {
    loading: false
}

export default handleActions(
    {
        [SET_LOADING]: (state = initialState, action) => {
            return {
                loading: action.payload
            }
        }
    },
    initialState
)