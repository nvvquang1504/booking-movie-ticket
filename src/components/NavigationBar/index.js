import React, {Component} from 'react';
import LogResis from "./LogResis";
import Logout from "./Logout";
import {connect} from 'react-redux'
import {Link,} from "react-router-dom";
import * as Scroll from 'react-scroll'
import {NavBar} from "./styled";
import chillIcon from '../../assets/images/Icon/chill-icon-0.jpg'
import {withRouter} from 'react-router-dom'
const ScrollLink = Scroll.Link;
let scrollSpy = Scroll.scrollSpy;

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myNavBar = React.createRef()
    }
    handleHomeOnclick = () => {
        if (this.props.location.pathname === '/home' || this.props.location.pathname === '/') {
            window.scrollTo(0, 0)
        } else {
            this.props.history.push('/home')
            window.scrollTo(0, 0)
        }
    }
    handleOnclick = () => {
        this.props.history.push('/home')
    }
    render() {
        const {location} = this.props;
        const {authenticate} = this.props
        scrollSpy.update()
        return (
            <NavBar ref={this.myNavBar} style={{width: "100%"}}>
                <nav id='navbar'
                     className={`navbar navbar-expand bg-dark navbar-dark my-0 ${((location.pathname === '/home' || location.pathname === '/') && authenticate !== '') ? 'fixed-top' : null}`}>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div style={{
                        position: "relative"
                    }} className="collapse navbar-collapse " id="collapsibleNavbar">
                        <div style={{
                            position: "absolute",
                            left: 0,
                        }}>
                            <Link onClick={this.handleHomeOnclick}
                                  to="/home">
                                <div style={{
                                    backgroundImage: `url(${chillIcon})`,
                                    backgroundSize: 'cover',
                                    width: "45px",
                                    height: "45px",
                                    cursor: 'pointer'
                                }}
                                >
                                </div>
                            </Link>
                        </div>
                        <ul style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center"
                        }} className="navbar-nav">
                            <li className="nav-item">
                                {
                                    (((location.pathname === '/home' || location.pathname === '/') && authenticate !== ''))
                                        ?
                                        <ScrollLink to="list-movie"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-60}
                                                    className='nav-others nav-link'
                                                    activeClass='some-active-class'
                                        >Danh sách phim
                                        </ScrollLink>
                                        :
                                        <a
                                            className="nav-others nav-link"
                                            href='#list-movie'
                                            onClick={this.handleOnclick}
                                        >Danh sách phim
                                        </a>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    (location.pathname === '/home' && authenticate !== null) || (location.pathname === '/' && authenticate !== null)
                                        ?
                                        <ScrollLink to="cinema-cluster"
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-60}
                                                    className='nav-others nav-link'
                                                    activeClass='some-active-class'
                                        >Cụm rạp
                                        </ScrollLink>
                                        :
                                        <a
                                            onClick={this.handleOnclick}
                                            className="nav-others nav-link"
                                            href='#cinema-cluster'
                                        >
                                            Cụm rạp
                                        </a>
                                }
                            </li>
                        </ul>
                        <div style={{
                            position: "absolute",
                            right: 0,
                        }}>
                            {authenticate ? <Logout/> : <LogResis/>}
                        </div>
                    </div>
                </nav>
            </NavBar>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authenticate: state.LoginReducer.authenticate,
        userType: state.LoginReducer.userType
    }
}
export default withRouter((connect(mapStateToProps, null)(NavigationBar)));