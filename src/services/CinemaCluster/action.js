import * as ActionTypes from './actionTypes'
import Axios from "axios";

export const getCinemaClusterInfoAPI = () => {
    return (dispatch) => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        })
            .then((response) => {
                dispatch(
                    {
                        type: ActionTypes.GET_CINEMA_CLUSTER_INFO,
                        data: response.data,
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
export const getCinemaInfoAPI = (maHeThongRap) => {
    return (dispatch) => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        }).then((response) => {
            dispatch({
                type: ActionTypes.GET_CINEMA_INFO,
                data: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}

