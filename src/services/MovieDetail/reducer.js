import * as ActionTypes from './actionTypes'
let initialState = {
    movieDetail:{},
}

const MovieDetailReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionTypes.GET_DETAIL_MOVIE:
            state.movieDetail = action.data;
            return{...state}
        default:
            return {...state}
    }
}
export default MovieDetailReducer