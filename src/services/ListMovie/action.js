import * as ActionTypes from './actionTypes'
import Axios from "axios";

export const getListMovieAPI = () => {
    return (dispatch) => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
            headers: {
                withCredentials: true
            }
        })
            .then((response) => {

                dispatch(
                    {
                        type: ActionTypes.GET_LIST_MOVIE,
                        data: response.data,
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

