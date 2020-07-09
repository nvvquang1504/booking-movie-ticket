

import {LOG_IN, LOG_OUT} from "./actionTypes";

export const logOut = () => {
    return {
        type:LOG_OUT,
    }
}
export const logIn = (data) => {
    return {
        type:LOG_IN,
        data:data
    }
}


