import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'
import {Tooltip} from 'antd'

class SeatRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maLichChieu: 0,
            danhSachVe: [],
            taiKhoanNguoiDung: '',
            mySeatName: ''
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.user) {
            this.setState({
                taiKhoanNguoiDung: nextProps.user.taiKhoan
            })
        }
    }
    handleOnclick = (e, item) => {
        //Toggle seat color
        if (e.target.style.backgroundColor === 'lightgrey') {
            e.target.style.backgroundColor = 'green'
            //Set danh sach ghe
            let seat = {
                maGhe: item.maGhe,
                giaVe: item.giaVe
            }
            this.setState({
                danhSachVe: this.state.danhSachVe.concat(seat),
            }, () => {
                this.props.orderedTicket(this.state)
            })
        } else {
            e.target.style.backgroundColor = 'lightgrey'
        }
        //Toggle input children click
        let Children = e.target.children;
        for (let i = 0; i < Children.length; i++) {
            if (Children[i].className === 'myCheckSeat') {
                Children[i].click()
            }
        }
        //Set maLichChieu
        let {maLichChieu} = this.props.filmDetail
        if (maLichChieu) {
            this.setState({
                maLichChieu
            }, () => {
                console.log(this.state.maLichChieu)
            })
        }
    }
    renderSeatRow = () => {
        let seatRowGroup = _.chunk(this.props.SeatList, 16)
        if (seatRowGroup) {
            return seatRowGroup.map((items, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {items.map((item, index) => {
                            return (<td key={index}>
                                    <Tooltip mouseLeaveDelay={0} placement="top" title={item.giaVe + ' VND'}>
                                        <div style={{
                                            backgroundColor: `${item.daDat ? 'red' : 'lightgrey'}`,
                                            pointerEvents: `${item.daDat ? 'none' : 'auto'}`
                                        }}
                                             className={'seat-status'}
                                             onClick={(e) => {
                                                 this.handleOnclick(e, (e ? item : null))
                                             }}
                                             name='maGhe'
                                             value={item.maGhe}
                                        >
                                            <input style={{visibility: 'hidden'}} className={'myCheckSeat'}
                                                   type={'checkbox'}/>
                                        </div>
                                    </Tooltip>
                                </td>
                            )
                        })}
                    </tr>
                )
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.renderSeatRow()}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        SeatList: state.BookingSeatReducer.danhSachGhe,
        filmDetail: state.BookingSeatReducer.thongTinPhim,
        user: state.LoginReducer.userDetail
    }
}
export default connect(mapStateToProps, null)(SeatRow);