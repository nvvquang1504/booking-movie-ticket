import React, {Component} from 'react';
import {connect} from 'react-redux'
import {logOut} from "../../../services/Login/action";
import {Button, Avatar} from "antd";

class Logout extends Component {
    handleOnClick = () => {
        this.props.logout();
    }
    render() {
        return (
            <div>
                <Avatar style={{marginRight: '10px'}} size={40}>U</Avatar>
                <Button onClick={this.handleOnClick} type="danger" size={"large"}>
                    Đăng xuất
                </Button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logOut())
        }
    }
}
export default connect(null, mapDispatchToProps)(Logout);