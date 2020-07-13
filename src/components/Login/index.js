import React, {Component} from 'react';
import {StyledLogin} from "./styled";
import {logIn} from "../../services/Login/action";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Spin} from 'antd';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup'
import Axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticate: false,
            isLoadingScreen: false,
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.match.params.param)
        let {authenticate} = prevState;
        if (nextProps.user.authenticate && nextProps.user.userType === 'KhachHang') {
            nextProps.history.push('/');
            if (nextProps.match.params.param !== 'a') {
                nextProps.history.push(`/booking-seat/${nextProps.match.params.param}`);
            }
        }
        if (nextProps.user.authenticate !== authenticate) {
            return {authenticate: nextProps.user.authenticate};
        } else return null;
    }
    componentDidMount() {
        setTimeout(() => {
            let myLoading = document.getElementById('myLoading')
            myLoading.style.display = 'none';
        }, 2000)
    }
    componentWillUnmount() {
        let myLoading = document.getElementById('myLoading')
        myLoading.style.display = 'flex'
    }
    render() {
        console.log(this.state.maLichChieu)
        let {
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange
        } = this.props
        return (
            <StyledLogin style={{height: '100vh'}}>
                <Form className='h-100' onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="d-flex justify-content-center h-100 align-items-center">
                            <Spin
                                spinning={isSubmitting}
                            >
                                <div style={{height: '450px'}} className="card">
                                    <div className="card-header">
                                        <h3>Sign In</h3>
                                        <div className="d-flex justify-content-end social_icon">
                                            <span><i className="fab fa-facebook-square"></i></span>
                                            <span><i className="fab fa-google-plus-square"></i></span>
                                            <span><i className="fab fa-twitter-square"></i></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <Field name='taiKhoan'>
                                                {({field}) => (
                                                    <input
                                                        {...field}
                                                        onChange={handleChange}
                                                        className='form-control'
                                                        placeholder="username"
                                                    />)}
                                            </Field>
                                        </div>
                                        {touched.taiKhoan ? <div className='text-white'>{errors.taiKhoan}</div> :
                                            <div></div>}
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-key"></i>
                                                </span>
                                            </div>
                                            <Field name='matKhau'>
                                                {({field}) => (
                                                    <input
                                                        {...field}
                                                        onChange={handleChange}
                                                        type='password'
                                                        className="form-control"
                                                        placeholder="password"
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        {touched.matKhau ? <div className='text-white'>{errors.matKhau}</div> :
                                            <div></div>}
                                        <div className="my-4 row align-items-center remember">
                                            <input type="checkbox"/>Remember Me
                                        </div>
                                        <div className="form-group">
                                            <input type="submit"
                                                   value="Login"
                                                   className="btn float-right login_btn"/>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-center links">
                                            Don't have an account?<a href="a">Sign Up</a>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <a href="b">Forgot your password?</a>
                                        </div>
                                    </div>
                                </div>
                            </Spin>
                        </div>
                    </div>
                </Form>
            </StyledLogin>
        )
    }
}

const LoginFormik = withFormik({
    mapPropsToValues() { // Init form field
        return {
            taiKhoan: '',
            matKhau: '',
        }
    },
    validationSchema: Yup.object().shape({ // Validate form field
        taiKhoan: Yup.string()
            .required('Tài khoản không được để trống!')
            .min(5, 'Tài khoản phải có tối thiểu 5 kí tự')
            .max(12, 'Tài khoản chỉ được tối đa 12 kí tự'),
        matKhau: Yup.string()
            .required('Mật khẩu không được để trống')
            .min(5, 'Mat khau phai tu 6 ki tu tro len')
    }),
    handleSubmit: (values, {props, setSubmitting, setFieldError}) => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: values
        }).then((response) => {
            props.postUser(response.data)
        }).catch((error) => {
            setSubmitting(false)
            setFieldError('taiKhoan', error.response.data)
            setFieldError('matKhau', error.response.data)
        });
    }
})

const mapStateToProps = (state) => {
    return {
        user: state.LoginReducer,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postUser: (data) => {
            dispatch(logIn(data))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormik(Login)));