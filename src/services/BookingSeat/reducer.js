import * as ActionTypes from './actionTypes'
let initialState = {
    thongTinPhim: {},
    danhSachGhe: [],
    isBookingSuccess: false
}

const BookingSeatReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionTypes.GET_ROOM_TICKET:
            state = action.data
            return {...state}
        case ActionTypes.ACT_SUBMIT_BOOKING:
            if (action.data) {
                state.isBookingSuccess = true
            }
            return {...state}
        default:
            return {...state}
    }
}
export default BookingSeatReducer