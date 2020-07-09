import * as ActionTypes from './actionTypes'
import Axios from "axios";

//LAY DANH SACH PHONG VE
export const actgetRoomTicketAPI = (roomTicketCode) => {
    return (dispatch) => {
        Axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${roomTicketCode}`
        }).then((response) => {
            dispatch({
                type:ActionTypes.GET_ROOM_TICKET,
                data:response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
//END LAY DANH SACH PHONG VE
//SUBMIT BOOKING
export const actSubmitBooking = (bookingInfo, accessToken) => {
    return (dispatch) => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data: bookingInfo,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((response) => {
            console.log(response.data)
            if (response.data) {
                dispatch({
                    type: ActionTypes.ACT_SUBMIT_BOOKING,
                    data: response.data
                })
            }
        }).catch((error) => {
            console.log(error)
        })
    }
}