import * as actionTypes from './actionTypes'
import jwtDecode from 'jwt-decode';

let initialState = {
    userDetail:{},
    user: {},
    authenticate: false,
    userType: '',
}
const AdminLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACT_ADMIN_LOGIN:
            localStorage.setItem('authAdmin', JSON.stringify(action.data));
            console.log(action.data)
            return {
                userDetail:action.data,
                user: jwtDecode(action.data.accessToken),
                authenticate: true,
                userType: action.data.maLoaiNguoiDung
            }
        default:
            return {...state}
    }
}
export default AdminLoginReducer;