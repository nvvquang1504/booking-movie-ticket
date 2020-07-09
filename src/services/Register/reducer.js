import * as actionTypes from './actionTypes'

let initialState = {
    user: {},
}
const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACT_REGISTER:
            return {
                user: action.data
            }
        default:
            return {...state};
    }
}
export default RegisterReducer;