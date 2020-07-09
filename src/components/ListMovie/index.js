import {StyledList} from "./styled";
import React from 'react';
import Movie from "./Movie";
import {connect} from 'react-redux'
import {getListMovieAPI} from "../../services/ListMovie/action";
import {Tabs, Row} from "antd"
import { Element } from 'react-scroll'

const {TabPane} = Tabs

class ListMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: [],
            divListMovie:''
        }
    }

    componentDidMount() {
        this.props.getListMovie()
        let divListMovie=document.getElementById('list-movie')
        this.setState({
            divListMovie
        }, () => {
            // console.log(this.state)
        })
    }

    render() {

        let {listMovie} = this.props
        let elementMovie = listMovie.map((movie, index) => {
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
                          tabBarStyle={{border:"none"}}
                          animated={false}

                    >
                        <TabPane tab='Phim đang chiếu' key='1'
                        >
                            <div className='container'>
                                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]}
                                     justify="center"
                                     align="middle">
                                    {elementMovie}
                                </Row>
                            </div>
                        </TabPane>
                        <TabPane tab='Phim sắp chiếu' key='2'>
                            <div className='container'>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                                     justify="center"
                                     align="middle">
                                    {elementMovie}
                                </Row>
                            </div>
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