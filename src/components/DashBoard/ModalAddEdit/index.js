import React, {Component} from 'react';
import Modal from 'react-modal';
import {Form} from 'react-bootstrap';
import {Button, Input} from 'antd';
import {withFormik, Field, Form as FormikForm} from "formik";
import * as Yup from 'yup'
import {logOut} from "../../../services/Login/action";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class ModalAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            movie: {}
        }
    }


    UNSAFE_componentWillReceiveProps(nextProps,) {
        if (nextProps.modalIsOpen && nextProps.movie) {
            // console.log(nextProps.movie)
            this.setState({
                modalIsOpen: nextProps.modalIsOpen,
                movie: nextProps.movie
            })
        } else {
            this.setState({
                modalIsOpen: nextProps.modalIsOpen,
                movie: {
                    // maPhim: '',
                    // tenPhim: '',
                    // biDanh: '',
                    // trailer: '',
                    // ngayKhoiChieu: '',
                    // danhGia: '',
                    // moTa: '',
                    // maNhom: '',
                    // hinhAnh: ''
                }
            })
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     prevProps.values = prevState.movie
    // }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.modalIsOpen !== state.modalIsOpen) {
    //         return {
    //             modalIsOpen: props.modalIsOpen
    //         }
    //     }
    //     console.log(props)
    //     console.log(state)
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
    //         return {
    //             modalIsOpen: false
    //         }
    //     }
    //     console.log(this.props)
    //     console.log(prevProps)
    //     console.log(prevState)
    // }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        })
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            movie: {
                ...this.state.movie,
                [name]: value
            }
        });
    }

    // componentDidUpdate() {
    //     var node = ReactDOM.findDOMNode(this);
    //
    //     this.elementBox = node.getBoundingClientRect();
    //     this.elementHeight = node.clientHeight;
    //     // Make calculations and stuff
    // }

    render() {
        const {
            values,
            errors,
            touched,
        } = this.props
        const {movie} = this.state
        // console.log(this.props.values)
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <FormikForm>
                        <h2 style={{textAlign: "center"}}>
                            {this.props.movie ? 'Edit Film' : 'Add Film'}
                        </h2>
                        <Form.Group style={{display: `${this.props.movie ? 'none' : 'block'}`}}
                                    controlId="formAddEditMaPhim">
                            <Form.Label>Mã phim</Form.Label>
                            <Field name='maPhim'
                                   value={values.maPhim}>
                                {({field, form}) => {
                                    return (<Form.Control
                                            {...field}//Them field vao moi co touched
                                            name={'maPhim'}
                                            value={values.maPhim}
                                            onChange={(e,) => {
                                                this.handleOnChange(e)
                                                values.maPhim = e.target.value
                                            }}
                                            type="text"
                                            // isValid={}
                                            isInvalid={form.touched.maPhim && form.errors.maPhim}
                                            isValid={form.touched.maPhim && !form.errors.maPhim && values.maPhim !== ''}
                                        >
                                        </Form.Control>
                                    )
                                }}
                            </Field>
                            {touched.maPhim ? <p>{errors.maPhim}</p> : ''}
                        </Form.Group>
                        <Form.Group controlId="formAddEditTenPhim">
                            <Form.Label>Tên phim</Form.Label>
                            <Field name='tenPhim'
                            >
                                {({field}) => {
                                    return <Form.Control
                                        {...field}
                                        name='tenPhim'
                                        value={values.tenPhim}
                                        onChange={(e) => {
                                            this.handleOnChange(e)
                                            values.tenPhim = e.target.value
                                        }} type={'text'}>
                                    </Form.Control>
                                }}
                            </Field>
                        </Form.Group>
                        <Form.Group controlId="formAddEditBiDanh">
                            <Form.Label>Bí danh</Form.Label>
                            <Field name='biDanh'
                                   value={values.biDanh}>
                                {() => {
                                    return (<Form.Control
                                        name='biDanh' value={movie.biDanh}
                                        onChange={(e) => {
                                            this.handleOnChange(e)
                                            values.biDanh = e.target.value
                                        }} type={'text'}/>)
                                }}
                            </Field>
                            {/*{touched.biDanh ? <p>{errors.biDanh}</p> : ''}*/}
                        </Form.Group>
                        <Form.Group style={{display: `${this.props.movie ? 'none' : 'block'}`}}
                                    controlId="formAddEditTrailer">
                            <Form.Label>Trailer</Form.Label>
                            <Form.Control
                                name='trailer' value={movie.trailer}
                                onChange={(e) => {
                                    this.handleOnChange(e)
                                }} type={'text'}/>
                        </Form.Group>
                        <Form.Group controlId="formAddEditMoTa">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control
                                as={"textarea"} name='moTa' value={movie.moTa}
                                onChange={(e) => {
                                    this.handleOnChange(e)
                                }} type={'text'}/>
                        </Form.Group>
                        <Form.Group controlId="formAddEditNgayKhoiChieu">
                            <Form.Label>Ngày khởi chiếu</Form.Label>
                            <Form.Control
                                type="datetime-local" name='ngayKhoiChieu' value={movie.ngayKhoiChieu}
                                onChange={(e) => {
                                    this.handleOnChange(e)
                                }}/>
                        </Form.Group>
                        <Form.Group style={{display: `${this.props.movie ? 'none' : 'block'}`}}
                                    controlId="formAddEditNgayMaNhom">
                            <Form.Label>Mã nhóm</Form.Label>
                            <Form.Control
                                type="text" name='maNhom' value={movie.maNhom}
                                onChange={(e) => {
                                    this.handleOnChange(e)
                                }}/>
                        </Form.Group>
                        <Form.Group style={{display: `${this.props.movie ? 'none' : 'block'}`}}
                                    controlId="formAddEditdanhGia">
                            <Form.Label>Đánh giá</Form.Label>
                            <Form.Control name='danhGia'
                                          value={movie.danhGia} onChange={this.handleOnChange} type="number"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.File name='hinhAnh' id="exampleFormControlFile1" label="Hình ảnh"/>
                        </Form.Group>
                        <Button style={{marginRight: "5px"}} htmlType='submit' type="primary">
                            Submit
                        </Button>
                        <Button onClick={this.closeModal} type="ghost">
                            Cancel
                        </Button>
                    </FormikForm>
                </Modal>
            </div>
        );
    }
}

const formAddEditWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props,) => {
        return (
            {
                maPhim: props.movie ? props.movie.maPhim : '',
                tenPhim: props.movie ? props.movie.tenPhim : '',
                biDanh: props.movie ? props.movie.biDanh : '',
                trailer: props.movie ? props.movie.trailer : '',
                ngayKhoiChieu: props.movie ? props.movie.ngayKhoiChieu : '',
                danhGia: props.movie ? props.movie.danhGia : 0,
                moTa: props.movie ? props.movie.moTa : '',
                maNhom: props.movie ? props.movie.maNhom : '',
                hinhAnh: props.movie ? props.movie.hinhAnh : '',
            }
        )
    },
    validationSchema: Yup.object().shape({
        maPhim: Yup.number()
            // .min(0, 'Mã phim lớn hơn 0')
            .max(999999, 'Mã phim tối đa 6 số'),
        tenPhim: Yup.string()
            .required('Tên phim không được để trống'),
        biDanh: Yup.string()
            .required('Tên phim không được để trống'),
        trailer: Yup.string()
            .url('Sai địa chỉ trailer'),
        ngayKhoiChieu: Yup.date(),
        danhGia: Yup.number()
            .min(0, 'Đánh giá không nhỏ hơn 0')
            .max(5, 'Đánh giá không lớn hơn 5'),
        moTa: Yup.string()
            .required('Tên phim không được để trống'),
        maNhom: Yup.string(),
        hinhAnh: Yup.string()
            .url('Sai địa chỉ hình ảnh'),
    }),
})
export default formAddEditWithFormik(ModalAddEdit);