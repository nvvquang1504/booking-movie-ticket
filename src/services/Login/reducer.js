import {LOG_IN, LOG_OUT} from "../Login/actionTypes";
import jwtDecode from 'jwt-decode';

let initialState = {
    userDetail: {},
    user: {},
    authenticate: false,
    userType: '',
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            localStorage.setItem('auth', JSON.stringify(action.data));
            return {
                userDetail: action.data,
                user: jwtDecode(action.data.accessToken),
                authenticate: true,
                userType: action.data.maLoaiNguoiDung
            }
        case LOG_OUT:
            localStorage.removeItem('auth')
            return {
                userDetail: {},
                user: {},
                authenticate: false,
                userType: ''
            }
        default:
            return {...state}
    }
}
export default LoginReducer