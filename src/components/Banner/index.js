import React from 'react';
import {BannerStyled} from "./styled";
import {Carousel} from "antd";
import img1 from '../../assets/images/Banner/aspettando-fast-furious-9-cosa-sappiamo-trailer-v9-47177.jpg'
import img2 from '../../assets/images/Banner/Ted-Slacker.jpg'
import img3 from '../../assets/images/Banner/deadpool-2.jpg'

const Banner = (props) => {
    return (
        <BannerStyled
        >
            <Carousel
                autoplay
                dots={false}>
                <div className='banner-img'>
                    <img
                        className={'w-100'}
                        src={img1}
                        alt="First slide"/>
                </div>
                <div className='banner-img'>
                    <img
                        className={'w-100'}
                        src={img2}
                        alt="Second slide"/>
                </div>
                <div className='banner-img'>
                    <img
                        className={'w-100'}
                        src={img3}
                        alt="Third slide"/>
                </div>
            </Carousel>
        </BannerStyled>
    )
}
export default Banner;