import React from 'react';
import './App.css';
//COMPONENTS
// import Home from "./pages/Home";
// import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login/";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routesHome} from "./routes";
import {connect} from 'react-redux'
import AdminLogin from "./components/AdminLogin";
import {logIn} from "./services/Login/action";
import DashBoard from "./components/DashBoard";

class App extends React.Component {
    componentDidMount() {
        let auth = JSON.parse(localStorage.getItem('auth'))
        if (auth) {
            this.props.postUser(auth)
        }
    }

    render() {
        const {authenticate, userType} = this.props
        let showMenuHome = (routes) => {
            if (routes && routes.length > 0) {
                return routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />)
                })
            }
        }
        return (
            <BrowserRouter>
                <div className="App">
                    {/*<React.Fragment>*/}
                        <Switch>
                            {showMenuHome(routesHome)}
                            <Route path={'/login/:param'} exact={false} component={Login}/>
                            <Route path={'/admin'} exact={true} component={AdminLogin}/>
                            <Route path={'/dash-board'} exact={false} component={DashBoard}/>
                            {/*<Route path={'/admin/dashboard'} exact={false}*/}
                            {/*       component={authenticate && userType === 'QuanTri' ? DashBoard : NotFound}*/}
                            {/*       render={(props) => {*/}
                            {/*           return <NavigationBar {...props}/>*/}
                            {/*       }}*/}
                            {/*/>*/}
                            <Route component={NotFound}/>
                        </Switch>
                    {/*</React.Fragment>*/}

                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticate: state.AdminLoginReducer.authenticate,
        userType: state.AdminLoginReducer.userType
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postUser: (data) => {
            dispatch(logIn(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
