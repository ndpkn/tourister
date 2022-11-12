import './guides.scss'
import { useRef } from 'react';
import guide1 from '../../images/guide1.png'
import guide2 from '../../images/guide2.png'
import Slider from "react-slick";

const Guides = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.25,
        slidesToScroll: 1
    };
    const sliderReviewRef = useRef(null);

    return (
        <div className="guides">
            <div className="guides-header">
                <div className="subheader">
                    <h3>Tour Guides</h3>
                    <p className="subheader__descr">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
                </div>
                <div className="slider-btn">
                    <span onClick={() => sliderReviewRef.current.slickPrev()}  className="slider-btn__arrow dark-arrow"><span>ᐸ</span></span>
                    <span onClick={() => sliderReviewRef.current.slickNext()} className="slider-btn__arrow dark-arrow"><span>ᐳ</span></span>
                </div>
            </div>
            <div className="guides-slider">
                <Slider {...settings}
                        ref={sliderReviewRef}>
                    <GuidesSliderItem img={guide1} count="01" title="Adventure Guru" name="Martina" surname="James Junior" about="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." journey="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." facebook="https://facebook.com" instagram="https://instagram.com" twitter="https://twitter.com"/>

                    <GuidesSliderItem img={guide2} count="02" title="Human Solutions Coordinator" name="Tracy" surname="Greenholt" about="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." journey="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." facebook="https://facebook.com" instagram="https://instagram.com" twitter="https://twitter.com"/>

                    <GuidesSliderItem img={guide1} count="03" title="Central Response Strategist" name="Maegan" surname="Stroman" about="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." journey="Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking." facebook="https://facebook.com" instagram="https://instagram.com" twitter="https://twitter.com"/>

                </Slider>
            </div>
        </div>
    )
}


const GuidesSliderItem = (props) => {
    return (
        <div className="guides-slider__item">
            <div className="guides-slider__image">
                <img src={props.img} alt="" />
                <span>{props.count}</span>
            </div>
            <div className="guides-slider__info">
                <div className="guides-slider__header">
                    <div className="guides-slider__title">
                        <p>{props.title}</p>
                    </div>
                    <div className="guides-slider__name">
                        <p>{props.name}<br/>{props.surname}</p>
                    </div>
                </div>
                <div className="guides-slider__descr">
                    <div className="guides-slider__descr-item">
                        <h5>About</h5>
                        <p>{props.about}</p>
                    </div>
                    <div className="guides-slider__descr-item">
                        <h5>Journey</h5>
                        <p>{props.journey}</p>
                    </div>
                </div>
                <div className="guides-slider__links">
                    <a href={props.facebook} target='_blanc'>Facebook</a>
                    <a href={props.instagram} target='_blanc'>Instagram</a>
                    <a href={props.twitter} target='_blanc'>Twitter</a>
                </div>
            </div>
        </div>
    )
}


export default Guides