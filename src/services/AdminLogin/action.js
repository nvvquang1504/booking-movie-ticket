import * as actionTypes from './actionTypes'

export const actAdminLogin = (user) => {
    return {
        type:actionTypes.ACT_ADMIN_LOGIN,
        data:user
    }
}