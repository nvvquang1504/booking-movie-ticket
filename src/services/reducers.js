import {combineReducers} from "redux";
import MovieReducer from "./ListMovie/reducer";
import MovieDetailReducer from "./MovieDetail/reducer";
import LoginReducer from './Login/reducer'
import CinemaClusterReducer from './CinemaCluster/reducer'
import BookingSeatReducer from "./BookingSeat/reducer";
import AdminLoginReducer from "./AdminLogin/reducer"
import RegisterReducer from "./Register/reducer";
let rootReducer = combineReducers({
    MovieReducer,
    MovieDetailReducer,
    LoginReducer,
    CinemaClusterReducer,
    BookingSeatReducer,
    AdminLoginReducer,
    RegisterReducer
})
export default rootReducer