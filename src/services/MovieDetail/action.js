import * as ActionTypes from './actionTypes'
import Axios from "axios";

export const getDetailMovieAPI = (id) => {
    return (dispatch) => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        })
            .then((response) => {
                dispatch(getDetailMovie(response.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getDetailMovie = (data) => {
    return {
        type: ActionTypes.GET_DETAIL_MOVIE,
        data: data,
    }
}
