import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link, withRouter} from "react-router-dom";
import {Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {StyledLogResis} from "./styled";

class LogResis extends Component {
    render() {
        const {maLichChieu} = this.props.filmDetail
        return (
            <StyledLogResis>
                <div style={{display:'flex'}} className="align-items-center justify-content-between">
                    <Link
                        to={this.props.history.location.pathname.indexOf('/booking-seat') !== -1 ? `/login/${maLichChieu}` : `/login/${'a'}`}>
                        <Button style={{display: 'flex', alignItems: 'center'}}
                                type="primary"
                                shape="round"
                                icon={<UserOutlined/>}
                                size={"large"}
                        >Đăng nhập
                        </Button>
                    </Link>
                    <Link to='/register'>
                        <Button className='ml-2' type="primary" shape="round" size={"large"}>
                            Đăng ký
                        </Button>
                    </Link>
                </div>
            </StyledLogResis>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filmDetail: state.BookingSeatReducer.thongTinPhim,
    }
}
export default withRouter(connect(mapStateToProps, null)(LogResis));