import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import '../css/Lunbo.css'

class Lunbo extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            }
        });
    }
    render() {
        return (
            <div className="Lunbo">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}
export default Lunbo;