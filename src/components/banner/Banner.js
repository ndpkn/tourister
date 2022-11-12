import './banner.scss'
import icon from '../../images/pay-icon.png'
import location from '../../images/location.png'
import activity from '../../images/activity.png'
import date from '../../images/date.png'
import search from '../../images/search.png'
import Slider from "react-slick";
import { useRef } from 'react'



const Banner = () => {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderReviewRef = useRef(null);

    return (
        <div className="top-subheader">
            <Slider
                {...settings}
                ref={sliderReviewRef}>
                <BannerItem bg="bg-1" descr="The Mountain Ranges" name="Kilimanjaro" weather="-02 °C Very Cold" link="/" prev={() => sliderReviewRef.current.slickPrev()} next={() => sliderReviewRef.current.slickNext()}/>

                <BannerItem bg="bg-2" descr="The highest mountain" name="Everest" weather="-13 °C Very Cold" link="/" prev={() => sliderReviewRef.current.slickPrev()} next={() => sliderReviewRef.current.slickNext()}/>

                <BannerItem bg="bg-3" descr="Caucasian mountains" name="Elbrus" weather="3 °C Cold" link="/" prev={() => sliderReviewRef.current.slickPrev()} next={() => sliderReviewRef.current.slickNext()}/>
            </Slider>

            <div className="filter">
                <div className="filter-item">
                    <div className="filter-item__header">
                        <h3>Location</h3>
                    </div>
                    <div className="filter-item__btn">
                        <div className="filter-item__descr">
                            <a href="/">Enter your destination</a>
                        </div>
                        <div className="filter-item__icon"><img src={location} alt="" /></div>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="filter-item__header">
                        <h3>Activity</h3>
                    </div>
                    <div className="filter-item__btn">
                        <div className="filter-item__descr">
                            <a href="/">Tours & Trips</a>
                        </div>
                        <div className="filter-item__icon"><img src={activity} alt="" /></div>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="filter-item__header">
                        <h3>Date</h3>
                    </div>
                    <div className="filter-item__btn">
                        <div className="filter-item__descr">
                            <a href="/">Set date</a>
                        </div>
                        <span className="filter-item__icon"><img src={date} alt="" /></span>
                    </div>
                </div>
                <div className="filter-item">
                    <div className="filter-item__search-btn">
                        <img src={search} alt="" />
                    </div>
                    <div className="filter-item__search-descr">
                        <p>Check Availability</p>
                    </div>
                </div>
            </div>
            <div className="links">
                <a href="https://twitter.com">Twitter</a>
                <span> / </span>
                <a href="https://facebook.com">Facebook</a>
                <span> / </span>
                <a href="https://instagram.com">Instagram</a>
            </div>
        </div>
    )
}


const BannerItem = (props) => {
    return (
        <div className={`banner ${props.bg}`}>
            <div className="banner-left">
                <div className="banner-descr">
                    <p>- {props.descr}</p>
                </div>
                <div className="banner-name">
                    <h1>{props.name}</h1>
                </div>
                <div className="banner-weather">
                    <p>{props.weather}</p>
                </div>
                <div className="slider-btn">
                    <span onClick={props.prev} className="slider-btn__arrow"><span>ᐸ</span></span>
                    <span onClick={props.next} className="slider-btn__arrow"><span>ᐳ</span></span>
                </div>
            </div>
            <div className="banner-right">
                <div className="banner-icon">
                    <img src={icon} alt="" />
                </div>
                <div className="banner-text">
                    <p>We Accept Payment Through<br/>All Cards & Banking</p>
                    <a href={props.link}>Book Now!</a>
                </div>
            </div>
        </div>
    )
}

export default Banner