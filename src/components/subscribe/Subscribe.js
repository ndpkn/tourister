import './subscribe.scss'
import sub1 from '../../images/sub1.png'
import sub2 from '../../images/sub2.png'
import sub3 from '../../images/sub3.png'
import subDots from '../../images/Icon/subscribeDots .png'
import brands from '../../images/brands.png'

const Subscribe = () => {
    return (
        <>
            <div className="subscribe">
                <div className="subscribe-left">
                    <img src={sub1} alt="" className="subscribe-left-1" />
                    <img src={sub2} alt="" className="subscribe-left-2" />
                    <img src={sub3} alt="" className="subscribe-left-3" />
                </div>
                <div className="subscribe-right">
                    <div className="subscribe-title">
                        <p>Subscribe For Offers</p>
                    </div>
                    <div className="subscribe-header">
                        <h4>Adventures Calling <br /> You Guys!</h4>
                    </div>
                    <div className="subscribe-descr">
                        <p>The Brilliant reasons Entrada should be your one-stop-shop!</p>
                    </div>
                    <div className="subscribe-form">
                        <form action="POST">
                            <input type="email" name="" id="" placeholder='Enter your email'/>
                            <button type="submit">Send Now!</button>
                        </form>
                        <div className="subscribe-form__descr">
                            <p>Expect a reply in 2-3 working days</p>
                        </div>
                    </div>
                </div>
                <img className='subDots' src={subDots} alt="" />
            </div>

            <div className="brands">
                <img src={brands} alt="" />
            </div>
        </>
    )
}

export default Subscribe