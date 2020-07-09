import * as ActionTypes from './actionTypes'
let initialState = {
    listMovie:[],
}

const MovieReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionTypes.GET_LIST_MOVIE:
            state.listMovie = action.data;
            return{...state}
        default:
            return {...state}
    }
}
export default MovieReducer