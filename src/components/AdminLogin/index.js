import React, {Component} from 'react';
import {withFormik, Form, Field} from "formik";
import Axios from "axios";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {actAdminLogin} from "../../services/AdminLogin/action";
import * as Yup from 'yup'

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticate: false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.authenticate === true) {
            if (nextProps.userType === 'QuanTri') {
                nextProps.history.push('/admin/dashboard')
            }
            if (nextProps.userType === 'KhachHang') {
                return null
            }
        }
        if (prevState.authenticate !== nextProps.authenticate) {
            return prevState.authenticate = nextProps.authenticate
        } else {
            return null
        }
    }
    render() {
        const {
            errors,
            touched
        } = this.props
        return (
            <div style={{width: "400px", height: "100vh"}} className="container">
                <Form>
                    <div className="form-group">
                        <label style={{fontSize: '20px', fontWeight: "500"}} htmlFor="userName">Username:</label>
                        <Field name="taiKhoan" type="text" className="form-control" placeholder="Enter Username"/>
                        {touched.taiKhoan ? <p className='text-left text-danger'>{errors.taiKhoan}</p> : <p></p>}
                    </div>
                    <div className="form-group">
                        <label style={{fontSize: '20px', fontWeight: "500"}} htmlFor="pwd">Password:</label>
                        <Field name="matKhau" type="password" className="form-control" placeholder="Enter password"/>
                        {touched.matKhau ? <p className='text-left text-danger'>{errors.matKhau}</p> : <p></p>}
                    </div>
                    <div className='d-flex justify-content-start align-items-center pt-3'>
                        <input className='mr-2' type="checkbox"/><span>Remember Me</span>
                    </div>
                    <div className='d-flex justify-content-start  align-items-center'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        );
    }
}

const AdminLoginFormik = withFormik({
    mapPropsToValues: () => {
        return {
            taiKhoan: '',
            matKhau: ''
        }
    },
    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string()
            .required('Tên tài khoản không được để trống')
            .min(6, 'Tên tài khoản phải từ 6 - 8 kí tự')
            .max(15, 'Tên tài khoản không vượt quá 15 kí tự'),
        matKhau: Yup.string()
            .required('Mật khẩu không được để trống')
            .min(5, 'Mật khẩu phải từ 6 kí tự trở lên')
    }),
    handleSubmit: (values, {props, setSubmitting, setFieldError}) => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: values
        }).then((response) => {
            props.postUserAdmin(response.data);
        }).catch((error) => {
            setFieldError('taiKhoan', error.response.data);
            setFieldError('matKhau', error.response.data);
        })
    },
})
const mapStateToProps = (state) => {
    return {
        authenticate: state.AdminLoginReducer.authenticate,
        userType: state.AdminLoginReducer.userType,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postUserAdmin: (user) => {
            dispatch(actAdminLogin(user))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps,)(AdminLoginFormik(AdminLogin)));