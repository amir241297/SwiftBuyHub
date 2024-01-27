import { SET_MODE } from "./userActionTypes"


const mode = (payload) => {
    return ({ type: SET_MODE, payload })
}

export const setThemeMode = (props) => (dispatch) => {
    dispatch(mode(props))
}