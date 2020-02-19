import * as types from './constants'
import { actions } from '../'

export const login = (username, password, onSuccess) => {
    return dispatch => {
        dispatch(actions.app.loading())

        setTimeout(() => {
            if (password === 'secret') {
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        userId: username,
                        fullName: 'Clark Kent'
                    }
                })
                onSuccess()
            } else {
                alert('Login failed. Please try again.');
            }

            dispatch(actions.app.loading(false))
        }, 1000)
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}