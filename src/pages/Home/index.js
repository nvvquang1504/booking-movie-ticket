import React from 'react';
import NavigationBar from "../../components/NavigationBar/";
import Banner from "../../components/Banner";
import ListMovie from "../../components/ListMovie";
import CinemaCluster from "../../components/CinemaCluster";
import Footer from "../../components/Footer";

class Home extends React.Component {
    componentDidMount() {
        let nav = document.getElementById('navbar');
        nav.classList.remove('fixed-top')
        setTimeout(() => {
            let myLoading = document.getElementById('myLoading')
            myLoading.style.display = 'none';
            let myBody = document.getElementById('myBody')
            if (this.props.location.pathname === '/home' || this.props.location.pathname === '/') {
                myBody.style.paddingTop = "60px";
                nav.classList.add('fixed-top')
            } else {
                myBody.style.paddingTop = "0px";
            }
        }, 2000)
    }
    componentWillUnmount() {
        let myLoading = document.getElementById('myLoading')
        myLoading.style.display = 'flex'
        let myBody = document.getElementById('myBody')
        myBody.style.paddingTop = "0px";
    }
    render() {
        return (
            <div ref={this.myRef} id='home'>
                <NavigationBar/>
                <Banner/>
                <ListMovie/>
                <CinemaCluster/>
                <Footer/>
            </div>
        );
    }
}
export default Home;