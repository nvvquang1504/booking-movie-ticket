import React, {Component} from 'react';
import {connect} from "react-redux";
import {StyledRegister} from "./styled";
import {Form, Input,Spin} from "antd";
import {withRouter, Link} from 'react-router-dom'
import {Form as FormikForm, Field as FormikField, withFormik} from 'formik'
import * as Yup from 'yup'
import Axios from "axios";
import {actRegister} from "../../services/Register/action";
const FormItem = Form.Item;
class Register extends Component {
    componentDidMount() {
        setTimeout(() => {
            let myLoading = document.getElementById('myLoading')
            myLoading.style.display = 'none';
            this.setState({
                isLoadingScreen: false
            })
        }, 2000)
    }
    componentWillUnmount() {
        let myLoading = document.getElementById('myLoading')
        myLoading.style.display = 'flex'
    }
    render() {
        const {
            errors,
            touched,
            isSubmitting
        } = this.props
        return (
            <StyledRegister>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                            <h3>Welcome</h3>
                            <Link to="/login">
                                <input className='btnLogin' type="submit" name="" value="Login"/><br/>
                            </Link>
                        </div>
                        <div className="col-md-9 register-right">
                            <Spin
                                spinning={isSubmitting}
                            >
                                <div className="tab-content" id="myTabContent">
                                    <FormikForm>
                                        <h3 className="register-heading">Đăng ký tài khoản</h3>
                                        <div className="row register-form">
                                            <div className="col-md-6">
                                                <FormItem label='Tài khoản'
                                                >
                                                    <FormikField name='taiKhoan'
                                                    >
                                                        {({field}) => {
                                                            return (
                                                                <Input {...field}
                                                                />
                                                            )
                                                        }}
                                                    </FormikField>
                                                    {touched.taiKhoan ?
                                                        <p className='text-left font-italic'>{errors.taiKhoan}</p> :
                                                        <p></p>}
                                                </FormItem>
                                                <FormItem label='Mật khẩu'>
                                                    <FormikField name="matKhau"
                                                    >
                                                        {({field}) => {
                                                            return (
                                                                <Input.Password  {...field}/>
                                                            )
                                                        }}
                                                    </FormikField>
                                                    {touched.matKhau ?
                                                        <p className='text-left font-italic'>{errors.matKhau}</p> :
                                                        <p></p>}
                                                </FormItem>
                                                <FormItem label='Email'>
                                                    <FormikField name="email"
                                                    >
                                                        {({field}) => {
                                                            return (
                                                                <Input  {...field}/>
                                                            )
                                                        }}
                                                    </FormikField>
                                                    {touched.email ?
                                                        <p className='text-left font-italic'>{errors.email}</p> :
                                                        <p></p>}
                                                </FormItem>
                                                <div style={{display: "none"}}>
                                                    <FormikField name="maLoaiNguoiDung"
                                                    />
                                                </div>
                                                <div style={{display: "none"}}>
                                                    <FormikField name="maNhom"
                                                    />
                                                </div>
                                                <div style={{display: "none"}}>
                                                    <FormikField name="email"
                                                    />
                                                </div>
                                                <FormikField name="callApiError">
                                                    {() => {
                                                        return (
                                                            <div
                                                                className='text-left text-danger'>{errors.callApiError}</div>
                                                        )
                                                    }}
                                                </FormikField>
                                            </div>
                                            <div className="col-md-6">
                                                <FormItem label='Họ tên'>
                                                    <FormikField name="hoTen"
                                                    >
                                                        {({field}) => {
                                                            return (
                                                                <Input {...field}/>
                                                            )
                                                        }}
                                                    </FormikField>
                                                    {touched.hoTen ?
                                                        <p className='text-left font-italic'>{errors.hoTen}</p> :
                                                        <p></p>}
                                                </FormItem>
                                                <FormItem label='SĐT'>
                                                    <FormikField
                                                        name="soDt">
                                                        {({field}) => {
                                                            return (
                                                                <Input {...field}/>
                                                            )
                                                        }}
                                                    </FormikField>
                                                    {touched.soDt ?
                                                        <p className='text-left font-italic'>{errors.soDt}</p> :
                                                        <p></p>}
                                                </FormItem>
                                                <input type="submit" className="btnRegister" value="Register"/>
                                            </div>
                                        </div>
                                    </FormikForm>
                                </div>
                            </Spin>
                        </div>
                    </div>
                </div>
            </StyledRegister>
        );
    }
}
const RegisterFormik = withFormik({
    mapPropsToValues: () => {
        return {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP06',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: '',
            callApiError: ''
        }

    },
    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string()
            .required('Tài khoản không được để trống')
            .min(5, 'Tài khoản phải có tối thiểu 5 kí tự')
            .max(12, 'Tài khoản chỉ được tối đa 12 kí tự'),
        matKhau: Yup.string()
            .required('Mật khẩu không được để trống')
            .min(5, 'Mat khau phai tu 6 ki tu tro len'),
        email: Yup.string()
            .required('Email không được để trống'),
        soDt: Yup.string()
            .required('Số điện thoại không được để trống'),
        hoTen: Yup.string()
            .required('Họ tên không được để trống'),
        callApiError: Yup.string(),
    })
    ,
    handleSubmit: (values, {props, setSubmitting, setFieldError}) => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: values
        }).then((response) => {
            if (response.data) {
                props.actRegister(response.data)
                props.history.push('/login')
            }
        }).catch((error) => {
            if (error.response) {
                setFieldError('callApiError', error.response.data)
            }
        })
    }
})
const mapDispatchToProps = (dispatch) => {
    return {
        actRegister: (user) => {
            dispatch(actRegister(user))
        }
    }

}
export default withRouter(connect(null, mapDispatchToProps)(RegisterFormik(Register)));