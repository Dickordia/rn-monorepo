import * as types from './constants'

export const loading = (yes = true) => {
    return {
        type: types.SET_LOADING,
        payload: yes
    }
}