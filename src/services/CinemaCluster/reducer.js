import * as ActionTypes from './actionTypes'

let initialState = {
    cinemaClusterInfo: [],
    cinemaInfo:[]
}

const CinemaClusterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CINEMA_CLUSTER_INFO:
            state.cinemaClusterInfo = action.data;
            return {...state}
        case ActionTypes.GET_CINEMA_INFO:
            state.cinemaInfo = action.data;
            return {...state}
        default:
            return {...state}
    }
}
export default CinemaClusterReducer