import React, {Component} from 'react';
import {StyledCinemaCluster} from "./styled";
import {Row, Col} from 'antd'
import {connect} from "react-redux";
import {getCinemaClusterInfoAPI, getCinemaInfoAPI} from "../../services/CinemaCluster/action";
import {Element} from 'react-scroll'
class CinemaCluster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            biDanh: '',
            maCumRap: '',
            activeClassName: '',
            normalClassName: ''
        }
    }
    componentDidMount() {
        this.props.getCinemaClusterInfo()
        this.props.getCinemaInfo("BHDStar");
        this.setState({
            activeClassName: 'activeCluster'
        })
    }
    handleOnclickCinemaCluster = (maHeThongRap, e) => {
        this.props.getCinemaInfo(maHeThongRap);
        let listClusterEle = document.getElementsByClassName('listCuster')
        for (let i = 0; i < listClusterEle.length; i++) {
            listClusterEle[i].classList.add('normalCluster')
            listClusterEle[i].classList.remove('activeCluster')
        }
        e.target.classList.remove('normalCluster')
        e.target.classList.add('activeCluster')
    }
    //Render thong tin cum rap
    renderCinemaClusterInfoList = () => {
        let {cinemaClusterInfoList} = this.props;
        const eleCinemaCluster = cinemaClusterInfoList.map((item, index) => {
            return (
                <li onClick={(e) => {
                    this.handleOnclickCinemaCluster(item.maHeThongRap, e)
                }}
                    id={index}
                    key={index}
                    style={{cursor: 'pointer',}}
                    className={`${index === 0 ? this.state.activeClassName : ''} listCuster h-100 d-flex justify-content-start align-items-center list-group-item list-group-item-action`}>
                    <img style={{pointerEvents: 'none'}} className='cluster-logo' src={item.logo} alt=''/>
                    <span style={{pointerEvents: 'none'}} className='ml-3 system-name'>{item.tenHeThongRap}</span>
                </li>
            )
        })
        return eleCinemaCluster;
    }
    //END Render thong tin cum rap
    //Render thong tin rap
    renderCinemaInfoList = () => {
        const {cinemaInfoList} = this.props;
        const eleCinema = cinemaInfoList.map((item, index) => {
            return (
                <li onClick={() => {
                    this.handleOnclickCinema(item.maCumRap)
                }}
                    key={index}
                    style={{cursor: "pointer"}}
                    className=" text-left list-group-item list-group-item-action">
                    <div>
                        <b>Tên cụm rạp: </b><span>{item.tenCumRap}</span>
                    </div>
                    <div>
                        <b>Địa chỉ: </b><span>{item.diaChi}</span>
                    </div>
                </li>
            )
        })
        return eleCinema;
    }
    //END Render thong tin rap
    render() {
        return (
            <StyledCinemaCluster id='cinema-cluster' >
                <Element  style={{padding:"60px 0"}} name='cinema-cluster'>
                    <div className='h-100 container-cinema-cluster container'>
                        <Row>
                            <Col  span={6}>
                                <ul className="list-group">
                                    {this.renderCinemaClusterInfoList()}
                                </ul>
                            </Col>
                            <Col span={18}>
                                <ul className="list-group">
                                    {this.renderCinemaInfoList()}
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Element>
            </StyledCinemaCluster>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cinemaClusterInfoList: state.CinemaClusterReducer.cinemaClusterInfo,
        cinemaInfoList: state.CinemaClusterReducer.cinemaInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCinemaClusterInfo: () => {
            dispatch(getCinemaClusterInfoAPI())
        },
        getCinemaInfo: (maHeThongRap) => {
            dispatch(getCinemaInfoAPI(maHeThongRap))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CinemaCluster);