import * as actionTypes from './actionTypes'
export const actRegister = (user) => {
    return {
        type:actionTypes.ACT_REGISTER,
        data:user
    }
}