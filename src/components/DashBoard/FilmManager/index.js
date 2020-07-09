import React, {Component} from 'react';
import {Rate, Button} from "antd";
import {connect} from "react-redux";
import {StyledFilmManager} from './styled'
import {getListMovieAPI} from "../../../services/ListMovie/action";
import ModalAddEdit from "../ModalAddEdit";
import {Table,} from 'react-bootstrap/'
// import {withFormik} from "formik";
// import {withRouter} from 'react-router-dom'


class FilmManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            movie: {}
        }
    }

    openModal = (item) => {
        if (item) {
            // console.log(item)
            this.setState({
                modalIsOpen: true,
                movie: item
            })
        } else {
            this.setState({
                modalIsOpen: true,
                movie: null
            })
        }
    }

    componentDidMount() {
        this.props.getListMovie()
    }

    renderListMovie = () => {
        let eleListFilmTableRow = this.props.listMovie.map((item, index) => {
            return (
                <tr key={item.maPhim} className='list-films-table__row-body'>
                    <td className='list-films-table__row-body__cell'>{index + 1}</td>
                    <td className='list-films-table__row-body__cell'>
                        <img alt='' style={{width: "60px", height: "100px"}} src={item.hinhAnh}/>
                    </td>
                    <td className='list-films-table__row-body__cell'>{item.tenPhim}</td>
                    <td className='list-films-table__row-body__cell'>
                        <span>{new Date(item.ngayKhoiChieu).toLocaleDateString() + '        -' + new Date(item.ngayKhoiChieu).toLocaleTimeString()}</span>
                    </td>
                    <td className='list-films-table__row-body__cell'>
                        <Rate style={{fontSize: '15px'}}
                              disabled
                              value={item.danhGia}/>
                    </td>
                    <td className='list-films-table__row-body__cell'>
                        <Button onClick={() => {
                            this.openModal(item)
                        }} style={{marginRight: "5px"}} type="primary">Edit</Button>
                        <Button type="danger">Delete</Button>
                    </td>
                </tr>
            )
        })
        return eleListFilmTableRow
    }

    render() {

        return (
            <StyledFilmManager>
                <div style={{textAlign: "left", paddingBottom: "24px"}}>
                    <Button onClick={() => {
                        this.openModal('')
                    }} className='btnAddFilm'
                            style={{backgroundColor: "#28a745", borderColor: "#28a745"}}
                            type="primary">Add Film</Button>
                </div>
                <div>
                    <Table className='list-films-table' bordered hover>
                        <thead>
                        <tr className='list-films-table__row-head'>
                            <th className='list-films-table__row-head__head-title'>STT</th>
                            <th className='list-films-table__row-head__head-title'>Hình ảnh</th>
                            <th className='list-films-table__row-head__head-title'>Tên phim</th>
                            <th className='list-films-table__row-head__head-title'>Ngày khởi chiếu</th>
                            <th className='list-films-table__row-head__head-title'>Đánh giá</th>
                            <th className='list-films-table__row-head__head-title'></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderListMovie()}
                        </tbody>
                    </Table>
                </div>
                <ModalAddEdit movie={this.state.movie} modalIsOpen={this.state.modalIsOpen}/>
            </StyledFilmManager>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listMovie: state.MovieReducer.listMovie,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
            dispatch(getListMovieAPI())
        }
    }
}
export default (connect(mapStateToProps, mapDispatchToProps)(FilmManager));