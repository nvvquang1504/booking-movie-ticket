import React from 'react';
import {StyledMovie} from "./styled";
import {Link} from "react-router-dom";
import {Card, Col, Button, Rate} from "antd";
import {PlayCircleOutlined} from '@ant-design/icons';
// import ModalMovie from "../ModalMovie";
import ModalVideo from 'react-modal-video'

const {Meta,} = Card;

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            idTrailer: '',
            isOpen: false,
        }
    }

    openModal = (trailer) => {
        this.setState({
            isOpen: true
        })
        if (trailer) {
            let ytbLink = 'https://www.youtube.com/embed/';
            let idTrailer = trailer.slice(ytbLink.length)
            this.setState({
                idTrailer
            })
            this.hoverOff()
        }
    };
    hoverOn = () => {
        this.setState({isHover: true}
        )
    }
    hoverOff = () => {
        this.setState({isHover: false}
        )
    }
    handleClickCard= () => {
        
    }
    render() {
        let {movie} = this.props;
        let {isHover} = this.state;
        return (
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <StyledMovie>
                    <div onClick={this.handleClickCard}
                        onMouseEnter={this.hoverOn}
                         onMouseLeave={this.hoverOff}
                         className={'movie-card-wrapper'}>
                        <Card
                            className='movie-card'
                            hoverable
                            style={{width: "100%"}}
                            cover={
                                <div style={{height: "300px", width: "100%", position: 'relative'}}>
                                    <img
                                        className={'movie-img'}
                                        style={{height: '100%', width: "100%"}}
                                        alt="example" src={movie.hinhAnh}/>
                                    <div className={'overlay-opacity'}>
                                        <PlayCircleOutlined onClick={() => {
                                            this.openModal(movie.trailer)
                                        }}/>
                                        {/*MODAL*/}
                                        <ModalVideo
                                            channel='youtube'
                                            isOpen={this.state.isOpen}
                                            videoId={this.state.idTrailer}
                                            onClose={() => this.setState({isOpen: false})}
                                        />
                                    </div>
                                </div>
                            }
                        >
                            {
                                (isHover)
                                    ?
                                    <div>
                                        <Link to={`/movie-detail/${movie.maPhim}`}>
                                            <div className='p-2 d-flex justify-content-center'>
                                                <Button

                                                    className='w-100 d-flex justify-content-center align-items-center'
                                                    type="danger" size={"large"}>
                                                    Đặt vé
                                                </Button>
                                            </div>
                                        </Link>
                                    </div>
                                    :
                                    <div
                                        className='d-flex flex-column movie-card-detail'>
                                        <Meta title={movie.tenPhim}/>
                                        <Rate style={{fontSize: '15px', padding: "10px 0"}}
                                              disabled
                                              value={movie.danhGia}/>
                                    </div>
                            }
                        </Card>
                    </div>


                </StyledMovie>
            </Col>
        );
    }
}

export default Movie;