import {StyledList} from "./styled";
import React from 'react';
import Movie from "./Movie";
import {connect} from 'react-redux'
import {getListMovieAPI} from "../../services/ListMovie/action";
import {Tabs, Row, Pagination} from "antd"
import {Element} from 'react-scroll'

const {TabPane} = Tabs

class ListMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: [],
            fromIndex: 0,
            toIndex: 8,
            currPage: 1,
        }
    }

    componentDidMount() {
        this.props.getListMovie()
    }

    handleChangePages = (page, pageSize) => {
        this.setState({
            currPage: page,
            fromIndex: (page - 1) * pageSize,
            toIndex: page * pageSize,
        })
    }

    render() {
        let {listMovie} = this.props
        let elementMovie = listMovie.slice(this.state.fromIndex, this.state.toIndex).map((movie, index) => {
            return <Movie
                key={index}
                movie={movie}
                match={this.props.match}
            />
        })
        return (
            <StyledList id='list-movie'>
                <Element name='list-movie'>
                    <Tabs size='large'
                          tabBarStyle={{border: "none"}}
                          animated={false}
                    >
                        <TabPane tab='Phim đang chiếu' key='1'
                        >
                            <div className='container'>
                                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}
                                     justify="center"
                                     align="middle">
                                    {elementMovie}
                                </Row>
                            </div>
                            <Pagination
                                onChange={this.handleChangePages}
                                pageSize={8}
                                total={listMovie.length}
                                defaultCurrent={1}
                                current={this.state.currPage}
                            />
                        </TabPane>
                        <TabPane tab='Phim sắp chiếu' key='2'>
                            <div className='container'>
                                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}
                                     justify="center"
                                     align="middle">
                                    {elementMovie}
                                </Row>
                            </div>
                            <Pagination
                                onChange={this.handleChangePages}
                                pageSize={8}
                                total={listMovie.length}
                                defaultCurrent={1}
                                current={this.state.currPage}
                            />
                        </TabPane>
                    </Tabs>
                </Element>
            </StyledList>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listMovie: state.MovieReducer.listMovie
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
            dispatch(getListMovieAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);