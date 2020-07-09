import React, {Component} from 'react';
import ChillIcon from '../../assets/images/Icon/chill-icon-0.jpg'
import {StyledDashBoard} from "./styled";
import {Layout, Menu} from 'antd';
import FilmManager from "./FilmManager";
import UserManager from "./UserManager";
import {
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    // UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    // MailOutlined,
} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

// const {SubMenu} = Menu;

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            contentComp: <FilmManager/>
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        setTimeout(() => {
            let myLoading = document.getElementById('myLoading')
            myLoading.style.display = 'none';
            this.setState({
                isLoadingScreen: false
            })
        }, 2000)
    }

    render() {
        return (
            <StyledDashBoard>
                <Layout style={{minHeight: "100vh"}}>
                    <Sider trigger={null}>
                        <div style={{display: "flex", justifyContent: "center"}} className="logo">
                            <div style={{cursor: "pointer", width: "40px", height: "40px"}}>
                                <img alt='' style={{width: "40px", height: "40x"}} src={ChillIcon}/>
                            </div>
                            {/*<span style={{paddingLeft: "16px", fontWeight: 700, color: "white"}}>CHILL FILM</span>*/}
                        </div>
                        <Menu theme="dark" mode="inline"
                              defaultSelectedKeys={['1']}
                              defaultOpenKeys={['1']}
                        >
                            <Menu.Item
                                style={{marginTop: 0}}
                                onClick={() => {
                                    this.setState({
                                        contentComp: <FilmManager/>
                                    })
                                }} key="1">Quản lý phim</Menu.Item>
                            {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                            <Menu.Item onClick={() => {
                                this.setState({
                                    contentComp: <UserManager/>
                                })
                            }} key="2">Quản lý người dùng</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header
                            className="site-layout-background"
                            style={{padding: 0, position: "relative"}}>

                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            {this.state.contentComp}
                        </Content>
                    </Layout>
                </Layout>
            </StyledDashBoard>
        );
    }
}

export default DashBoard;